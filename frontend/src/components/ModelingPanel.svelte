<script>
    import { onMount } from 'svelte';
    import {
        currentProject, boreholes, modelRuns, activeModelResult,
        modelingProgress, layerVisibility, layerOpacity, clipPlane,
        volumeResult, lithologyTypes, addToast
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
                        <input type="number" bind:value={rangeParam} step="0.001" />
                    </div>
                    <div class="form-group">
                        <label>基台值</label>
                        <input type="number" bind:value={sillParam} step="0.001" />
                    </div>
                </div>
                <div class="form-group">
                    <label>块金值</label>
                    <input type="number" bind:value={nuggetParam} step="0.001" />
                </div>
            {/if}

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
</style>
