<script>
    import { onMount } from 'svelte';
    import {
        currentProject, boreholes, modelRuns, activeModelResult,
        modelingProgress, layerVisibility, layerOpacity, clipPlane,
        volumeResult, lithologyTypes, addToast, variogramPreview
    } from '../stores/index.js';
    import api from '../api/client.js';

    let variogramModel = 'spherical';
    let rangeParam = '';
    let sillParam = '';
    let nuggetParam = '';
    let anisoAngle = 0;
    let anisoRatio = 1;
    let gridNx = 50;
    let gridNy = 50;
    let gridNz = 25;
    let autoFit = true;
    let selectedVolumeLayer = '';
    let variogramCanvas = null;

    async function fetchVariogramPreview() {
        if (!$boreholes || $boreholes.length < 3) return;

        const coords = $boreholes.map(b => [b.longitude, b.latitude]);
        const values = $boreholes.map(b => b.elevation);

        try {
            const data = await api.post('/projects/modeling/variogram-preview', {
                model_type: variogramModel,
                range_param: autoFit ? null : (rangeParam ? parseFloat(rangeParam) : null),
                sill_param: autoFit ? null : (sillParam ? parseFloat(sillParam) : null),
                nugget_param: autoFit ? null : (nuggetParam ? parseFloat(nuggetParam) : null),
                coords: coords,
                values: values,
            });
            $variogramPreview = data;
        } catch (e) {
            console.warn('变异函数预览失败:', e);
        }
    }

    function drawVariogramChart() {
        if (!variogramCanvas || !$variogramPreview) return;

        const canvas = variogramCanvas;
        const ctx = canvas.getContext('2d');
        const W = canvas.width;
        const H = canvas.height;

        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#1a1d23';
        ctx.fillRect(0, 0, W, H);

        const padding = { top: 20, right: 16, bottom: 36, left: 50 };
        const plotW = W - padding.left - padding.right;
        const plotH = H - padding.top - padding.bottom;

        const vp = $variogramPreview;
        const expLags = vp.experimental_lags || [];
        const expGamma = vp.experimental_gamma || [];
        const modelH = vp.model_h || [];
        const modelGamma = vp.model_gamma || [];

        if (expLags.length === 0 && modelH.length === 0) return;

        const allH = [...expLags, ...modelH];
        const allGamma = [...expGamma, ...modelGamma];
        const maxH = Math.max(...allH, 1);
        const maxG = Math.max(...allGamma, 1);

        const xScale = (h) => padding.left + (h / maxH) * plotW;
        const yScale = (g) => padding.top + plotH - (g / maxG) * plotH;

        ctx.strokeStyle = '#3a3f4b';
        ctx.lineWidth = 0.5;
        for (let i = 0; i <= 5; i++) {
            const g = (maxG / 5) * i;
            const y = yScale(g);
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(W - padding.right, y);
            ctx.stroke();

            ctx.fillStyle = '#6b7280';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillText(g.toFixed(1), padding.left - 6, y);
        }

        for (let i = 0; i <= 5; i++) {
            const h = (maxH / 5) * i;
            const x = xScale(h);
            ctx.beginPath();
            ctx.moveTo(x, padding.top);
            ctx.lineTo(x, H - padding.bottom);
            ctx.stroke();

            ctx.fillStyle = '#6b7280';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(h.toFixed(1), x, H - padding.bottom + 4);
        }

        ctx.strokeStyle = '#4f8ff7';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < modelH.length; i++) {
            const x = xScale(modelH[i]);
            const y = yScale(modelGamma[i]);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.fillStyle = '#fbbf24';
        expLags.forEach((lag, i) => {
            const x = xScale(lag);
            const y = yScale(expGamma[i]);
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.strokeStyle = '#9aa0ac';
        ctx.lineWidth = 1;
        ctx.strokeRect(padding.left, padding.top, plotW, plotH);

        ctx.fillStyle = '#9aa0ac';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText('滞后距离', W / 2, H - 14);

        ctx.save();
        ctx.translate(12, H / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('半变异函数值', 0, 0);
        ctx.restore();

        const legendY = padding.top + 4;
        ctx.fillStyle = '#4f8ff7';
        ctx.fillRect(W - padding.right - 100, legendY, 14, 3);
        ctx.fillStyle = '#9aa0ac';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText('理论曲线', W - padding.right - 82, legendY + 2);

        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(W - padding.right - 93, legendY + 16, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#9aa0ac';
        ctx.fillText('实验值', W - padding.right - 82, legendY + 16);

        if (vp.range && vp.sill && vp.nugget) {
            ctx.fillStyle = '#9aa0ac';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.fillText(`变程=${vp.range.toFixed(2)} 基台=${vp.sill.toFixed(2)} 块金=${vp.nugget.toFixed(2)}`, padding.left + 4, padding.top + 4);
        }
    }

    $: {
        if ($variogramPreview && variogramCanvas) {
            drawVariogramChart();
        }
    }

    async function startModeling() {
        if (!$currentProject) {
            addToast('请先选择项目', 'warning');
            return;
        }
        try {
            const params = {
                variogram_model: variogramModel,
                range_param: autoFit ? null : (rangeParam ? parseFloat(rangeParam) : null),
                sill_param: autoFit ? null : (sillParam ? parseFloat(sillParam) : null),
                nugget_param: autoFit ? null : (nuggetParam ? parseFloat(nuggetParam) : null),
                aniso_angle: anisoAngle,
                aniso_ratio: anisoRatio,
                grid_nx: gridNx,
                grid_ny: gridNy,
                grid_nz: gridNz,
            };
            const run = await api.post(`/projects/${$currentProject.id}/modeling/run`, params);
            $modelingProgress = { status: 'running', progress: 0, runId: run.id };
            addToast('建模任务已启动', 'info');

            connectWs(run.id);
        } catch (e) {
            addToast(`启动建模失败: ${e.message}`, 'error');
        }
    }

    function connectWs(runId) {
        const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
        const ws = new WebSocket(`${protocol}//${location.host}/api/ws/${$currentProject.id}?run_id=${runId}`);

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            $modelingProgress = {
                status: data.status,
                progress: data.progress,
                runId: data.run_id,
            };

            if (data.status === 'completed') {
                addToast('三维建模完成!', 'success');
                loadModelResult(runId);
            } else if (data.status === 'failed') {
                addToast('三维建模失败', 'error');
            }
        };

        ws.onerror = () => {
            pollProgress(runId);
        };

        ws.onclose = () => {
            if ($modelingProgress.status === 'running') {
                pollProgress(runId);
            }
        };
    }

    async function pollProgress(runId) {
        const poll = async () => {
            if ($modelingProgress.status !== 'running') return;
            try {
                const run = await api.get(`/projects/modeling/runs/${runId}`);
                $modelingProgress = { status: run.status, progress: run.progress, runId: run.id };
                if (run.status === 'completed') {
                    addToast('三维建模完成!', 'success');
                    await loadModelResult(runId);
                } else if (run.status === 'failed') {
                    addToast('三维建模失败', 'error');
                } else {
                    setTimeout(poll, 2000);
                }
            } catch (e) {
                setTimeout(poll, 3000);
            }
        };
        setTimeout(poll, 1000);
    }

    async function loadModelResult(runId) {
        try {
            const result = await api.get(`/projects/modeling/runs/${runId}/result`);
            $activeModelResult = result;

            result.lithologies?.forEach(name => {
                if ($layerVisibility[name] === undefined) {
                    $layerVisibility[name] = true;
                }
                if ($layerOpacity[name] === undefined) {
                    $layerOpacity[name] = 0.7;
                }
            });

            $modelingProgress = { status: 'completed', progress: 100, runId };
        } catch (e) {
            addToast(`加载模型结果失败: ${e.message}`, 'error');
        }
    }

    async function computeVolume() {
        if (!$modelingProgress.runId || !selectedVolumeLayer) return;
        try {
            const result = await api.post(
                `/projects/modeling/runs/${$modelingProgress.runId}/volume?lithology_name=${encodeURIComponent(selectedVolumeLayer)}`
            );
            $volumeResult = result;
            addToast(`${result.lithology_name} 体积: ${result.volume.toFixed(1)} m³`, 'success');
        } catch (e) {
            addToast(`体积计算失败: ${e.message}`, 'error');
        }
    }

    async function refreshRuns() {
        if (!$currentProject) return;
        $modelRuns = await api.get(`/projects/${$currentProject.id}/modeling/runs`);
    }

    $: if (variogramModel || rangeParam || sillParam || nuggetParam || autoFit) {
        if ($boreholes?.length >= 3) {
            fetchVariogramPreview();
        }
    }
</script>

<div class="panel-header">
    <h3>三维建模</h3>
    <button class="btn-secondary btn-sm" on:click={refreshRuns}>刷新</button>
</div>

<div class="panel-body scrollable">
    {#if $modelingProgress.status === 'running'}
        <div class="progress-section">
            <p>建模中... {$modelingProgress.progress.toFixed(0)}%</p>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width:{$modelingProgress.progress}%"></div>
            </div>
        </div>
    {:else}
        <div class="model-params">
            <div class="form-group">
                <label>变异函数模型</label>
                <select bind:value={variogramModel}>
                    <option value="spherical">球状模型</option>
                    <option value="exponential">指数模型</option>
                    <option value="gaussian">高斯模型</option>
                </select>
            </div>

            <label class="checkbox-label">
                <input type="checkbox" bind:checked={autoFit} />
                自动拟合参数
            </label>

            {#if !autoFit}
                <div class="form-row">
                    <div class="form-group">
                        <label>变程</label>
                        <input type="number" bind:value={rangeParam} step="0.001" on:input={fetchVariogramPreview} />
                    </div>
                    <div class="form-group">
                        <label>基台值</label>
                        <input type="number" bind:value={sillParam} step="0.001" on:input={fetchVariogramPreview} />
                    </div>
                </div>
                <div class="form-group">
                    <label>块金值</label>
                    <input type="number" bind:value={nuggetParam} step="0.001" on:input={fetchVariogramPreview} />
                </div>
            {/if}

            <h4 style="font-size:13px;margin:12px 0 8px;">半变异函数拟合预览</h4>
            <div class="variogram-preview">
                <canvas bind:this={variogramCanvas} id="variogramCanvas" width="340" height="200"></canvas>
            </div>
            <button class="btn-secondary btn-sm" on:click={fetchVariogramPreview} style="width:100%;margin-top:4px;">
                刷新预览
            </button>

            <h4 style="font-size:13px;margin:12px 0 8px;">各向异性</h4>
            <div class="form-row">
                <div class="form-group">
                    <label>主轴方向(°)</label>
                    <input type="number" bind:value={anisoAngle} step="1" />
                </div>
                <div class="form-group">
                    <label>各向异性比</label>
                    <input type="number" bind:value={anisoRatio} step="0.1" min="1" />
                </div>
            </div>

            <h4 style="font-size:13px;margin:12px 0 8px;">网格分辨率</h4>
            <div class="form-row">
                <div class="form-group">
                    <label>NX</label>
                    <input type="number" bind:value={gridNx} min="5" max="100" />
                </div>
                <div class="form-group">
                    <label>NY</label>
                    <input type="number" bind:value={gridNy} min="5" max="100" />
                </div>
                <div class="form-group">
                    <label>NZ</label>
                    <input type="number" bind:value={gridNz} min="5" max="50" />
                </div>
            </div>

            <button class="btn-primary" on:click={startModeling} style="width:100%;margin-top:12px;">
                开始建模
            </button>
        </div>
    {/if}

    {#if $activeModelResult}
        <hr style="border-color:var(--border);margin:12px 0;" />

        <h4 style="font-size:13px;margin-bottom:8px;">图层控制</h4>
        {#each $activeModelResult.lithologies || [] as lithoName}
            <div class="layer-control">
                <label class="checkbox-label">
                    <input type="checkbox"
                           checked={$layerVisibility[lithoName] !== false}
                           on:change={() => {
                               $layerVisibility[lithoName] = $layerVisibility[lithoName] !== false ? false : true;
                               $layerVisibility = $layerVisibility;
                           }} />
                    <span class="color-swatch" style="background:{$lithologyTypes?.find(l => l.name === lithoName)?.color || '#888'}"></span>
                    {lithoName}
                </label>
                <div class="opacity-control">
                    <span style="font-size:10px;color:var(--text-muted);">透明度</span>
                    <input type="range"
                           value={$layerOpacity[lithoName] ?? 70}
                           on:input={(e) => {
                               $layerOpacity[lithoName] = e.target.value / 100;
                               $layerOpacity = $layerOpacity;
                           }}
                           min="0" max="100" />
                </div>
            </div>
        {/each}

        <hr style="border-color:var(--border);margin:12px 0;" />

        <h4 style="font-size:13px;margin-bottom:8px;">切面</h4>
        <div class="form-group">
            <label class="checkbox-label">
                <input type="checkbox"
                       checked={$clipPlane.enabled}
                       on:change={() => $clipPlane.enabled = !$clipPlane.enabled} />
                启用切面
            </label>
        </div>
        {#if $clipPlane.enabled}
            <div class="form-group">
                <label>切面位置</label>
                <input type="range"
                       value={$clipPlane.position[0]}
                       on:input={(e) => {
                           $clipPlane.position = [parseFloat(e.target.value), 0, 0];
                           $clipPlane = $clipPlane;
                       }}
                       min="-100" max="100" />
            </div>
        {/if}

        <hr style="border-color:var(--border);margin:12px 0;" />

        <h4 style="font-size:13px;margin-bottom:8px;">体积估算</h4>
        <div class="form-group">
            <select bind:value={selectedVolumeLayer}>
                <option value="">选择地层</option>
                {#each $activeModelResult.lithologies || [] as name}
                    <option value={name}>{name}</option>
                {/each}
            </select>
        </div>
        <button class="btn-primary btn-sm" on:click={computeVolume} disabled={!selectedVolumeLayer} style="width:100%;">
            计算体积
        </button>

        {#if $volumeResult}
            <div class="volume-result">
                <p>{$volumeResult.lithology_name}</p>
                <p class="volume-value">{$volumeResult.volume.toFixed(1)} m³</p>
            </div>
        {/if}

        {#if $modelRuns.length > 0}
            <hr style="border-color:var(--border);margin:12px 0;" />
            <h4 style="font-size:13px;margin-bottom:8px;">历史建模</h4>
            {#each $modelRuns.slice(0, 5) as run}
                <div class="run-item" on:click={() => run.status === 'completed' && loadModelResult(run.id)}>
                    <span class="badge badge-{run.status === 'completed' ? 'success' : run.status === 'failed' ? 'danger' : 'warning'}">
                        {run.status}
                    </span>
                    <span style="font-size:11px;">{run.variogram_model} {run.grid_nx}x{run.grid_ny}x{run.grid_nz}</span>
                </div>
            {/each}
        {/if}
    {/if}
</div>

<style>
    .progress-section {
        margin-bottom: 16px;
    }
    .progress-section p {
        font-size: 13px;
        margin-bottom: 6px;
        text-align: center;
    }

    .layer-control {
        margin-bottom: 8px;
        padding: 6px 8px;
        background: var(--bg-tertiary);
        border-radius: 6px;
    }

    .opacity-control {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 4px;
        padding-left: 24px;
    }
    .opacity-control input {
        flex: 1;
    }

    .volume-result {
        margin-top: 8px;
        padding: 8px 12px;
        background: var(--bg-tertiary);
        border-radius: 6px;
        text-align: center;
    }
    .volume-value {
        font-size: 20px;
        font-weight: 700;
        color: var(--accent);
    }

    .run-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 8px;
        background: var(--bg-tertiary);
        border-radius: 6px;
        margin-bottom: 4px;
        cursor: pointer;
        font-size: 11px;
    }
    .run-item:hover {
        background: var(--bg-hover);
    }

    .variogram-preview {
        background: #1a1d23;
        border-radius: 6px;
        padding: 4px;
        overflow: hidden;
    }

    .variogram-preview canvas {
        width: 100%;
        height: auto;
    }
</style>
