<script>
    import { onMount } from 'svelte';
    import {
        currentProject, boreholes, lithologyTypes, profiles,
        modelRuns, toasts, activeTab, activeProfileData, addToast
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

    let projectList = [];
    let showNewProject = false;
    let newProjectName = '';

    onMount(async () => {
        try {
            projectList = await api.get('/projects');
            if (projectList.length > 0) {
                await selectProject(projectList[0].id);
            }
        } catch (e) {
            console.error(e);
        }
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
        } catch (e) {
            addToast(`加载项目失败: ${e.message}`, 'error');
        }
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
        { id: 'attributes', label: '属性场', icon: '◈' },
        { id: 'export', label: '成果导出', icon: '↓' },
    ];
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
            {:else if $activeTab === 'attributes'}
                <AttributePanel />
            {:else if $activeTab === 'export'}
                <ExportPanel />
            {/if}

            <div class="divider" />

            <SurfaceOverlay />
        </aside>

        <main class="main-content">
            {#if $activeTab === 'profiles' && $activeProfileData}
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
    }

    .info-text {
        font-size: 12px;
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
