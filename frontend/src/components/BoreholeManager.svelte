<script>
    import { onMount } from 'svelte';
    import {
        currentProject, boreholes, lithologyTypes, selectedBoreholes,
        editingBorehole, addToast
    } from '../stores/index.js';
    import api from '../api/client.js';

    let showImport = false;
    let importFile = null;
    let importing = false;
    let importResult = null;
    let showColorEditor = false;

    async function refreshBoreholes() {
        if (!$currentProject) return;
        try {
            $boreholes = await api.get(`/boreholes/${$currentProject.id}/boreholes`);
            $lithologyTypes = await api.get(`/boreholes/${$currentProject.id}/lithology-types`);
        } catch (e) {
            addToast(`刷新失败: ${e.message}`, 'error');
        }
    }

    async function handleImport() {
        if (!importFile || !$currentProject) return;
        importing = true;
        try {
            const result = await api.uploadCsv($currentProject.id, importFile);
            importResult = result;
            addToast(`成功导入 ${result.imported} 个钻孔`, 'success');
            if (result.errors.length > 0) {
                addToast(`有 ${result.errors.length} 个错误`, 'warning');
            }
            if (result.warnings.length > 0) {
                result.warnings.forEach(w => addToast(w, 'warning'));
            }
            await refreshBoreholes();
        } catch (e) {
            addToast(`导入失败: ${e.message}`, 'error');
        } finally {
            importing = false;
        }
    }

    async function deleteBorehole(id) {
        if (!confirm('确定删除此钻孔？')) return;
        try {
            await api.delete(`/boreholes/${$currentProject.id}/boreholes/${id}`);
            addToast('钻孔已删除', 'info');
            await refreshBoreholes();
        } catch (e) {
            addToast(`删除失败: ${e.message}`, 'error');
        }
    }

    function startEdit(bh) {
        $editingBorehole = JSON.parse(JSON.stringify(bh));
    }

    async function saveEdit() {
        if (!$editingBorehole) return;
        try {
            await api.put(
                `/boreholes/${$currentProject.id}/boreholes/${$editingBorehole.id}`,
                $editingBorehole
            );
            addToast('钻孔已更新', 'success');
            $editingBorehole = null;
            await refreshBoreholes();
        } catch (e) {
            addToast(`更新失败: ${e.message}`, 'error');
        }
    }

    function toggleBoreholeSelection(id) {
        if ($selectedBoreholes.includes(id)) {
            $selectedBoreholes = $selectedBoreholes.filter(x => x !== id);
        } else {
            $selectedBoreholes = [...$selectedBoreholes, id];
        }
    }

    async function updateColor(lt) {
        try {
            await api.put(`/boreholes/${$currentProject.id}/lithology-types/${lt.id}`, {
                color: lt.color,
                layer_order: lt.layer_order,
            });
            addToast('颜色已更新', 'success');
        } catch (e) {
            addToast(`颜色更新失败: ${e.message}`, 'error');
        }
    }
</script>

<div class="panel-header">
    <h3>钻孔数据管理</h3>
    <div style="display:flex;gap:6px;">
        <button class="btn-primary btn-sm" on:click={() => showImport = true}>导入CSV</button>
        <button class="btn-secondary btn-sm" on:click={() => showColorEditor = !showColorEditor}>
            {showColorEditor ? '隐藏' : '颜色'}
        </button>
    </div>
</div>

