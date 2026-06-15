<script>
    import {
        currentProject, boreholes, waterLevelStats, waterLevelMKResults,
        waterLevelBoxplot, addToast
    } from '../stores/index.js';
    import api from '../api/client.js';

    let selectedBoreholeIds = [];
    let loading = false;
    let boxplotCanvas;
    let activeSection = 'stats';

    function toggleBorehole(id) {
        if (selectedBoreholeIds.includes(id)) {
            selectedBoreholeIds = selectedBoreholeIds.filter(x => x !== id);
        } else {
            selectedBoreholeIds = [...selectedBoreholeIds, id];
        }
    }

    async function runAnalysis() {
        if (!$currentProject || selectedBoreholeIds.length === 0) return;
        loading = true;
        try {
            const [stats, mk, box] = await Promise.all([
                api.getWaterLevelStats($currentProject.id, selectedBoreholeIds),
                api.getWaterLevelMKTest($currentProject.id, selectedBoreholeIds),
                api.getWaterLevelBoxplot($currentProject.id, selectedBoreholeIds),
            ]);
            $waterLevelStats = stats;
            $waterLevelMKResults = mk;
            $waterLevelBoxplot = box;
            setTimeout(drawBoxplot, 50);
        } catch (e) {
            addToast(`分析失败: ${e.message}`, 'error');
        } finally {
            loading = false;
        }
    }

    function getTrendStyle(trend) {
        if (trend === '显著上升') return 'color: #4caf50;';
        if (trend === '显著下降') return 'color: #f44336;';
        return 'color: #9e9e9e;';
    }

    function getTrendIcon(trend) {
        if (trend === '显著上升') return '↑';
        if (trend === '显著下降') return '↓';
        return '—';
    }

    function drawBoxplot() {
        if (!boxplotCanvas) return;
        const canvas = boxplotCanvas;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        const w = rect.width;
        const h = rect.height;

        ctx.fillStyle = '#1a1d23';
        ctx.fillRect(0, 0, w, h);

        if (!$waterLevelBoxplot || $waterLevelBoxplot.length === 0) {
            ctx.fillStyle = '#888';
            ctx.font = '13px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('请执行分析后查看箱线图', w / 2, h / 2);
            return;
        }

        const validData = $waterLevelBoxplot.filter(d => d.boxplot);
        if (validData.length === 0) {
            ctx.fillStyle = '#888';
            ctx.font = '13px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('无有效箱线图数据', w / 2, h / 2);
            return;
        }

        const padding = { top: 20, right: 20, bottom: 50, left: 60 };
        const chartW = w - padding.left - padding.right;
        const chartH = h - padding.top - padding.bottom;

        let globalMin = Infinity, globalMax = -Infinity;
        validData.forEach(d => {
            if (d.boxplot.whisker_low < globalMin) globalMin = d.boxplot.whisker_low;
            if (d.boxplot.whisker_high > globalMax) globalMax = d.boxplot.whisker_high;
        });
        const pad = (globalMax - globalMin) * 0.1 || 1;
        globalMin -= pad;
        globalMax += pad;

        const yScale = (v) => padding.top + chartH - ((v - globalMin) / (globalMax - globalMin)) * chartH;

        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const y = padding.top + (i / 5) * chartH;
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(w - padding.right, y);
            ctx.stroke();

            const val = globalMax - (i / 5) * (globalMax - globalMin);
            ctx.fillStyle = '#888';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(val.toFixed(2), padding.left - 6, y + 3);
        }

        const boxW = Math.min(60, chartW / validData.length * 0.6);
        const gap = chartW / validData.length;

        const colors = ['#4fc3f7', '#81c784', '#ffb74d', '#e57373', '#ba68c8', '#4dd0e1'];

        validData.forEach((d, i) => {
            const cx = padding.left + gap * (i + 0.5);
            const bp = d.boxplot;
            const color = colors[i % colors.length];

            const yQ1 = yScale(bp.q1);
            const yQ3 = yScale(bp.q3);
            const yMed = yScale(bp.median);
            const yWL = yScale(bp.whisker_low);
            const yWH = yScale(bp.whisker_high);

            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(cx, yWL);
            ctx.lineTo(cx, yQ1);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cx, yQ3);
            ctx.lineTo(cx, yWH);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(cx - boxW * 0.3, yWL);
            ctx.lineTo(cx + boxW * 0.3, yWL);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cx - boxW * 0.3, yWH);
            ctx.lineTo(cx + boxW * 0.3, yWH);
            ctx.stroke();

            ctx.fillStyle = color + '40';
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            const bx = cx - boxW / 2;
            const by = Math.min(yQ1, yQ3);
            const bh = Math.abs(yQ3 - yQ1);
            ctx.fillRect(bx, by, boxW, bh);
            ctx.strokeRect(bx, by, boxW, bh);

            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(bx, yMed);
            ctx.lineTo(bx + boxW, yMed);
            ctx.stroke();

            if (bp.outliers && bp.outliers.length > 0) {
                ctx.fillStyle = color;
                bp.outliers.forEach(o => {
                    const yo = yScale(o);
                    ctx.beginPath();
                    ctx.arc(cx, yo, 3, 0, Math.PI * 2);
                    ctx.fill();
                });
            }

            ctx.fillStyle = '#ccc';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(d.hole_id, cx, h - padding.bottom + 18);
        });

        ctx.fillStyle = '#888';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('水位标高 (m)', 14, h / 2);
    }

    $: if ($waterLevelBoxplot && $waterLevelBoxplot.length > 0) {
        setTimeout(drawBoxplot, 50);
    }
</script>

<div class="panel-header">
    <h3>水位分析</h3>
