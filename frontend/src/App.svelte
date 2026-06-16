<script>
    import { onMount } from 'svelte';
    import {
        currentProject, boreholes, lithologyTypes, profiles,
        modelRuns, toasts, activeTab, activeProfileData, addToast,
        comparisonMode, comparisonLeftData, comparisonRightData,
        waterLevelWarnings, waterLevelThresholds, waterLevelData,
        waterLevelSubTab, selectedWaterLevelBoreholeId, showWarningPanel,
    } from './stores/index.js';
    import api from './api/client.js';
    import BoreholeManager from './components/BoreholeManager.svelte';
    import ProfileEditor from './components/ProfileEditor.svelte';
    import ProfileCanvas from './components/ProfileCanvas.svelte';
    import Viewer3D from './components/Viewer3D.svelte';
    import ModelingPanel from './components/ModelingPanel.svelte';
    import AttributePanel from './components/AttributePanel.svelte';
    import ExportPanel from './components/ExportPanel.svelte';
    import SurfaceOverlay from './components/SurfaceOverlay.svelte';
    import Toast from './components/Toast.svelte';
    import WaterLevelPanel from './components/WaterLevelPanel.svelte';
    import WaterLevelAnalysis from './components/WaterLevelAnalysis.svelte';
    import WaterLevelContour from './components/WaterLevelContour.svelte';
    import WaterLevelPlayback from './components/WaterLevelPlayback.svelte';

    let projectList = [];
    let showNewProject = false;
    let newProjectName = '';

    let warningRefreshInterval = null;

    onMount(async () => {
        try {
            projectList = await api.get('/projects');
            if (projectList.length > 0) {
                await selectProject(projectList[0].id);
            }
        } catch (e) {
            console.error(e);
        }

        warningRefreshInterval = setInterval(() => {
            refreshWarnings();
        }, 5000);
    });

    async function selectProject(id) {
        try {
            const project = await api.get(`/projects/${id}`);
            $currentProject = project;

            const [bhs, lts, pfs, runs] = await Promise.all([
                api.get(`/projects/${id}/boreholes`),
                api.get(`/projects/${id}/lithology-types`),
                api.get(`/projects/${id}/profiles`),
                api.get(`/projects/${id}/modeling/runs`),
            ]);
            $boreholes = bhs;
            $lithologyTypes = lts;
            $profiles = pfs;
            $modelRuns = runs;

            await refreshWarnings();
            await refreshThresholds();
        } catch (e) {
            addToast(`加载项目失败: ${e.message}`, 'error');
        }
    }

    async function refreshWarnings() {
        if (!$currentProject) return;
        try {
            const data = await api.getWaterLevelWarnings($currentProject.id);
            $waterLevelWarnings = data;
        } catch (e) {
            console.warn('刷新预警失败:', e);
        }
    }

    async function refreshThresholds() {
        if (!$currentProject) return;
        try {
            const data = await api.getWaterLevelThresholds($currentProject.id);
            $waterLevelThresholds = data;
        } catch (e) {
            console.warn('刷新阈值失败:', e);
        }
    }

    function navigateToWarningBorehole(warning) {
        $activeTab = 'waterlevel';
        $waterLevelSubTab = 'history';
        $selectedWaterLevelBoreholeId = warning.borehole_id;
        $showWarningPanel = false;
    }

    async function createProject() {
        if (!newProjectName.trim()) return;
        try {
            const project = await api.post('/projects', { name: newProjectName.trim() });
            projectList = [...projectList, project];
            showNewProject = false;
            newProjectName = '';
            await selectProject(project.id);
            addToast('项目创建成功', 'success');
        } catch (e) {
            addToast(`创建失败: ${e.message}`, 'error');
        }
    }

    const tabs = [
        { id: 'boreholes', label: '钻孔数据', icon: '⊕' },
        { id: 'profiles', label: '剖面分析', icon: '☷' },
        { id: 'modeling', label: '三维建模', icon: '◆' },
        { id: 'waterlevel', label: '地下水位', icon: '◈' },
        { id: 'attributes', label: '属性场', icon: '◇' },
        { id: 'export', label: '成果导出', icon: '↓' },
    ];

    function getWarningLevelBadge(level) {
        if (level === 'red') return 'bg-red-500';
        if (level === 'orange') return 'bg-orange-500';
        return 'bg-blue-500';
    }

    function getWarningLevelText(level) {
        if (level === 'red') return '红色预警';
        if (level === 'orange') return '橙色预警';
        return '蓝色预警';
    }

    let groupedWarnings;
    $: {
        const groups = { red: [], orange: [], blue: [] };
        $waterLevelWarnings.forEach(w => {
            groups[w.warning_level].push(w);
        });
        groupedWarnings = groups;
    }
</script>

