<script>
    import { onMount } from 'svelte';
    import {
        currentProject, boreholes, waterLevelData, waterLevelSubTab, addToast,
        waterLevelThresholds, waterLevelAnomalies, selectedWaterLevelBoreholeId,
        waterLevelWarnings
    } from '../stores/index.js';
    import api from '../api/client.js';

    let showImport = false;
    let importFile = null;
    let importing = false;
    let importResult = null;
    let selectedBoreholeId = '';
    let historyCanvas;
    let historyChart = null;

    let thresholdBoreholeId = '';
    let blueThreshold = '';
    let orangeThreshold = '';
    let redThreshold = '';
    let savingThreshold = false;
    let currentThresholdId = null;

    let selectedAnomalyDetail = null;

    const subTabs = [
        { id: 'data', label: '水位数据' },
        { id: 'history', label: '水位历史' },
        { id: 'thresholds', label: '预警设置' },
    ];

    $: selectedBorehole = $boreholes.find(b => b.id === selectedBoreholeId);

    $: {
        const storeVal = $selectedWaterLevelBoreholeId;
        if (storeVal && storeVal !== selectedBoreholeId) {
            selectedBoreholeId = storeVal;
        }
    }

    function onBoreholeSelectChange(e) {
        selectedBoreholeId = e.target.value;
        $selectedWaterLevelBoreholeId = selectedBoreholeId;
    }

    async function refreshWaterLevels() {
        if (!$currentProject) return;
        try {
            const data = await api.getWaterLevels($currentProject.id);
            $waterLevelData = data;
            await refreshThresholds();
            await refreshWarnings();
            await detectAnomaliesForAll();
        } catch (e) {
            addToast(`加载水位数据失败: ${e.message}`, 'error');
        }
    }

    async function refreshThresholds() {
        if (!$currentProject) return;
        try {
            const data = await api.getWaterLevelThresholds($currentProject.id);
            $waterLevelThresholds = data;
        } catch (e) {
            console.warn('加载阈值失败:', e);
        }
    }

    async function refreshWarnings() {
        if (!$currentProject) return;
        try {
            const data = await api.getWaterLevelWarnings($currentProject.id);
            $waterLevelWarnings = data;
        } catch (e) {
            console.warn('加载预警失败:', e);
        }
    }

    async function detectAnomaliesForAll() {
        if (!$currentProject || !$waterLevelData || $waterLevelData.length === 0) return;
        const bhIds = [...new Set($waterLevelData.map(r => r.borehole_id))];
        if (bhIds.length === 0) return;
        try {
            const data = await api.detectWaterLevelAnomalies($currentProject.id, bhIds);
            $waterLevelAnomalies = data;
        } catch (e) {
            console.warn('异常检测失败:', e);
        }
    }

    function getWarningLevel(waterLevel, boreholeId) {
        const threshold = $waterLevelThresholds.find(t => t.borehole_id === boreholeId);
        if (!threshold) return null;
        if (waterLevel >= threshold.red_threshold) return 'red';
        if (waterLevel >= threshold.orange_threshold) return 'orange';
        if (waterLevel >= threshold.blue_threshold) return 'blue';
        return null;
    }

    function getWarningRowClass(level) {
        if (!level) return '';
        return `wl-warning-${level}`;
    }

    function isAnomaly(recordId, boreholeId) {
        const bhData = $waterLevelAnomalies[boreholeId];
        if (!bhData) return false;
        return bhData.anomalies?.some(a => a.id === recordId);
    }

    function getAnomalyDetail(recordId, boreholeId) {
        const bhData = $waterLevelAnomalies[boreholeId];
        if (!bhData) return null;
        return bhData.anomalies?.find(a => a.id === recordId);
    }

    function showAnomalyPopup(record) {
        const detail = getAnomalyDetail(record.id, record.borehole_id);
        if (detail) {
            selectedAnomalyDetail = { ...detail, hole_id: $waterLevelAnomalies[record.borehole_id]?.hole_id };
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

    $: if (thresholdBoreholeId) {
        autoFillThresholdForm(thresholdBoreholeId, $waterLevelThresholds, $boreholes, $waterLevelData);
    }

    function autoFillThresholdForm(bhId, thresholds, boreholes, waterLevelData) {
        const existing = thresholds.find(t => t.borehole_id === bhId);
        if (existing) {
            blueThreshold = existing.blue_threshold;
            orangeThreshold = existing.orange_threshold;
            redThreshold = existing.red_threshold;
            currentThresholdId = existing.id;
        } else {
            const bh = boreholes.find(b => b.id === bhId);
            if (bh) {
                const records = waterLevelData.filter(r => r.borehole_id === bhId).map(r => r.water_level);
                if (records.length > 0) {
                    const min = Math.min(...records);
                    const max = Math.max(...records);
                    const range = max - min;
                    blueThreshold = (min + range * 0.5).toFixed(2);
                    orangeThreshold = (min + range * 0.75).toFixed(2);
                    redThreshold = (min + range * 0.95).toFixed(2);
                } else {
                    blueThreshold = '';
                    orangeThreshold = '';
                    redThreshold = '';
                }
            }
            currentThresholdId = null;
        }
    }

    async function loadThresholdForBorehole(bhId) {
        thresholdBoreholeId = bhId;
    }

    async function saveThreshold() {
        if (!$currentProject || !thresholdBoreholeId) {
            addToast('请选择钻孔', 'warning');
            return;
        }
        const blue = parseFloat(blueThreshold);
        const orange = parseFloat(orangeThreshold);
        const red = parseFloat(redThreshold);
        if (isNaN(blue) || isNaN(orange) || isNaN(red)) {
            addToast('请输入有效的阈值', 'error');
            return;
        }
        if (!(blue < orange && orange < red)) {
            addToast('阈值必须满足蓝色 < 橙色 < 红色', 'error');
            return;
        }
        savingThreshold = true;
        try {
            const data = {
                borehole_id: thresholdBoreholeId,
                blue_threshold: blue,
                orange_threshold: orange,
                red_threshold: red,
            };
            if (currentThresholdId) {
                await api.updateWaterLevelThreshold($currentProject.id, currentThresholdId, data);
                addToast('阈值更新成功', 'success');
            } else {
                await api.createWaterLevelThreshold($currentProject.id, data);
                addToast('阈值设置成功', 'success');
            }
            await refreshThresholds();
            await refreshWarnings();
        } catch (e) {
            addToast(`保存失败: ${e.message}`, 'error');
        } finally {
            savingThreshold = false;
        }
    }

    async function deleteCurrentThreshold() {
        if (!$currentProject || !currentThresholdId) return;
        if (!confirm('确定要删除该钻孔的预警阈值设置吗?')) return;
        try {
            await api.deleteWaterLevelThreshold($currentProject.id, currentThresholdId);
            addToast('阈值已删除', 'info');
            blueThreshold = '';
            orangeThreshold = '';
            redThreshold = '';
            currentThresholdId = null;
            await refreshThresholds();
            await refreshWarnings();
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

        const threshold = $waterLevelThresholds.find(t => t.borehole_id === selectedBoreholeId);

        const dates = records.map(r => new Date(r.obs_date).getTime());
        const levels = records.map(r => r.water_level);
        let dateMin = Math.min(...dates);
        let dateMax = Math.max(...dates);
        let levelMin = Math.min(...levels);
        let levelMax = Math.max(...levels);

        if (threshold) {
            levelMin = Math.min(levelMin, threshold.blue_threshold);
            levelMax = Math.max(levelMax, threshold.red_threshold);
        }

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

        if (threshold) {
            const thresholdLines = [
                { value: threshold.blue_threshold, color: '#2196f3', label: '蓝色预警' },
                { value: threshold.orange_threshold, color: '#ff9800', label: '橙色预警' },
                { value: threshold.red_threshold, color: '#f44336', label: '红色预警' },
            ];
            thresholdLines.forEach(t => {
                const y = yScale(t.value);
                if (y > padding.top && y < padding.top + chartH) {
                    ctx.strokeStyle = t.color;
                    ctx.lineWidth = 1.5;
                    ctx.setLineDash([6, 4]);
                    ctx.beginPath();
                    ctx.moveTo(padding.left, y);
                    ctx.lineTo(w - padding.right, y);
                    ctx.stroke();
                    ctx.setLineDash([]);
                    ctx.fillStyle = t.color;
                    ctx.font = '10px sans-serif';
                    ctx.textAlign = 'left';
                    ctx.fillText(`${t.label} ${t.value.toFixed(2)}m`, padding.left + 4, y - 4);
                }
            });
        }

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

        const bhAnomalies = $waterLevelAnomalies[selectedBoreholeId]?.anomalies || [];
        const anomalyIds = new Set(bhAnomalies.map(a => a.id));

        records.forEach(r => {
            const x = xScale(new Date(r.obs_date).getTime());
            const y = yScale(r.water_level);
            const isAnom = anomalyIds.has(r.id);
            if (isAnom) {
                ctx.strokeStyle = '#f44336';
                ctx.lineWidth = 2;
                ctx.fillStyle = 'transparent';
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            } else {
                ctx.fillStyle = '#4fc3f7';
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fill();
            }
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
            <select value={selectedBoreholeId} on:change={onBoreholeSelectChange} style="width:100%;font-size:12px;">
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
                    {@const warningLevel = getWarningLevel(record.water_level, record.borehole_id)}
                    {@const isAnom = isAnomaly(record.id, record.borehole_id)}
                    {#if !selectedBoreholeId || record.borehole_id === selectedBoreholeId}
                        <div class="wl-card {getWarningRowClass(warningLevel)} {isAnom ? 'wl-anomaly' : ''}">
                            <div class="wl-card-header">
                                <div class="wl-card-title">
                                    <strong>{bh?.hole_id || '未知'}</strong>
                                    {#if isAnom}
                                        <span class="anomaly-icon" title="异常值" on:click={() => showAnomalyPopup(record)}>⚠️</span>
                                    {/if}
                                    {#if warningLevel}
                                        <span class="warning-badge warning-{warningLevel}">
                                            {warningLevel === 'blue' ? '蓝' : warningLevel === 'orange' ? '橙' : '红'}
                                        </span>
                                    {/if}
                                </div>
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
            <select value={selectedBoreholeId} on:change={onBoreholeSelectChange} style="width:100%;font-size:12px;">
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
    {:else if $waterLevelSubTab === 'thresholds'}
        <div class="form-group" style="margin-bottom:10px;">
            <label style="font-size:12px;">选择钻孔</label>
            <select value={thresholdBoreholeId} on:change={(e) => { thresholdBoreholeId = e.target.value; }} style="width:100%;font-size:12px;">
                <option value="">请选择钻孔</option>
                {#each $boreholes as bh}
                    <option value={bh.id}>{bh.hole_id}</option>
                {/each}
            </select>
        </div>

        {#if thresholdBoreholeId}
            <div class="threshold-form">
                <div class="form-group">
                    <label style="font-size:12px;">蓝色预警阈值 (水位偏高)</label>
                    <input type="number" step="0.01" bind:value={blueThreshold} placeholder="输入蓝色预警阈值" style="width:100%;" />
                    <span style="font-size:10px;color:#2196f3;">水位超过此值触发蓝色预警</span>
                </div>
                <div class="form-group">
                    <label style="font-size:12px;">橙色预警阈值 (水位异常)</label>
                    <input type="number" step="0.01" bind:value={orangeThreshold} placeholder="输入橙色预警阈值" style="width:100%;" />
                    <span style="font-size:10px;color:#ff9800;">水位超过此值触发橙色预警</span>
                </div>
                <div class="form-group">
                    <label style="font-size:12px;">红色预警阈值 (水位危险)</label>
                    <input type="number" step="0.01" bind:value={redThreshold} placeholder="输入红色预警阈值" style="width:100%;" />
                    <span style="font-size:10px;color:#f44336;">水位超过此值触发红色预警</span>
                </div>
                <div class="form-group" style="margin-top:8px;">
                    <button class="btn-primary btn-sm" style="width:100%;" on:click={saveThreshold} disabled={savingThreshold}>
                        {savingThreshold ? '保存中...' : (currentThresholdId ? '更新阈值' : '保存阈值')}
                    </button>
                    {#if currentThresholdId}
                        <button class="btn-danger btn-sm" style="width:100%;margin-top:6px;" on:click={deleteCurrentThreshold}>删除阈值设置</button>
                    {/if}
                </div>
                <p style="font-size:11px;color:var(--text-muted);margin-top:8px;">
                    业务规则: 蓝色 &lt; 橙色 &lt; 红色
                </p>
            </div>
        {/if}

        {#if $waterLevelThresholds.length > 0}
            <div class="thresholds-list">
            <h4 style="font-size:12px;margin:12px 0 6px;color:var(--text-secondary);">已配置阈值的钻孔</h4>
            <div class="thresholds-table">
                {#each $waterLevelThresholds as t}
                    {@const bh = $boreholes.find(b => b.id === t.borehole_id)}
                    <div class="threshold-row" on:click={() => loadThresholdForBorehole(t.borehole_id)}>
                        <span class="threshold-hole">{bh?.hole_id || '未知'}</span>
                        <div class="threshold-values">
                            <span class="tv tv-blue">{t.blue_threshold.toFixed(2)}</span>
                            <span class="tv tv-orange">{t.orange_threshold.toFixed(2)}</span>
                            <span class="tv tv-red">{t.red_threshold.toFixed(2)}</span>
                        </div>
                    </div>
                {/each}
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

{#if selectedAnomalyDetail}
    <div class="modal-overlay" on:click|self={() => selectedAnomalyDetail = null}>
        <div class="modal anomaly-modal">
            <h3>异常值详情</h3>
            <div class="anomaly-header">
                <span class="anomaly-hole">钻孔: {selectedAnomalyDetail.hole_id}</span>
                <span class={`anomaly-direction ${selectedAnomalyDetail.is_upper ? 'upper' : 'lower'}`}>
                    {selectedAnomalyDetail.is_upper ? '↑ 偏高异常' : '↓ 偏低异常'}
                </span>
            </div>
            <div class="anomaly-info">
                <div class="anomaly-row">
                    <span>偏离均值:</span>
                    <strong>{selectedAnomalyDetail.deviation > 0 ? '+' : ''}{selectedAnomalyDetail.deviation.toFixed(2)}m ({selectedAnomalyDetail.deviation_pct.toFixed(2)}%)</strong>
                </div>
                <div class="anomaly-row">
                    <span>日期:</span>
                    <span>{selectedAnomalyDetail.obs_date}</span>
                </div>
                <div class="anomaly-row">
                    <span>水位:</span>
                    <span>{selectedAnomalyDetail.water_level.toFixed(2)}m</span>
                </div>
                <div class="anomaly-row">
                    <span>水温:</span>
                    <span>{selectedAnomalyDetail.water_temp != null ? selectedAnomalyDetail.water_temp.toFixed(1) + '℃' : '—'}</span>
                </div>
                <div class="anomaly-row">
                    <span>电导率:</span>
                    <span>{selectedAnomalyDetail.conductivity != null ? selectedAnomalyDetail.conductivity.toFixed(1) + 'μS/cm' : '—'}</span>
                </div>
            </div>

            {#if selectedAnomalyDetail.before_records.length > 0}
                <div class="anomaly-neighbors">
                    <h4>前序记录</h4>
                    {#each selectedAnomalyDetail.before_records as br}
                        <div class="neighbor-row">
                            <span>{br.obs_date}</span>
                            <span>{br.water_level.toFixed(2)}m</span>
                        </div>
                    {/each}
                </div>
            {/if}

            <div class="anomaly-current highlight">
                <div class="neighbor-row">
                    <span>{selectedAnomalyDetail.obs_date} (当前)</span>
                    <span>{selectedAnomalyDetail.water_level.toFixed(2)}m</span>
                </div>
            </div>

            {#if selectedAnomalyDetail.after_records.length > 0}
                <div class="anomaly-neighbors">
                    <h4>后续记录</h4>
                    {#each selectedAnomalyDetail.after_records as ar}
                        <div class="neighbor-row">
                            <span>{ar.obs_date}</span>
                            <span>{ar.water_level.toFixed(2)}m</span>
                        </div>
                    {/each}
                </div>
            {/if}

            <div class="modal-actions">
                <button class="btn-primary" on:click={() => selectedAnomalyDetail = null}>关闭</button>
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
        transition: all 0.2s;
    }

    .wl-card.wl-warning-blue {
        background: linear-gradient(90deg, rgba(33, 150, 243, 0.15), var(--bg-tertiary));
        border-color: rgba(33, 150, 243, 0.4);
    }

    .wl-card.wl-warning-orange {
        background: linear-gradient(90deg, rgba(255, 152, 0, 0.15), var(--bg-tertiary));
        border-color: rgba(255, 152, 0, 0.4);
    }

    .wl-card.wl-warning-red {
        background: linear-gradient(90deg, rgba(244, 67, 54, 0.15), var(--bg-tertiary));
        border-color: rgba(244, 67, 54, 0.4);
    }

    .wl-card.wl-anomaly {
        border-left: 3px solid #f44336;
    }

    .wl-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
        font-size: 12px;
    }

    .wl-card-title {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .anomaly-icon {
        cursor: pointer;
        font-size: 14px;
    }

    .warning-badge {
        font-size: 10px;
        padding: 1px 5px;
        border-radius: 3px;
        font-weight: 600;
    }

    .warning-blue {
        background: rgba(33, 150, 243, 0.2);
        color: #2196f3;
    }

    .warning-orange {
        background: rgba(255, 152, 0, 0.2);
        color: #ff9800;
    }

    .warning-red {
        background: rgba(244, 67, 54, 0.2);
        color: #f44336;
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

    .threshold-form {
        padding: 8px 0;
    }

    .thresholds-list {
        margin-top: 16px;
        border-top: 1px solid var(--border);
        padding-top: 8px;
    }

    .thresholds-table {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .threshold-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 8px;
        background: var(--bg-tertiary);
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.2s;
    }

    .threshold-row:hover {
        background: var(--bg-hover);
    }

    .threshold-hole {
        font-size: 12px;
        font-weight: 600;
    }

    .threshold-values {
        display: flex;
        gap: 6px;
    }

    .tv {
        font-size: 10px;
        padding: 2px 6px;
        border-radius: 3px;
    }

    .tv-blue {
        background: rgba(33, 150, 243, 0.15);
        color: #2196f3;
    }

    .tv-orange {
        background: rgba(255, 152, 0, 0.15);
        color: #ff9800;
    }

    .tv-red {
        background: rgba(244, 67, 54, 0.15);
        color: #f44336;
    }

    .anomaly-modal {
        min-width: 320px;
    }

    .anomaly-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
    }

    .anomaly-hole {
        font-size: 14px;
        font-weight: 600;
    }

    .anomaly-direction {
        font-size: 12px;
        padding: 3px 8px;
        border-radius: 4px;
        font-weight: 600;
    }

    .anomaly-direction.upper {
        background: rgba(244, 67, 54, 0.15);
        color: #f44336;
    }

    .anomaly-direction.lower {
        background: rgba(33, 150, 243, 0.15);
        color: #2196f3;
    }

    .anomaly-info {
        background: var(--bg-tertiary);
        padding: 10px 12px;
        border-radius: 6px;
        margin-bottom: 12px;
    }

    .anomaly-row {
        display: flex;
        justify-content: space-between;
        padding: 3px 0;
        font-size: 12px;
    }

    .anomaly-neighbors {
        margin: 8px 0;
    }

    .anomaly-neighbors h4 {
        font-size: 11px;
        color: var(--text-muted);
        margin: 4px 0;
    }

    .neighbor-row {
        display: flex;
        justify-content: space-between;
        padding: 4px 10px;
        font-size: 11px;
        background: var(--bg-tertiary);
        border-radius: 4px;
        margin-bottom: 2px;
    }

    .anomaly-current {
        margin: 8px 0;
    }

    .anomaly-current.highlight {
        background: rgba(244, 67, 54, 0.1);
        border: 1px solid rgba(244, 67, 54, 0.3);
        border-radius: 4px;
        padding: 4px 10px;
    }

    .anomaly-current .neighbor-row {
        background: transparent;
        color: #f44336;
        font-weight: 600;
    }
</style>
