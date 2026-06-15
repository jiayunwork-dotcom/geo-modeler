<script>
    import { afterUpdate, tick } from 'svelte';
    import {
        currentProject, boreholes, lithologyTypes, selectedBoreholes, profiles, addToast
    } from '../stores/index.js';
    import api from '../api/client.js';

    let profileName = '';
    let interpolationMethod = 'linear';
    let activeProfileId = null;
    let profileData = null;
    let annotations = [];
    let newAnnotation = { type: 'text', x: 0, y: 0, text_content: '', arrow_dx: 0, arrow_dy: 0 };
    let canvasEl = null;

    const DEFAULT_COLORS = [
        '#E6B89C', '#F0E68C', '#CD853F', '#8B7355', '#A0522D',
        '#DEB887', '#D2B48C', '#BDB76B', '#BC8F8F', '#C4A882',
        '#9ACD32', '#6B8E23', '#556B2F', '#8FBC8F', '#2E8B57',
        '#708090', '#778899', '#B0C4DE', '#87CEEB', '#4682B4',
    ];

    function getLayerColor(lithologyName, lithoIdx = 0) {
        const lt = $lithologyTypes?.find(l => l.name === lithologyName);
        if (lt?.color) return lt.color;
        return DEFAULT_COLORS[lithoIdx % DEFAULT_COLORS.length];
    }

    afterUpdate(() => {
        if (profileData && canvasEl) {
            renderProfileCanvas();
        }
    });

    function renderProfileCanvas() {
        if (!profileData || !canvasEl) return;

        const ctx = canvasEl.getContext('2d');
        const W = canvasEl.width;
        const H = canvasEl.height;
        const padding = { top: 30, right: 20, bottom: 40, left: 60 };
        const plotW = W - padding.left - padding.right;
        const plotH = H - padding.top - padding.bottom;

        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, W, H);

        const columns = profileData.columns;
        const connections = profileData.connections;

        const maxDist = profileData.total_distance > 0 ? profileData.total_distance : 100;
        let minElev = Infinity, maxElev = -Infinity;
        columns.forEach(c => {
            c.layers.forEach(l => {
                if (l.top_elevation > maxElev) maxElev = l.top_elevation;
                if (l.bottom_elevation < minElev) minElev = l.bottom_elevation;
            });
        });
        if (minElev === Infinity) { minElev = 0; maxElev = 100; }
        const elevPadding = (maxElev - minElev) * 0.1 || 10;
        minElev -= elevPadding;
        maxElev += elevPadding;

        const xScale = (d) => padding.left + (d / maxDist) * plotW;
        const yScale = (e) => padding.top + ((maxElev - e) / (maxElev - minElev)) * plotH;

        ctx.strokeStyle = '#cccccc';
        ctx.lineWidth = 0.5;
        for (let e = Math.ceil(minElev); e <= maxElev; e += Math.max(5, Math.round((maxElev - minElev) / 8))) {
            const y = yScale(e);
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(W - padding.right, y);
            ctx.stroke();

            ctx.fillStyle = '#666';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillText(e.toFixed(0) + 'm', padding.left - 5, y);
        }

        ctx.strokeStyle = '#cccccc';
        const dStep = Math.max(10, Math.round(maxDist / 8));
        for (let d = 0; d <= maxDist; d += dStep) {
            const x = xScale(d);
            ctx.beginPath();
            ctx.moveTo(x, padding.top);
            ctx.lineTo(x, H - padding.bottom);
            ctx.stroke();

            ctx.fillStyle = '#666';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(d.toFixed(0) + 'm', x, H - padding.bottom + 5);
        }

        const lithoIdxMap = {};
        (profileData.lithologies || []).forEach((name, i) => { lithoIdxMap[name] = i; });

        connections.forEach(conn => {
            const color = getLayerColor(conn.lithology_name, lithoIdxMap[conn.lithology_name] || 0);
            const dists = conn.distances;
            const topE = conn.top_elevations;
            const botE = conn.bottom_elevations;

            if (dists.length < 2) return;

            ctx.fillStyle = color;
            ctx.globalAlpha = 0.85;
            ctx.beginPath();
            ctx.moveTo(xScale(dists[0]), yScale(topE[0]));
            for (let i = 1; i < dists.length; i++) {
                ctx.lineTo(xScale(dists[i]), yScale(topE[i]));
            }
            for (let i = dists.length - 1; i >= 0; i--) {
                ctx.lineTo(xScale(dists[i]), yScale(botE[i]));
            }
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1.0;

            ctx.strokeStyle = '#333';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            for (let i = 0; i < dists.length; i++) {
                if (i === 0) ctx.moveTo(xScale(dists[i]), yScale(topE[i]));
                else ctx.lineTo(xScale(dists[i]), yScale(topE[i]));
            }
            ctx.stroke();

            ctx.beginPath();
            for (let i = 0; i < dists.length; i++) {
                if (i === 0) ctx.moveTo(xScale(dists[i]), yScale(botE[i]));
                else ctx.lineTo(xScale(dists[i]), yScale(botE[i]));
            }
            ctx.stroke();
        });

        columns.forEach(col => {
            const x = xScale(col.distance);
            const colW = Math.max(12, plotW / Math.max(6, columns.length + 2));

            col.layers.forEach((layer, i) => {
                const color = getLayerColor(layer.lithology_name, lithoIdxMap[layer.lithology_name] || i);
                const yTop = yScale(layer.top_elevation);
                const yBot = yScale(layer.bottom_elevation);
                const h = Math.max(2, yBot - yTop);

                ctx.fillStyle = color;
                ctx.globalAlpha = 0.95;
                ctx.fillRect(x - colW / 2, yTop, colW, h);
                ctx.globalAlpha = 1.0;
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 1;
                ctx.strokeRect(x - colW / 2, yTop, colW, h);

                ctx.fillStyle = '#000';
                ctx.font = 'bold 10px sans-serif';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                const midY = (yTop + yBot) / 2;
                ctx.fillText(`${layer.layer_no}  ${layer.thickness.toFixed(1)}m`, x + colW / 2 + 4, midY);
            });

            ctx.fillStyle = '#000';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(col.hole_id, x, padding.top - 6);
        });

        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.strokeRect(padding.left, padding.top, plotW, plotH);

        ctx.fillStyle = '#333';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText('水平距离 (m)', W / 2, H - 14);

        ctx.save();
        ctx.translate(14, H / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('高程 (m)', 0, 0);
        ctx.restore();
    }

    async function createProfile() {
        if (!$currentProject || $selectedBoreholes.length < 2) {
            addToast('请至少选择2个钻孔', 'warning');
            return;
        }
        if (!profileName.trim()) {
            addToast('请输入剖面名称', 'warning');
            return;
        }
        try {
            const profile = await api.post(`/projects/${$currentProject.id}/profiles`, {
                name: profileName,
                borehole_ids: $selectedBoreholes,
                interpolation_method: interpolationMethod,
            });
            $profiles = [...$profiles, profile];
            profileName = '';
            addToast('剖面线创建成功', 'success');
            await loadProfileData(profile.id);
        } catch (e) {
            addToast(`创建失败: ${e.message}`, 'error');
        }
    }

    async function loadProfileData(profileId) {
        activeProfileId = profileId;
        try {
            profileData = await api.get(`/projects/profiles/${profileId}/data`);
            annotations = await api.get(`/projects/profiles/${profileId}/annotations`);
            await tick();
            renderProfileCanvas();
        } catch (e) {
            addToast(`加载剖面数据失败: ${e.message}`, 'error');
        }
    }

    async function addAnnotation() {
        if (!activeProfileId) return;
        try {
            const ann = await api.post(`/projects/profiles/${activeProfileId}/annotations`, newAnnotation);
            annotations = [...annotations, ann];
            addToast('标注已添加', 'success');
        } catch (e) {
            addToast(`添加标注失败: ${e.message}`, 'error');
        }
    }

    async function deleteAnnotation(annId) {
        try {
            await api.delete(`/projects/profiles/annotations/${annId}`);
            annotations = annotations.filter(a => a.id !== annId);
        } catch (e) {
            addToast(`删除标注失败: ${e.message}`, 'error');
        }
    }

    async function exportPng() {
        if (!activeProfileId) return;
        try {
            await api.downloadBlob(`/export/profile/${activeProfileId}/png`, `profile_${activeProfileId}.png`);
        } catch (e) {
            addToast(`导出PNG失败: ${e.message}`, 'error');
        }
    }

    async function exportSvg() {
        if (!activeProfileId) return;
        try {
            await api.downloadBlob(`/export/profile/${activeProfileId}/svg`, `profile_${activeProfileId}.svg`);
        } catch (e) {
            addToast(`导出SVG失败: ${e.message}`, 'error');
        }
    }
