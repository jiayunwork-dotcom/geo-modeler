<script>
    import { currentProject, boreholes, attributeField, attributeRendering, addToast } from '../stores/index.js';
    import api from '../api/client.js';

    let selectedAttribute = 'spt_n';
    let variogramModel = 'spherical';
    let gridNx = 50;
    let gridNy = 50;
    let gridNz = 25;
    let isosurfaceValue = 0;
    let colorMin = 0;
    let colorMax = 100;
    let renderingMode = 'voxel';
    let loading = false;

    const attributeLabels = {
        spt_n: '标贯N值',
        water_content: '含水量',
        compression_modulus: '压缩模量',
    };

    $: {
        $attributeRendering = {
            ...$attributeRendering,
            mode: renderingMode,
            isosurfaceValue,
            colorMin,
            colorMax,
        };
    }

    async function interpolateField() {
        if (!$currentProject) {
            addToast('请先选择项目', 'warning');
            return;
        }
        loading = true;
        try {
            const result = await api.post(
                `/projects/${$currentProject.id}/attributes/interpolate?attribute=${selectedAttribute}&grid_nx=${gridNx}&grid_ny=${gridNy}&grid_nz=${gridNz}&variogram_model=${variogramModel}`
            );
            $attributeField = result;
            if (result.value_min !== undefined) {
                colorMin = result.value_min;
                colorMax = result.value_max;
                isosurfaceValue = (result.value_min + result.value_max) / 2;
            }
            addToast(`属性场插值完成: ${attributeLabels[selectedAttribute]}`, 'success');
        } catch (e) {
            addToast(`插值失败: ${e.message}`, 'error');
        } finally {
            loading = false;
        }
    }
</script>

<div class="panel-header">
    <h3>属性场建模</h3>
</div>

<div class="panel-body scrollable">
    <div class="form-group">
        <label>参数类型</label>
        <select bind:value={selectedAttribute}>
            <option value="spt_n">标贯N值</option>
            <option value="water_content">含水量</option>
            <option value="compression_modulus">压缩模量</option>
        </select>
    </div>

    <div class="form-group">
        <label>变异函数模型</label>
        <select bind:value={variogramModel}>
            <option value="spherical">球状模型</option>
            <option value="exponential">指数模型</option>
            <option value="gaussian">高斯模型</option>
        </select>
    </div>

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

    <button class="btn-primary" on:click={interpolateField} disabled={loading} style="width:100%;">
        {loading ? '插值计算中...' : '开始插值'}
    </button>

    {#if $attributeField}
        <hr style="border-color:var(--border);margin:12px 0;" />

        <h4 style="font-size:13px;margin-bottom:8px;">属性: {attributeLabels[selectedAttribute]}</h4>

        <div class="stats-grid">
            <div class="stat-item">
                <span class="stat-label">最小值</span>
                <span class="stat-value">{$attributeField.value_min?.toFixed(2)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">最大值</span>
                <span class="stat-value">{$attributeField.value_max?.toFixed(2)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">均值</span>
                <span class="stat-value">{$attributeField.value_mean?.toFixed(2)}</span>
            </div>
        </div>

        <h4 style="font-size:13px;margin:12px 0 8px;">渲染设置</h4>

        <div class="form-group">
            <label>渲染模式</label>
            <select bind:value={renderingMode}>
                <option value="voxel">彩色体素</option>
                <option value="isosurface">等值面</option>
            </select>
        </div>

        {#if renderingMode === 'isosurface'}
            <div class="form-group">
                <label>等值面阈值</label>
                <input type="range" bind:value={isosurfaceValue} min={colorMin} max={colorMax} step="0.1" />
                <span style="font-size:11px;">{isosurfaceValue.toFixed(1)}</span>
            </div>
        {/if}

        <div class="form-group">
            <label>颜色映射范围</label>
            <div class="form-row">
                <input type="number" bind:value={colorMin} step="0.1" />
                <input type="number" bind:value={colorMax} step="0.1" />
            </div>
        </div>

        <div class="color-legend">
            <div class="legend-bar" style="background: linear-gradient(to right, #0000ff, #00ff00, #ffff00, #ff0000);"></div>
            <div class="legend-labels">
                <span>{colorMin.toFixed(1)}</span>
                <span>{((colorMin + colorMax) / 2).toFixed(1)}</span>
                <span>{colorMax.toFixed(1)}</span>
            </div>
        </div>
    {/if}
</div>

<style>
    .stats-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 8px;
        margin-bottom: 8px;
    }

    .stat-item {
        background: var(--bg-tertiary);
        padding: 8px;
        border-radius: 6px;
        text-align: center;
    }

    .stat-label {
        font-size: 10px;
        color: var(--text-muted);
        display: block;
    }

    .stat-value {
        font-size: 14px;
        font-weight: 600;
        color: var(--accent);
    }

    .color-legend {
        margin-top: 8px;
    }

    .legend-bar {
        height: 12px;
        border-radius: 6px;
    }

    .legend-labels {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        color: var(--text-muted);
        margin-top: 2px;
    }
</style>
