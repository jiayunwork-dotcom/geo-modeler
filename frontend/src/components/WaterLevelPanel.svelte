<script>
    import { onMount } from 'svelte';
    import {
        currentProject, boreholes, waterLevelData, waterLevelSubTab, addToast
    } from '../stores/index.js';
    import api from '../api/client.js';

    let showImport = false;
    let importFile = null;
    let importing = false;
    let importResult = null;
    let selectedBoreholeId = '';
    let historyCanvas;
    let historyChart = null;

    const subTabs = [
        { id: 'data', label: '水位数据' },
        { id: 'history', label: '水位历史' },
    ];

    $: selectedBorehole = $boreholes.find(b => b.id === selectedBoreholeId);

    async function refreshWaterLevels() {
        if (!$currentProject) return;
        try {
            const data = await api.getWaterLevels($currentProject.id);
            $waterLevelData = data;
        } catch (e) {
            addToast(`加载水位数据失败: ${e.message}`, 'error');
        }
    }

    async function handleImport() {
        if (!importFile || !$currentProject) return;
        importing = true;
        try {
            const result = await api.importWaterLevelCsv($currentProject.id, importFile);
            importResult = result;
            addToast(`成功导入 ${result.imported} 条水位记录`, 'success');
            if (result.errors.length > 0) {
                addToast(`有 ${result.errors.length} 个错误`, 'warning');
            }
            await refreshWaterLevels();
        } catch (e) {
            addToast(`导入失败: ${e.message}`, 'error');
        } finally {
            importing = false;
        }
    }

    async function deleteRecord(id) {
        if (!$currentProject) return;
        try {
            await api.deleteWaterLevel($currentProject.id, id);
            addToast('水位记录已删除', 'info');
            await refreshWaterLevels();
        } catch (e) {
            addToast(`删除失败: ${e.message}`, 'error');
        }
    }

    function drawHistoryChart() {
        if (!historyCanvas) return;
        const canvas = historyCanvas;
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

        if (!selectedBoreholeId) {
            ctx.fillStyle = '#888';
            ctx.font = '13px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('请选择钻孔查看水位历史', w / 2, h / 2);
            return;
        }

        const records = $waterLevelData
            .filter(r => r.borehole_id === selectedBoreholeId)
            .sort((a, b) => new Date(a.obs_date) - new Date(b.obs_date));

        if (records.length < 2) {
            ctx.fillStyle = '#888';
            ctx.font = '13px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(records.length === 0 ? '该钻孔暂无水位数据' : '至少需要2条记录才能绘制趋势图', w / 2, h / 2);
            return;
        }

        const padding = { top: 30, right: 20, bottom: 50, left: 60 };
        const chartW = w - padding.left - padding.right;
        const chartH = h - padding.top - padding.bottom;

        const dates = records.map(r => new Date(r.obs_date).getTime());
        const levels = records.map(r => r.water_level);
        const dateMin = Math.min(...dates);
        const dateMax = Math.max(...dates);
        const levelMin = Math.min(...levels);
        const levelMax = Math.max(...levels);
        const levelPad = (levelMax - levelMin) * 0.1 || 1;

        const xScale = (v) => padding.left + ((v - dateMin) / (dateMax - dateMin || 1)) * chartW;
        const yScale = (v) => padding.top + chartH - ((v - (levelMin - levelPad)) / ((levelMax + levelPad) - (levelMin - levelPad) || 1)) * chartH;

        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const y = padding.top + (i / 5) * chartH;
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(w - padding.right, y);
            ctx.stroke();

            const val = (levelMax + levelPad) - (i / 5) * ((levelMax + levelPad) - (levelMin - levelPad));
            ctx.fillStyle = '#888';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(val.toFixed(2), padding.left - 6, y + 3);
        }

        for (let i = 0; i <= 5; i++) {
            const x = padding.left + (i / 5) * chartW;
            const d = new Date(dateMin + (i / 5) * (dateMax - dateMin));
            ctx.fillStyle = '#888';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`, x, h - padding.bottom + 18);
        }

        ctx.fillStyle = '#888';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('日期', w / 2, h - 4);
        ctx.save();
        ctx.translate(12, h / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('水位标高 (m)', 0, 0);
        ctx.restore();

        ctx.strokeStyle = '#4fc3f7';
        ctx.lineWidth = 2;
        ctx.beginPath();
        records.forEach((r, i) => {
            const x = xScale(new Date(r.obs_date).getTime());
            const y = yScale(r.water_level);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();

        ctx.fillStyle = '#4fc3f7';
        records.forEach(r => {
            const x = xScale(new Date(r.obs_date).getTime());
            const y = yScale(r.water_level);
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        });

        const bh = $boreholes.find(b => b.id === selectedBoreholeId);
        if (bh) {
            const elevY = yScale(bh.elevation);
            if (elevY > padding.top && elevY < padding.top + chartH) {
                ctx.strokeStyle = '#ff9800';
                ctx.lineWidth = 1;
                ctx.setLineDash([6, 4]);
                ctx.beginPath();
                ctx.moveTo(padding.left, elevY);
                ctx.lineTo(w - padding.right, elevY);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.fillStyle = '#ff9800';
                ctx.font = '10px sans-serif';
                ctx.textAlign = 'right';
                ctx.fillText(`孔口高程 ${bh.elevation.toFixed(2)}m`, w - padding.right, elevY - 4);
            }
        }
    }

    $: if ($waterLevelSubTab === 'history' && selectedBoreholeId && $waterLevelData) {
        setTimeout(drawHistoryChart, 50);
    }

    onMount(() => {
        refreshWaterLevels();
    });

    let waterLevelsByBorehole;
    $: {
        const map = {};
        $waterLevelData.forEach(r => {
            if (!map[r.borehole_id]) map[r.borehole_id] = [];
            map[r.borehole_id].push(r);
        });
        waterLevelsByBorehole = map;
    }
</script>

<div class="panel-header">
    <h3>地下水位数据</h3>
    <div style="display:flex;gap:6px;">
        <button class="btn-primary btn-sm" on:click={() => showImport = true}>导入CSV</button>
    </div>
</div>

<div class="sub-tabs">
    {#each subTabs as tab}
        <button
            class="sub-tab-btn"
            class:active={$waterLevelSubTab === tab.id}
            on:click={() => $waterLevelSubTab = tab.id}
        >
            {tab.label}
        </button>
    {/each}
</div>

<div class="panel-body scrollable">
    {#if $waterLevelSubTab === 'data'}
        <div class="form-group" style="margin-bottom:10px;">
            <label style="font-size:12px;">筛选钻孔</label>
            <select bind:value={selectedBoreholeId} style="width:100%;font-size:12px;">
                <option value="">全部钻孔</option>
                {#each $boreholes as bh}
                    <option value={bh.id}>{bh.hole_id}</option>
                {/each}
            </select>
        </div>

        {#if $waterLevelData.length === 0}
            <div class="empty-state">
                <p>暂无水位数据</p>
                <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">
                    点击"导入CSV"添加水位时序数据
                </p>
            </div>
        {:else}
            <div class="wl-list">
                {#each $waterLevelData as record}
                    {@const bh = $boreholes.find(b => b.id === record.borehole_id)}
                    {#if !selectedBoreholeId || record.borehole_id === selectedBoreholeId}
                        <div class="wl-card">
                            <div class="wl-card-header">
                                <strong>{bh?.hole_id || '未知'}</strong>
                                <button class="btn-danger btn-sm" style="font-size:10px;padding:2px 6px;"
                                        on:click={() => deleteRecord(record.id)}>删除</button>
                            </div>
                            <div class="wl-card-info">
                                <span>日期: {record.obs_date}</span>
                                <span>水位: {record.water_level.toFixed(2)}m</span>
                                {#if record.water_temp != null}
                                    <span>水温: {record.water_temp.toFixed(1)}℃</span>
                                {/if}
                                {#if record.conductivity != null}
                                    <span>电导率: {record.conductivity.toFixed(1)}μS/cm</span>
                                {/if}
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/if}
    {:else if $waterLevelSubTab === 'history'}
        <div class="form-group" style="margin-bottom:10px;">
            <label style="font-size:12px;">选择钻孔</label>
            <select bind:value={selectedBoreholeId} style="width:100%;font-size:12px;">
                <option value="">请选择钻孔</option>
                {#each $boreholes as bh}
                    <option value={bh.id}>{bh.hole_id} ({(waterLevelsByBorehole[bh.id] || []).length}条)</option>
                {/each}
            </select>
        </div>

        <div class="history-chart-container">
            <canvas bind:this={historyCanvas} class="history-canvas"></canvas>
        </div>

        {#if selectedBoreholeId && (waterLevelsByBorehole[selectedBoreholeId] || []).length > 0}
            {@const records = waterLevelsByBorehole[selectedBoreholeId] || []}
            <div class="history-stats">
                <div class="stat-row">
                    <span>记录数: {records.length}</span>
                    <span>最高: {Math.max(...records.map(r => r.water_level)).toFixed(2)}m</span>
                    <span>最低: {Math.min(...records.map(r => r.water_level)).toFixed(2)}m</span>
                </div>
            </div>
        {/if}
    {/if}
</div>

{#if showImport}
    <div class="modal-overlay" on:click|self={() => { showImport = false; importResult = null; }}>
        <div class="modal">
            <h3>导入水位CSV数据</h3>
            <p style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;">
                CSV字段: 孔号/hole_id, 日期/date(yyyy-MM-dd), 水位标高/water_level, 水温/water_temp, 电导率/conductivity
            </p>
            <div class="form-group">
                <input type="file" accept=".csv" on:change={(e) => importFile = e.target.files[0]} />
            </div>
            {#if importResult}
                <div class="import-result">
                    <p class="badge badge-success">成功导入: {importResult.imported} 条记录</p>
                    {#if importResult.errors.length > 0}
                        <div class="errors" style="max-height:150px;overflow-y:auto;">
                            {#each importResult.errors as err}
                                <p class="badge badge-danger" style="font-size:11px;">{err}</p>
                            {/each}
                        </div>
                    {/if}
                    {#if importResult.warnings.length > 0}
                        <div class="warnings">
                            {#each importResult.warnings as w}
                                <p class="badge badge-warning">{w}</p>
                            {/each}
                        </div>
                    {/if}
                </div>
            {/if}
            <div class="modal-actions">
                <button class="btn-secondary" on:click={() => { showImport = false; importResult = null; }}>关闭</button>
                <button class="btn-primary" on:click={handleImport} disabled={!importFile || importing}>
                    {importing ? '导入中...' : '开始导入'}
                </button>
            </div>
        </div>
    </div>
{/if}

<style>
    .sub-tabs {
        display: flex;
        gap: 2px;
        padding: 4px 12px;
        border-bottom: 1px solid var(--border);
    }

    .sub-tab-btn {
        background: transparent;
        color: var(--text-secondary);
        padding: 6px 12px;
        font-size: 12px;
        border-radius: 4px;
        transition: all 0.2s;
    }
    .sub-tab-btn:hover {
        color: var(--text-primary);
        background: var(--bg-hover);
    }
    .sub-tab-btn.active {
        color: var(--accent);
        background: var(--bg-tertiary);
    }

    .empty-state {
        text-align: center;
        padding: 40px 16px;
        color: var(--text-muted);
    }

    .wl-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .wl-card {
        background: var(--bg-tertiary);
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 8px 10px;
    }

    .wl-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
        font-size: 12px;
    }

    .wl-card-info {
        display: flex;
        gap: 10px;
        font-size: 11px;
        color: var(--text-secondary);
        flex-wrap: wrap;
    }

    .history-chart-container {
        width: 100%;
        height: 280px;
        border: 1px solid var(--border);
        border-radius: 6px;
        overflow: hidden;
    }

    .history-canvas {
        width: 100%;
        height: 100%;
        display: block;
    }

    .history-stats {
        margin-top: 8px;
    }

    .stat-row {
        display: flex;
        gap: 12px;
        font-size: 11px;
        color: var(--text-secondary);
    }

    .import-result {
        margin: 12px 0;
    }
    .import-result p {
        margin-bottom: 4px;
    }
</style>