</script>

<div class="panel-header">
    <h3>剖面分析</h3>
    <div style="display:flex;gap:6px;">
        <button class="btn-secondary btn-sm" on:click={exportPng} disabled={!activeProfileId}>PNG</button>
        <button class="btn-secondary btn-sm" on:click={exportSvg} disabled={!activeProfileId}>SVG</button>
    </div>
</div>

<div class="panel-body scrollable">
    <div class="form-group">
        <label>剖面名称</label>
        <input type="text" bind:value={profileName} placeholder="输入剖面名称" />
    </div>

    <div class="form-group">
        <label>插值方式</label>
        <select bind:value={interpolationMethod}>
            <option value="linear">线性插值</option>
            <option value="cubic_spline">三次样条</option>
            <option value="kriging">Kriging地统计插值</option>
        </select>
    </div>

    <div class="form-group">
        <label>已选钻孔 ({$selectedBoreholes.length})</label>
        <div class="selected-bhs">
            {#each $boreholes.filter(b => $selectedBoreholes.includes(b.id)) as bh}
                <span class="badge badge-info">{bh.hole_id}</span>
            {/each}
            {#if $selectedBoreholes.length < 2}
                <span style="font-size:11px;color:var(--text-muted);">请在钻孔管理中选择2个以上钻孔</span>
            {/if}
        </div>
    </div>

    <button class="btn-primary" on:click={createProfile} style="width:100%;margin-bottom:12px;">
        生成剖面
    </button>

    {#if $profiles.length > 0}
        <div class="profile-list">
            <h4 style="font-size:13px;margin-bottom:8px;">剖面列表</h4>
            {#each $profiles as p}
                <div class="profile-item" class:active={activeProfileId === p.id}
                     on:click={() => loadProfileData(p.id)}>
                    <span>{p.name}</span>
                    <span class="badge badge-info">{p.interpolation_method}</span>
                </div>
            {/each}
        </div>
    {/if}

    {#if profileData}
        <hr style="border-color:var(--border);margin:12px 0;" />
        <h4 style="font-size:13px;margin-bottom:8px;">剖面图预览</h4>
        <div class="profile-preview">
            <canvas bind:this={canvasEl} id="profileCanvas" width="340" height="280"></canvas>
        </div>

        {#if profileData.lithologies?.length > 0}
            <div class="legend-box">
                <h5 style="font-size:11px;margin:8px 0 4px;color:var(--text-secondary);">图例</h5>
                <div class="legend-list">
                    {#each profileData.lithologies as name, i}
                        <div class="legend-item">
                            <span class="color-swatch" style="background:{getLayerColor(name, i)}"></span>
                            <span style="font-size:11px;">{name}</span>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}

        <div class="annotation-section">
            <h4 style="font-size:13px;margin:8px 0;">标注管理</h4>
            {#if annotations.length > 0}
                {#each annotations as ann}
                    <div class="ann-item">
                        <span>{ann.type === 'text' ? '📝' : '➤'} {ann.text_content || `(${ann.x}, ${ann.y})`}</span>
                        <button class="btn-danger btn-sm" on:click={() => deleteAnnotation(ann.id)}>✕</button>
                    </div>
                {/each}
            {:else}
                <p style="font-size:11px;color:var(--text-muted);margin-bottom:6px;">暂无标注</p>
            {/if}

            <div class="form-group" style="margin-top:8px;">
                <label>添加文字标注</label>
                <input type="text" bind:value={newAnnotation.text_content} placeholder="标注内容" />
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>X (距离m)</label>
                    <input type="number" bind:value={newAnnotation.x} />
                </div>
                <div class="form-group">
                    <label>Y (高程m)</label>
                    <input type="number" bind:value={newAnnotation.y} />
                </div>
            </div>
            <button class="btn-secondary btn-sm" on:click={addAnnotation} style="width:100%;">添加标注</button>
        </div>
    {/if}
</div>

<style>
    .selected-bhs {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        min-height: 24px;
    }

    .profile-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 10px;
        background: var(--bg-tertiary);
        border: 1px solid var(--border);
        border-radius: 6px;
        margin-bottom: 4px;
        cursor: pointer;
        font-size: 12px;
        transition: border-color 0.2s;
    }
    .profile-item:hover { border-color: var(--accent); }
    .profile-item.active { border-color: var(--accent); background: var(--bg-hover); }

    .profile-preview {
        background: #fff;
        border-radius: 6px;
        padding: 4px;
        overflow: hidden;
    }

    .legend-box {
        background: var(--bg-tertiary);
        border-radius: 6px;
        padding: 4px 8px;
        margin-top: 6px;
    }

    .legend-list {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 12px;
    }

    .legend-item {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .ann-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 8px;
        background: var(--bg-tertiary);
        border-radius: 4px;
        margin-bottom: 4px;
        font-size: 12px;
    }

    .annotation-section {
        margin-top: 8px;
    }
</style>