<div class="panel-body scrollable">
    {#if showColorEditor}
        <div class="color-editor">
            <h4 style="margin-bottom:8px;font-size:13px;">岩性颜色映射</h4>
            {#each $lithologyTypes as lt}
                <div class="color-row">
                    <input type="color" bind:value={lt.color} on:change={() => updateColor(lt)} />
                    <span>{lt.name}</span>
                </div>
            {/each}
        </div>
        <hr style="border-color:var(--border);margin:12px 0;" />
    {/if}

    {#if $boreholes.length === 0}
        <div class="empty-state">
            <p>暂无钻孔数据</p>
            <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">
                点击"导入CSV"添加钻孔数据
            </p>
        </div>
    {:else}
        <div class="borehole-list">
            {#each $boreholes as bh}
                <div class="borehole-card" class:selected={$selectedBoreholes.includes(bh.id)}>
                    <div class="card-header">
                        <label class="checkbox-label">
                            <input type="checkbox"
                                   checked={$selectedBoreholes.includes(bh.id)}
                                   on:change={() => toggleBoreholeSelection(bh.id)} />
                            <strong>{bh.hole_id}</strong>
                        </label>
                        <div class="card-actions">
                            <button class="btn-secondary btn-sm" on:click={() => startEdit(bh)}>编辑</button>
                            <button class="btn-danger btn-sm" on:click={() => deleteBorehole(bh.id)}>删除</button>
                        </div>
                    </div>
                    <div class="card-info">
                        <span>坐标: {bh.longitude.toFixed(5)}, {bh.latitude.toFixed(5)}</span>
                        <span>高程: {bh.elevation.toFixed(2)}m</span>
                        <span>{bh.layers.length} 层</span>
                    </div>
                    <div class="layer-bar">
                        {#each bh.layers as layer}
                            {@const lt = $lithologyTypes.find(l => l.name === layer.lithology_name)}
                            <div class="layer-chip"
                                 style="background:{lt?.color || '#888'};flex:{layer.bottom_depth - layer.top_depth}"
                                 title="{layer.lithology_name}: {layer.top_depth}-{layer.bottom_depth}m">
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>

{#if showImport}
    <div class="modal-overlay" on:click|self={() => { showImport = false; importResult = null; }}>
        <div class="modal">
            <h3>导入钻孔CSV数据</h3>
            <p style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;">
                CSV字段: hole_id/孔号, longitude/经度, latitude/纬度, elevation/高程,
                layer_no/层号, top_depth/层顶深度, bottom_depth/层底深度, lithology/岩性,
                spt_n/标贯N值, water_content/含水量, compression_modulus/压缩模量
            </p>
            <div class="form-group">
                <input type="file" accept=".csv" on:change={(e) => importFile = e.target.files[0]} />
            </div>
            {#if importResult}
                <div class="import-result">
                    <p class="badge badge-success">成功导入: {importResult.imported} 个钻孔</p>
                    {#if importResult.errors.length > 0}
                        <div class="errors">
                            {#each importResult.errors as err}
                                <p class="badge badge-danger">{err}</p>
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

{#if $editingBorehole}
    <div class="modal-overlay" on:click|self={() => $editingBorehole = null}>
        <div class="modal" style="min-width:600px;">
            <h3>编辑钻孔 - {$editingBorehole.hole_id}</h3>
            <div class="form-row" style="margin-bottom:12px;">
                <div class="form-group">
                    <label>孔号</label>
                    <input type="text" bind:value={$editingBorehole.hole_id} />
                </div>
                <div class="form-group">
                    <label>高程(m)</label>
                    <input type="number" bind:value={$editingBorehole.elevation} step="0.01" />
                </div>
            </div>
            <div class="form-row" style="margin-bottom:12px;">
                <div class="form-group">
                    <label>经度</label>
                    <input type="number" bind:value={$editingBorehole.longitude} step="0.000001" />
                </div>
                <div class="form-group">
                    <label>纬度</label>
                    <input type="number" bind:value={$editingBorehole.latitude} step="0.000001" />
                </div>
            </div>

            <h4 style="margin:12px 0 8px;font-size:13px;">分层信息</h4>
            <div class="layers-table">
                <table>
                    <thead>
                        <tr>
                            <th>层号</th>
                            <th>层顶(m)</th>
                            <th>层底(m)</th>
                            <th>岩性</th>
                            <th>标贯N</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each $editingBorehole.layers as layer, i}
                            <tr>
                                <td>{layer.layer_no}</td>
                                <td><input type="number" bind:value={layer.top_depth} step="0.1" style="width:70px;" /></td>
                                <td><input type="number" bind:value={layer.bottom_depth} step="0.1" style="width:70px;" /></td>
                                <td><input type="text" bind:value={layer.lithology_name} style="width:100px;" /></td>
                                <td><input type="number" bind:value={layer.spt_n} step="0.1" style="width:60px;" /></td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>

            <div class="modal-actions">
                <button class="btn-secondary" on:click={() => $editingBorehole = null}>取消</button>
                <button class="btn-primary" on:click={saveEdit}>保存</button>
            </div>
        </div>
    </div>
{/if}

<style>
    .empty-state {
        text-align: center;
        padding: 40px 16px;
        color: var(--text-muted);
    }

    .borehole-card {
        background: var(--bg-tertiary);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 10px 12px;
        margin-bottom: 8px;
        transition: border-color 0.2s;
    }
    .borehole-card.selected {
        border-color: var(--accent);
    }

    .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6px;
    }

    .card-actions {
        display: flex;
        gap: 4px;
    }

    .card-info {
        display: flex;
        gap: 12px;
        font-size: 11px;
        color: var(--text-secondary);
        margin-bottom: 6px;
    }

    .layer-bar {
        display: flex;
        height: 8px;
        border-radius: 4px;
        overflow: hidden;
    }

    .layer-chip {
        min-width: 4px;
        transition: flex 0.2s;
    }

    .color-editor {
        margin-bottom: 8px;
    }

    .color-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 4px;
        font-size: 12px;
    }

    .import-result {
        margin: 12px 0;
    }
    .import-result p {
        margin-bottom: 4px;
    }

    .layers-table {
        max-height: 300px;
        overflow-y: auto;
    }
    .layers-table input {
        font-size: 12px;
        padding: 3px 6px;
    }
</style>
