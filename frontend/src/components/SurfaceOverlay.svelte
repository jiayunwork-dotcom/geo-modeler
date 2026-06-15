<script>
    import { surfaceOverlay, addToast } from '../stores/index.js';

    let orthoFileEl;
    let demFileEl;

    function loadImageFromFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = e.target.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    async function handleOrthoUpload(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            addToast('请上传图片文件', 'warning');
            return;
        }
        try {
            const img = await loadImageFromFile(file);
            $surfaceOverlay = { ...$surfaceOverlay, orthoImage: img };
            addToast(`正射影像已加载: ${file.name}`, 'success');
        } catch (err) {
            addToast('加载正射影像失败', 'error');
        }
        e.target.value = '';
    }

    async function handleDemUpload(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            addToast('请上传灰度图 (PNG/JPG)', 'warning');
            return;
        }
        try {
            const img = await loadImageFromFile(file);
            $surfaceOverlay = { ...$surfaceOverlay, demImage: img };
            addToast(`DEM 灰度图已加载: ${file.name}`, 'success');
        } catch (err) {
            addToast('加载DEM失败', 'error');
        }
        e.target.value = '';
    }

    function clearOrtho() {
        $surfaceOverlay = { ...$surfaceOverlay, orthoImage: null };
    }

    function clearDem() {
        $surfaceOverlay = { ...$surfaceOverlay, demImage: null };
    }
</script>

<div class="panel-header">
    <h3>地表贴图</h3>
    <button class="btn-secondary btn-sm"
            on:click={() => $surfaceOverlay = { ...$surfaceOverlay, visible: !$surfaceOverlay.visible }}>
        {$surfaceOverlay.visible ? '隐藏' : '显示'}
    </button>
</div>

<div class="panel-body" style="padding:10px 12px;">
    <div class="form-group">
        <label>正射影像 (贴图纹理)</label>
        <div style="display:flex;gap:4px;align-items:center;">
            <input type="file" id="orthoInput" bind:this={orthoFileEl} accept="image/*" on:change={handleOrthoUpload} />
        </div>
        {#if $surfaceOverlay.orthoImage}
            <div style="display:flex;align-items:center;gap:6px;margin-top:4px;">
                <span class="badge badge-success">已加载</span>
                <button class="btn-danger btn-sm" on:click={clearOrtho}>清除</button>
            </div>
        {/if}
    </div>

    <div class="form-group">
        <label>DEM 灰度图 (地形起伏)</label>
        <input type="file" id="demInput" bind:this={demFileEl} accept="image/*" on:change={handleDemUpload} />
        {#if $surfaceOverlay.demImage}
            <div style="display:flex;align-items:center;gap:6px;margin-top:4px;">
                <span class="badge badge-success">已加载</span>
                <button class="btn-danger btn-sm" on:click={clearDem}>清除</button>
            </div>
        {/if}
    </div>

    <div class="form-group">
        <label>贴图透明度: {($surfaceOverlay.opacity * 100).toFixed(0)}%</label>
        <input type="range"
               min="0" max="100"
               value={$surfaceOverlay.opacity * 100}
               on:input={(e) => $surfaceOverlay = { ...$surfaceOverlay, opacity: e.target.value / 100 }} />
    </div>
</div>
