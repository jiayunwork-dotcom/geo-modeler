<script>
    import {
        currentProject, boreholes, activeModelResult, lithologyTypes,
        waterLevelContourResult, waterLevelContourVisible, waterLevelContourOpacity,
        waterLevelIntersectionLine, addToast
    } from '../stores/index.js';
    import api from '../api/client.js';

    let dateMode = 'single';
    let singleDate = '';
    let dateFrom = '';
    let dateTo = '';
    let variogramModel = 'spherical';
    let gridNx = 50;
    let gridNy = 50;
    let computing = false;
    let intersectLayerName = '';

    $: layerNames = $activeModelResult?.lithologies || [];
    $: canComputeIntersect = $waterLevelContourResult && intersectLayerName && $activeModelResult;

    async function computeContour() {
        if (!$currentProject) return;
        computing = true;
        try {
            const data = {
                variogram_model: variogramModel,
                grid_nx: gridNx,
                grid_ny: gridNy,
            };
            if (dateMode === 'single' && singleDate) {
                data.obs_date = singleDate;
            } else if (dateMode === 'range' && dateFrom && dateTo) {
                data.date_from = dateFrom;
                data.date_to = dateTo;
            }
            const result = await api.krigingWaterLevel($currentProject.id, data);
            $waterLevelContourResult = result;
            $waterLevelContourVisible = true;
            addToast('水位等值线生成完成', 'success');
        } catch (e) {
            addToast(`等值线计算失败: ${e.message}`, 'error');
        } finally {
            computing = false;
        }
    }

    function computeIntersection() {
        if (!$waterLevelContourResult || !$activeModelResult || !intersectLayerName) return;

        const contour = $waterLevelContourResult;
        const model = $activeModelResult;
        const grid = contour.grid;
        const wlGrid = contour.water_level_grid;
        const modelGrid = model.grid;

        const surface = model.surfaces[intersectLayerName];
        if (!surface?.top) {
            addToast('该地层顶面数据不可用', 'error');
            return;
        }

        const contourNx = grid.nx;
        const contourNy = grid.ny;
        const modelNx = modelGrid.nx;
        const modelNy = modelGrid.ny;

        const lonRange = grid.lon_max - grid.lon_min;
        const latRange = grid.lat_max - grid.lat_min;
        const mLonRange = modelGrid.lon_max - modelGrid.lon_min;
        const mLatRange = modelGrid.lat_max - modelGrid.lat_min;

        const intersectionPoints = [];

        for (let j = 0; j < Math.min(contourNy, modelNy) - 1; j++) {
            for (let i = 0; i < Math.min(contourNx, modelNx) - 1; i++) {
                const wlVal00 = wlGrid[j]?.[i];
                const wlVal10 = wlGrid[j]?.[i + 1];
                const wlVal01 = wlGrid[j + 1]?.[i];
                const wlVal11 = wlGrid[j + 1]?.[i + 1];

                const mi = Math.min(Math.floor(i / (contourNx - 1) * (modelNx - 1)), modelNx - 2);
                const mj = Math.min(Math.floor(j / (contourNy - 1) * (modelNy - 1)), modelNy - 2);
                const topVal00 = surface.top[mj]?.[mi];
                const topVal10 = surface.top[mj]?.[mi + 1];
                const topVal01 = surface.top[mj + 1]?.[mi];
                const topVal11 = surface.top[mj + 1]?.[mi + 1];

                if (wlVal00 == null || wlVal10 == null || wlVal01 == null || wlVal11 == null) continue;
                if (topVal00 == null || topVal10 == null || topVal01 == null || topVal11 == null) continue;

                const corners = [
                    { i, j, wl: wlVal00, top: topVal00 },
                    { i: i + 1, j, wl: wlVal10, top: topVal10 },
                    { i: i + 1, j: j + 1, wl: wlVal11, top: topVal11 },
                    { i, j: j + 1, wl: wlVal01, top: topVal01 },
                ];

                const edges = [
                    [corners[0], corners[1]],
                    [corners[1], corners[2]],
                    [corners[2], corners[3]],
                    [corners[3], corners[0]],
                ];

                for (const [a, b] of edges) {
                    const diffA = a.wl - a.top;
                    const diffB = b.wl - b.top;
                    if (diffA * diffB < 0) {
                        const t = diffA / (diffA - diffB);
                        const lon = grid.lon_min + (a.i + t * (b.i - a.i)) / (contourNx - 1) * lonRange;
                        const lat = grid.lat_min + (a.j + t * (b.j - a.j)) / (contourNy - 1) * latRange;
                        const elev = a.top + t * (b.top - a.top);
                        intersectionPoints.push({ longitude: lon, latitude: lat, elevation: elev });
                    }
                }
            }
        }

        $waterLevelIntersectionLine = intersectionPoints;
        if (intersectionPoints.length > 0) {
            addToast(`交线计算完成，共 ${intersectionPoints.length} 个交点`, 'success');
        } else {
            addToast('水位面与该地层顶面无交线', 'info');
        }
    }
