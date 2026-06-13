<script>
    import { currentProject, modelRuns, modelingProgress, profiles, addToast } from '../stores/index.js';
    import api from '../api/client.js';

    let selectedRunId = '';
    let selectedProfileId = '';

    async function exportGltf() {
        if (!selectedRunId) {
            addToast('请选择建模结果', 'warning');
            return;
        }
        try {
            const resp = await api.exportGltf(selectedRunId);
            const blob = await resp.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `model_${selectedRunId}.glb`;
            a.click();
            URL.revokeObjectURL(url);
            addToast('glTF模型已导出', 'success');
        } catch (e) {
            addToast(`导出glTF失败: ${e.message}`, 'error');
        }
    }

    async function exportProfilePng() {
        if (!selectedProfileId) {
            addToast('请选择剖面', 'warning');
            return;
        }
        try {
            const resp = await api.exportProfilePng(selectedProfileId);
            const blob = await resp.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `profile_${selectedProfileId}.png`;
            a.click();
            URL.revokeObjectURL(url);
            addToast('剖面PNG已导出', 'success');
        } catch (e) {
            addToast(`导出PNG失败: ${e.message}`, 'error');
        }
    }

    async function exportProfileSvg() {
        if (!selectedProfileId) {
            addToast('请选择剖面', 'warning');
            return;
        }
        try {
            const resp = await api.exportProfileSvg(selectedProfileId);
            const blob = await resp.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `profile_${selectedProfileId}.svg`;
            a.click();
            URL.revokeObjectURL(url);
            addToast('剖面SVG已导出', 'success');
        } catch (e) {
            addToast(`导出SVG失败: ${e.message}`, 'error');
        }
    }

    async function exportStatsExcel() {
        if (!$currentProject) {
            addToast('请先选择项目', 'warning');
            return;
        }
        try {
            const resp = await api.exportStatsExcel($currentProject.id);
            const blob = await resp.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `stats_${$currentProject.id}.xlsx`;
            a.click();
            URL.revokeObjectURL(url);
            addToast('统计表已导出', 'success');
        } catch (e) {
            addToast(`导出Excel失败: ${e.message}`, 'error');
        }
    }

    async function exportReportPdf() {
        if (!selectedRunId) {
            addToast('请选择建模结果', 'warning');
            return;
        }
        try {
            const resp = await api.exportReportPdf(selectedRunId);
            const blob = await resp.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `report_${selectedRunId}.pdf`;
            a.click();
            URL.revokeObjectURL(url);
            addToast('报告已导出', 'success');
        } catch (e) {
            addToast(`导出PDF失败: ${e.message}`, 'error');
        }
    }
</script>

<div class="panel-header">
    <h3>成果导出</h3>
</div>

<div class="panel-body scrollable">
    <div class="export-section">
        <h4 style="font-size:13px;margin-bottom:8px;">三维模型</h4>
        <div class="form-group">
            <label>选择建模结果</label>
            <select bind:value={selectedRunId}>
                <option value="">选择建模结果</option>
                {#each $modelRuns.filter(r => r.status === 'completed') as run}
                    <option value={run.id}>{run.variogram_model} {run.grid_nx}x{run.grid_ny}x{run.grid_nz} ({run.status})</option>
                {/each}
            </select>
        </div>
        <div class="export-buttons">
            <button class="btn-primary" on:click={exportGltf} disabled={!selectedRunId}>
                导出 glTF 模型
            </button>
        </div>
        <p style="font-size:11px;color:var(--text-muted);margin-top:4px;">
            glTF格式可在Blender、ParaView等软件中打开
        </p>
    </div>

    <hr style="border-color:var(--border);margin:16px 0;" />

    <div class="export-section">
        <h4 style="font-size:13px;margin-bottom:8px;">剖面图</h4>
        <div class="form-group">
            <label>选择剖面</label>
            <select bind:value={selectedProfileId}>
                <option value="">选择剖面</option>
                {#each $profiles as p}
                    <option value={p.id}>{p.name}</option>
                {/each}
            </select>
        </div>
        <div class="export-buttons">
            <button class="btn-secondary" on:click={exportProfilePng} disabled={!selectedProfileId}>
                导出 PNG
            </button>
            <button class="btn-secondary" on:click={exportProfileSvg} disabled={!selectedProfileId}>
                导出 SVG
            </button>
        </div>
    </div>

    <hr style="border-color:var(--border);margin:16px 0;" />

    <div class="export-section">
        <h4 style="font-size:13px;margin-bottom:8px;">数据统计</h4>
        <button class="btn-primary" on:click={exportStatsExcel} disabled={!$currentProject} style="width:100%;">
            导出地层数据统计表 (Excel)
        </button>
        <p style="font-size:11px;color:var(--text-muted);margin-top:4px;">
            包含各层厚度统计、面积、体积等
        </p>
    </div>

    <hr style="border-color:var(--border);margin:16px 0;" />

    <div class="export-section">
        <h4 style="font-size:13px;margin-bottom:8px;">建模报告</h4>
        <button class="btn-primary" on:click={exportReportPdf} disabled={!selectedRunId} style="width:100%;">
            导出建模参数报告 (PDF)
        </button>
        <p style="font-size:11px;color:var(--text-muted);margin-top:4px;">
            包含半变异函数拟合结果、插值参数、剖面图缩略
        </p>
    </div>
</div>

<style>
    .export-section {
        margin-bottom: 4px;
    }

    .export-buttons {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .export-buttons button {
        flex: 1;
        min-width: 120px;
    }
</style>