</div>

<div class="panel-body scrollable">
    <div class="form-group" style="margin-bottom:8px;">
        <label style="font-size:12px;">选择钻孔 (可多选)</label>
        <div class="borehole-checkboxes">
            {#each $boreholes as bh}
                <label class="checkbox-label" style="font-size:11px;">
                    <input type="checkbox"
                           checked={selectedBoreholeIds.includes(bh.id)}
                           on:change={() => toggleBorehole(bh.id)} />
                    {bh.hole_id}
                </label>
            {/each}
        </div>
    </div>

    <button class="btn-primary btn-sm" style="width:100%;margin-bottom:12px;"
            on:click={runAnalysis} disabled={loading || selectedBoreholeIds.length === 0}>
        {loading ? '分析中...' : '执行统计分析'}
    </button>

    {#if $waterLevelStats.length > 0}
        <div class="section-tabs">
            <button class="section-tab" class:active={activeSection === 'stats'} on:click={() => activeSection = 'stats'}>统计指标</button>
            <button class="section-tab" class:active={activeSection === 'mk'} on:click={() => activeSection = 'mk'}>MK趋势检验</button>
            <button class="section-tab" class:active={activeSection === 'boxplot'} on:click={() => activeSection = 'boxplot'}>箱线图</button>
        </div>

        {#if activeSection === 'stats'}
            <div class="stats-table-container">
                <table class="stats-table">
                    <thead>
                        <tr>
                            <th>孔号</th>
                            <th>记录数</th>
                            <th>均值</th>
                            <th>中位数</th>
                            <th>标准差</th>
                            <th>变异系数</th>
                            <th>最大连续上升</th>
                            <th>最大连续下降</th>
                            <th>年际变幅</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each $waterLevelStats as s}
                            <tr>
                                <td>{s.hole_id}</td>
                                <td>{s.count}</td>
                                <td>{s.mean?.toFixed(2) ?? '-'}</td>
                                <td>{s.median?.toFixed(2) ?? '-'}</td>
                                <td>{s.std_dev?.toFixed(2) ?? '-'}</td>
                                <td>{s.cv?.toFixed(2) ?? '-'}%</td>
                                <td>{s.max_rise_days ?? '-'}</td>
                                <td>{s.max_fall_days ?? '-'}</td>
                                <td>{s.annual_amplitude?.toFixed(2) ?? '-'}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {:else if activeSection === 'mk'}
            <div class="stats-table-container">
                <table class="stats-table">
                    <thead>
                        <tr>
                            <th>孔号</th>
                            <th>记录数</th>
                            <th>S统计量</th>
                            <th>Var(S)</th>
                            <th>Z值</th>
                            <th>p值</th>
                            <th>趋势</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each $waterLevelMKResults as mk}
                            <tr>
                                <td>{mk.hole_id}</td>
                                <td>{mk.count}</td>
                                <td>{mk.s_stat?.toFixed(1) ?? '-'}</td>
                                <td>{mk.var_s?.toFixed(1) ?? '-'}</td>
                                <td>{mk.z_value?.toFixed(3) ?? '-'}</td>
                                <td>{mk.p_value?.toFixed(4) ?? '-'}</td>
                                <td style={getTrendStyle(mk.trend)}>
                                    <span class="trend-icon">{getTrendIcon(mk.trend)}</span>
                                    {mk.trend}
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
            <div class="mk-legend">
                <span style="color:#4caf50;">↑ 显著上升</span>
                <span style="color:#f44336;">↓ 显著下降</span>
                <span style="color:#9e9e9e;">— 无显著趋势</span>
                <span style="color:#ff9800;">(显著性水平 α=0.05, 至少8条记录)</span>
            </div>
        {:else if activeSection === 'boxplot'}
            <div class="boxplot-container">
                <canvas bind:this={boxplotCanvas} class="boxplot-canvas"></canvas>
            </div>
        {/if}
    {/if}
</div>

<style>
    .borehole-checkboxes {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 10px;
        max-height: 120px;
        overflow-y: auto;
        padding: 4px 0;
    }

    .section-tabs {
        display: flex;
        gap: 2px;
        margin-bottom: 10px;
        border-bottom: 1px solid var(--border);
        padding-bottom: 2px;
    }

    .section-tab {
        background: transparent;
        color: var(--text-secondary);
        padding: 5px 10px;
        font-size: 11px;
        border-radius: 4px 4px 0 0;
        transition: all 0.2s;
    }
    .section-tab:hover {
        color: var(--text-primary);
    }
    .section-tab.active {
        color: var(--accent);
        background: var(--bg-tertiary);
        border-bottom: 2px solid var(--accent);
    }

    .stats-table-container {
        overflow-x: auto;
        margin-bottom: 8px;
    }

    .stats-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 11px;
    }

    .stats-table th,
    .stats-table td {
        padding: 4px 6px;
        text-align: center;
        border: 1px solid var(--border);
        white-space: nowrap;
    }

    .stats-table th {
        background: var(--bg-tertiary);
        color: var(--text-secondary);
        font-weight: 600;
        position: sticky;
        top: 0;
    }

    .stats-table td {
        color: var(--text-primary);
    }

    .trend-icon {
        font-size: 14px;
        font-weight: bold;
        margin-right: 2px;
    }

    .mk-legend {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        font-size: 11px;
        margin-top: 8px;
        padding: 6px 8px;
        background: var(--bg-tertiary);
        border-radius: 4px;
    }

    .boxplot-container {
        width: 100%;
        height: 300px;
        border: 1px solid var(--border);
        border-radius: 6px;
        overflow: hidden;
    }

    .boxplot-canvas {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
