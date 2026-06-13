<script>
    import { currentProject, boreholes, lithologyTypes, selectedBoreholes, profiles, addToast } from '../stores/index.js';
    import api from '../api/client.js';

    let profileName = '';
    let interpolationMethod = 'linear';
    let activeProfileId = null;
    let profileData = null;
    let annotations = [];
    let newAnnotation = { type: 'text', x: 0, y: 0, text_content: '', arrow_dx: 0, arrow_dy: 0 };

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
            const profile = await api.post('/profiles/', {
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
            profileData = await api.get(`/profiles/${profileId}/data`);
            annotations = await api.get(`/profiles/${profileId}/annotations`);
        } catch (e) {
            addToast(`加载剖面数据失败: ${e.message}`, 'error');
        }
    }

    async function addAnnotation() {
        if (!activeProfileId) return;
        try {
            const ann = await api.post(`/profiles/${activeProfileId}/annotations`, newAnnotation);
            annotations = [...annotations, ann];
            addToast('标注已添加', 'success');
        } catch (e) {
            addToast(`添加标注失败: ${e.message}`, 'error');
        }
    }

    async function deleteAnnotation(annId) {
        try {
            await api.delete(`/profiles/annotations/${annId}`);
            annotations = annotations.filter(a => a.id !== annId);
        } catch (e) {
            addToast(`删除标注失败: ${e.message}`, 'error');
        }
    }

    async function exportPng() {
        if (!activeProfileId) return;
        try {
            const resp = await api.exportProfilePng(activeProfileId);
            const blob = await resp.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = `profile_${activeProfileId}.png`; a.click();
            URL.revokeObjectURL(url);
        } catch (e) {
            addToast(`导出PNG失败: ${e.message}`, 'error');
        }
    }

    async function exportSvg() {
        if (!activeProfileId) return;
        try {
            const resp = await api.exportProfileSvg(activeProfileId);
            const blob = await resp.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = `profile_${activeProfileId}.svg`; a.click();
            URL.revokeObjectURL(url);
        } catch (e) {
            addToast(`导出SVG失败: ${e.message}`, 'error');
        }
    }

    function getLayerColor(lithologyName) {
        const lt = $lithologyTypes?.find(l => l.name === lithologyName);
        return lt?.color || '#888888';
    }

    $: lithologyTypes = [];
    $: {
        if (profileData) {
            const names = new Set();
            profileData.columns?.forEach(c => c.layers?.forEach(l => names.add(l.lithology_name)));
            profileData.connections?.forEach(c => names.add(c.lithology_name));
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
        <h4 style="font-size:13px;margin-bottom:8px;">剖面预览</h4>
        <div class="profile-preview">
            <canvas id="profileCanvas" width="340" height="200"></canvas>
        </div>

        <div class="annotation-section">
            <h4 style="font-size:13px;margin:8px 0;">标注管理</h4>
            {#each annotations as ann}
                <div class="ann-item">
                    <span>{ann.type === 'text' ? '📝' : '➤'} {ann.text_content || `(${ann.x}, ${ann.y})`}</span>
                    <button class="btn-danger btn-sm" on:click={() => deleteAnnotation(ann.id)}>✕</button>
                </div>
            {/each}

            <div class="form-group" style="margin-top:8px;">
                <label>添加文字标注</label>
                <input type="text" bind:value={newAnnotation.text_content} placeholder="标注内容" />
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>X</label>
                    <input type="number" bind:value={newAnnotation.x} />
                </div>
                <div class="form-group">
                    <label>Y</label>
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
        overflow: hidden;
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