<div class="app-layout">
    <header class="app-header">
        <div class="header-left">
            <span class="logo">⛏ GeoModeler</span>
            <select value={$currentProject ? $currentProject.id : ''} on:change={(e) => selectProject(e.target.value)}>
                {#each projectList as p}
                    <option value={p.id}>{p.name}</option>
                {/each}
            </select>
            <button class="btn-secondary btn-sm" on:click={() => showNewProject = true}>+ 新项目</button>
        </div>
        <div class="header-center">
            {#each tabs as tab}
                <button
                    class="tab-btn"
                    class:active={$activeTab === tab.id}
                    on:click={() => $activeTab = tab.id}
                >
                    {tab.icon} {tab.label}
                </button>
            {/each}
        </div>
        <div class="header-right">
            <span class="info-text">钻孔: {$boreholes.length} | 岩性: {$lithologyTypes.length}</span>

            {#if $waterLevelWarnings.length > 0}
                <div class="warning-badge-container" style="position:relative;">
                    <button
                        class="warning-badge-btn"
                        on:click={() => $showWarningPanel = !$showWarningPanel}
                        title="水位预警"
                    >
                        ⚠️
                        <span class="warning-count-badge">{$waterLevelWarnings.length}</span>
                    </button>

                    {#if $showWarningPanel}
                        <div class="warning-panel" on:click|stopPropagation>
                            <div class="warning-panel-header">
                                <h4>水位预警摘要</h4>
                                <button class="close-btn" on:click={() => $showWarningPanel = false}>×</button>
                            </div>
                            <div class="warning-panel-body">
                                {#if groupedWarnings.red.length > 0}
                                    <div class="warning-group">
                                        <div class="warning-group-title red">
                                            🔴 红色预警 ({groupedWarnings.red.length})
                                        </div>
                                        {#each groupedWarnings.red as w}
                                            <div class="warning-item" on:click={() => navigateToWarningBorehole(w)}>
                                                <div class="warning-item-header">
                                                    <span class="warning-hole">{w.hole_id}</span>
                                                    <span class="warning-exceed">超出 +{w.exceed_amount.toFixed(2)}m</span>
                                                </div>
                                                <div class="warning-item-details">
                                                    <span>水位: {w.latest_water_level.toFixed(2)}m</span>
                                                    <span>日期: {w.obs_date}</span>
                                                </div>
                                            </div>
                                        {/each}
                                    </div>
                                {/if}

                                {#if groupedWarnings.orange.length > 0}
                                    <div class="warning-group">
                                        <div class="warning-group-title orange">
                                            🟠 橙色预警 ({groupedWarnings.orange.length})
                                        </div>
                                        {#each groupedWarnings.orange as w}
                                            <div class="warning-item" on:click={() => navigateToWarningBorehole(w)}>
                                                <div class="warning-item-header">
                                                    <span class="warning-hole">{w.hole_id}</span>
                                                    <span class="warning-exceed">超出 +{w.exceed_amount.toFixed(2)}m</span>
                                                </div>
                                                <div class="warning-item-details">
                                                    <span>水位: {w.latest_water_level.toFixed(2)}m</span>
                                                    <span>日期: {w.obs_date}</span>
                                                </div>
                                            </div>
                                        {/each}
                                    </div>
                                {/if}

                                {#if groupedWarnings.blue.length > 0}
                                    <div class="warning-group">
                                        <div class="warning-group-title blue">
                                            🔵 蓝色预警 ({groupedWarnings.blue.length})
                                        </div>
                                        {#each groupedWarnings.blue as w}
                                            <div class="warning-item" on:click={() => navigateToWarningBorehole(w)}>
                                                <div class="warning-item-header">
                                                    <span class="warning-hole">{w.hole_id}</span>
                                                    <span class="warning-exceed">超出 +{w.exceed_amount.toFixed(2)}m</span>
                                                </div>
                                                <div class="warning-item-details">
                                                    <span>水位: {w.latest_water_level.toFixed(2)}m</span>
                                                    <span>日期: {w.obs_date}</span>
                                                </div>
                                            </div>
                                        {/each}
                                    </div>
                                {/if}
                            </div>
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
    </header>

    <div class="app-body">
        <aside class="left-panel panel">
            {#if $activeTab === 'boreholes'}
                <BoreholeManager />
            {:else if $activeTab === 'profiles'}
                <ProfileEditor />
            {:else if $activeTab === 'modeling'}
                <ModelingPanel />
            {:else if $activeTab === 'waterlevel'}
                <WaterLevelPanel />
            {:else if $activeTab === 'attributes'}
                <AttributePanel />
            {:else if $activeTab === 'export'}
                <ExportPanel />
            {/if}

            <div class="divider" />

            {#if $activeTab === 'waterlevel'}
                <WaterLevelAnalysis />
                <div class="divider" />
                <WaterLevelContour />
                <div class="divider" />
                <WaterLevelPlayback />
            {:else}
                <SurfaceOverlay />
            {/if}
        </aside>

        <main class="main-content">
            {#if $activeTab === 'profiles' && ($activeProfileData || ($comparisonMode && $comparisonLeftData && $comparisonRightData))}
                <ProfileCanvas />
            {:else}
                <Viewer3D />
            {/if}
        </main>
    </div>
</div>

{#if showNewProject}
    <div class="modal-overlay" on:click|self={() => showNewProject = false}>
        <div class="modal">
            <h3>创建新项目</h3>
            <div class="form-group">
                <label>项目名称</label>
                <input type="text" bind:value={newProjectName} on:keydown={(e) => e.key === 'Enter' && createProject()} placeholder="输入项目名称" />
            </div>
            <div class="modal-actions">
                <button class="btn-secondary" on:click={() => showNewProject = false}>取消</button>
                <button class="btn-primary" on:click={createProject}>创建</button>
            </div>
        </div>
    </div>
{/if}

<div class="toast-container">
    {#each $toasts as toast (toast.id)}
        <Toast {toast} />
    {/each}
</div>

<style>
    .app-layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    }

    .app-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 48px;
        padding: 0 16px;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border);
        flex-shrink: 0;
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .logo {
        font-size: 16px;
        font-weight: 700;
        color: var(--accent);
        white-space: nowrap;
    }

    .header-left select {
        min-width: 160px;
        padding: 4px 8px;
        font-size: 12px;
    }

    .header-center {
        display: flex;
        gap: 2px;
    }

    .tab-btn {
        background: transparent;
        color: var(--text-secondary);
        padding: 8px 14px;
        font-size: 13px;
        border-radius: 6px;
        transition: all 0.2s;
    }
    .tab-btn:hover {
        color: var(--text-primary);
        background: var(--bg-hover);
    }
    .tab-btn.active {
        color: var(--accent);
        background: var(--bg-tertiary);
    }

    .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
    }

    .info-text {
        font-size: 12px;
        color: var(--text-muted);
    }

    .warning-badge-btn {
        position: relative;
        background: var(--bg-tertiary);
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 4px 10px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s;
    }

    .warning-badge-btn:hover {
        background: var(--bg-hover);
    }

    .warning-count-badge {
        position: absolute;
        top: -6px;
        right: -6px;
        background: #f44336;
        color: white;
        font-size: 10px;
        font-weight: 700;
        min-width: 18px;
        height: 18px;
        border-radius: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }

    .warning-panel {
        position: absolute;
        top: 44px;
        right: 0;
        width: 320px;
        max-height: 480px;
        background: rgba(26, 29, 35, 0.98);
        border: 1px solid var(--border);
        border-radius: 10px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        z-index: 1000;
        overflow: hidden;
        backdrop-filter: blur(10px);
    }

    .warning-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 14px;
        border-bottom: 1px solid var(--border);
    }

    .warning-panel-header h4 {
        margin: 0;
        font-size: 13px;
        color: var(--text-primary);
    }

    .close-btn {
        background: none;
        border: none;
        color: var(--text-muted);
        font-size: 18px;
        cursor: pointer;
        padding: 0 4px;
        line-height: 1;
    }

    .close-btn:hover {
        color: var(--text-primary);
    }

    .warning-panel-body {
        padding: 8px;
        overflow-y: auto;
        max-height: 420px;
    }

    .warning-group {
        margin-bottom: 10px;
    }

    .warning-group:last-child {
        margin-bottom: 0;
    }

    .warning-group-title {
        font-size: 11px;
        font-weight: 600;
        padding: 6px 8px;
        border-radius: 4px;
        margin-bottom: 4px;
    }

    .warning-group-title.red {
        background: rgba(244, 67, 54, 0.15);
        color: #f44336;
    }

    .warning-group-title.orange {
        background: rgba(255, 152, 0, 0.15);
        color: #ff9800;
    }

    .warning-group-title.blue {
        background: rgba(33, 150, 243, 0.15);
        color: #2196f3;
    }

    .warning-item {
        padding: 8px 10px;
        margin: 2px 0;
        background: var(--bg-tertiary);
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
    }

    .warning-item:hover {
        background: var(--bg-hover);
        transform: translateX(2px);
    }

    .warning-item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3px;
    }

    .warning-hole {
        font-size: 12px;
        font-weight: 600;
        color: var(--text-primary);
    }

    .warning-exceed {
        font-size: 10px;
        font-weight: 600;
        color: #f44336;
    }

    .warning-item-details {
        display: flex;
        gap: 12px;
        font-size: 10px;
        color: var(--text-muted);
    }

    .app-body {
        display: flex;
        flex: 1;
        overflow: hidden;
    }

    .left-panel {
        width: var(--panel-width);
        min-width: var(--panel-width);
        flex-shrink: 0;
        overflow-y: auto;
    }

    .divider {
        height: 1px;
        background: var(--border);
        margin: 4px 0;
    }

    .main-content {
        flex: 1;
        position: relative;
        overflow: hidden;
    }
</style>