</script>

<div class="panel-header">
    <h3>水位等值线</h3>
</div>

<div class="panel-body scrollable">
    <div class="form-group">
        <label style="font-size:12px;">日期模式</label>
        <select bind:value={dateMode} style="width:100%;font-size:12px;">
            <option value="single">单日</option>
            <option value="range">日期范围(取均值)</option>
        </select>
    </div>

    {#if dateMode === 'single'}
        <div class="form-group">
            <label style="font-size:12px;">观测日期</label>
            <input type="date" bind:value={singleDate} style="width:100%;font-size:12px;" />
        </div>
    {:else}
        <div class="form-row">
            <div class="form-group">
                <label style="font-size:12px;">起始日期</label>
                <input type="date" bind:value={dateFrom} style="width:100%;font-size:12px;" />
            </div>
            <div class="form-group">
                <label style="font-size:12px;">结束日期</label>
                <input type="date" bind:value={dateTo} style="width:100%;font-size:12px;" />
            </div>
        </div>
    {/if}

    <div class="form-group">
        <label style="font-size:12px;">变异函数模型</label>
        <select bind:value={variogramModel} style="width:100%;font-size:12px;">
            <option value="spherical">球状模型</option>
            <option value="exponential">指数模型</option>
            <option value="gaussian">高斯模型</option>
        </select>
    </div>

    <div class="form-row">
        <div class="form-group">
            <label style="font-size:12px;">网格X</label>
            <input type="number" bind:value={gridNx} min="5" max="100" style="width:100%;font-size:12px;" />
        </div>
        <div class="form-group">
            <label style="font-size:12px;">网格Y</label>
            <input type="number" bind:value={gridNy} min="5" max="100" style="width:100%;font-size:12px;" />
        </div>
    </div>

    <button class="btn-primary btn-sm" style="width:100%;margin-bottom:12px;"
            on:click={computeContour}
            disabled={computing || (!singleDate && dateMode === 'single') || (!dateFrom && dateMode === 'range')}>
        {computing ? '计算中...' : '生成等值线'}
    </button>

    {#if $waterLevelContourResult}
        <div class="result-info">
            <div class="info-row">
                <span>水位范围:</span>
                <span>{$waterLevelContourResult.water_level_min?.toFixed(2)} ~ {$waterLevelContourResult.water_level_max?.toFixed(2)} m</span>
            </div>
        </div>

        <div class="form-group" style="margin-top:10px;">
            <label style="display:flex;align-items:center;gap:6px;font-size:12px;">
                <input type="checkbox" bind:checked={$waterLevelContourVisible} />
                显示等值面
            </label>
        </div>

        <div class="form-group">
            <label style="font-size:12px;">透明度: {$waterLevelContourOpacity.toFixed(1)}</label>
            <input type="range" min="0.1" max="1" step="0.05" bind:value={$waterLevelContourOpacity} style="width:100%;" />
        </div>

        <hr style="border-color:var(--border);margin:12px 0;" />

        <h4 style="font-size:12px;margin-bottom:8px;">水位面与地层面交线</h4>

        {#if layerNames.length > 0}
            <div class="form-group">
                <label style="font-size:12px;">选择地层</label>
                <select bind:value={intersectLayerName} style="width:100%;font-size:12px;">
                    <option value="">请选择地层</option>
                    {#each layerNames as name}
                        <option value={name}>{name}</option>
                    {/each}
                </select>
            </div>

            <button class="btn-secondary btn-sm" style="width:100%;"
                    on:click={computeIntersection}
                    disabled={!canComputeIntersect}>
                计算交线
            </button>

            {#if $waterLevelIntersectionLine && $waterLevelIntersectionLine.length > 0}
                <div class="info-row" style="margin-top:8px;">
                    <span>交点数:</span>
                    <span>{$waterLevelIntersectionLine.length}</span>
                </div>
            {/if}
        {:else}
            <p style="font-size:11px;color:var(--text-muted);">需要先完成三维建模才能计算交线</p>
        {/if}
    {/if}
</div>

<style>
    .result-info {
        background: var(--bg-tertiary);
        border-radius: 6px;
        padding: 8px 10px;
    }

    .info-row {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: var(--text-secondary);
    }
</style>
