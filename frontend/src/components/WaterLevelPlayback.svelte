<script>
    import {
        currentProject, boreholes, waterLevelData, waterLevelContourResult,
        waterLevelContourVisible, waterLevelPlaybackState, addToast
    } from '../stores/index.js';
    import api from '../api/client.js';

    let startDate = '';
    let endDate = '';
    let speed = 7;
    let playing = false;
    let progress = 0;
    let currentDateDisplay = '';
    let animFrameId = null;
    let lastFrameTime = 0;
    let cacheFrames = [];
    let cacheIdx = 0;

    $: dateList = (() => {
        if (!startDate || !endDate) return [];
        const dates = [];
        const s = new Date(startDate);
        const e = new Date(endDate);
        const current = new Date(s);
        while (current <= e) {
            dates.push(new Date(current));
            current.setDate(current.getDate() + 1);
        }
        return dates;
    })();

    function getUniqueDates() {
        const dates = new Set();
        $waterLevelData.forEach(r => {
            const d = r.obs_date;
            if ((!startDate || d >= startDate) && (!endDate || d <= endDate)) {
                dates.add(d);
            }
        });
        return Array.from(dates).sort();
    }

    async function startPlayback() {
        if (!$currentProject) return;

        const dates = getUniqueDates();
        if (dates.length < 2) {
            addToast('日期范围内的数据不足，无法回放', 'warning');
            return;
        }

        playing = true;
        progress = 0;
        cacheFrames = [];
        cacheIdx = 0;

        const frameInterval = Math.max(16, Math.min(100, 1000 / (speed * 1.5)));

        const step = Math.max(1, Math.floor(dates.length / 300));
        const sampledDates = dates.filter((_, i) => i % step === 0 || i === dates.length - 1);

        for (let i = 0; i < sampledDates.length; i++) {
            try {
                const result = await api.krigingWaterLevel($currentProject.id, {
                    obs_date: sampledDates[i],
                    variogram_model: 'spherical',
                    grid_nx: 40,
                    grid_ny: 40,
                });
                cacheFrames.push({
                    date: sampledDates[i],
                    result: result,
                });
            } catch (e) {
                console.warn(`Frame ${sampledDates[i]} failed:`, e);
            }
        }

        if (cacheFrames.length === 0) {
            playing = false;
            addToast('无法生成回放帧', 'error');
            return;
        }

        lastFrameTime = performance.now();
        animatePlayback();
    }

    function animatePlayback() {
        if (!playing) return;

        const now = performance.now();
        const elapsed = now - lastFrameTime;
        const frameInterval = Math.max(16, Math.min(100, 1000 / (speed * 1.5)));

        if (elapsed >= frameInterval) {
            lastFrameTime = now;

            if (cacheIdx < cacheFrames.length) {
                const frame = cacheFrames[cacheIdx];
                $waterLevelContourResult = frame.result;
                $waterLevelContourVisible = true;
                currentDateDisplay = frame.date;
                progress = ((cacheIdx + 1) / cacheFrames.length) * 100;
                cacheIdx++;
            } else {
                playing = false;
                addToast('回放完成', 'info');
                return;
            }
        }

        animFrameId = requestAnimationFrame(animatePlayback);
    }

    function togglePlayback() {
        if (playing) {
            playing = false;
            if (animFrameId) cancelAnimationFrame(animFrameId);
        } else {
            if (cacheIdx >= cacheFrames.length) {
                cacheIdx = 0;
            }
            playing = true;
            lastFrameTime = performance.now();
            animatePlayback();
        }
    }

    function stopPlayback() {
        playing = false;
        if (animFrameId) cancelAnimationFrame(animFrameId);
        cacheIdx = 0;
        progress = 0;
        currentDateDisplay = '';
    }

    function seekTo(pct) {
        if (cacheFrames.length === 0) return;
        cacheIdx = Math.floor((pct / 100) * cacheFrames.length);
        cacheIdx = Math.min(cacheIdx, cacheFrames.length - 1);
        if (cacheFrames[cacheIdx]) {
            $waterLevelContourResult = cacheFrames[cacheIdx].result;
            $waterLevelContourVisible = true;
            currentDateDisplay = cacheFrames[cacheIdx].date;
            progress = ((cacheIdx + 1) / cacheFrames.length) * 100;
        }
    }

    function onProgressClick(e) {
        const rect = e.target.getBoundingClientRect();
        const pct = ((e.clientX - rect.left) / rect.width) * 100;
        seekTo(Math.max(0, Math.min(100, pct)));
    }

    $: $waterLevelPlaybackState = {
        playing,
        startDate,
        endDate,
        speed,
        currentDate: currentDateDisplay,
        progress,
    };
</script>

<div class="panel-header">
    <h3>水位动态回放</h3>
</div>

<div class="panel-body scrollable">
    <div class="form-group">
        <label style="font-size:12px;">起始日期</label>
        <input type="date" bind:value={startDate} style="width:100%;font-size:12px;" />
    </div>

    <div class="form-group">
        <label style="font-size:12px;">结束日期</label>
        <input type="date" bind:value={endDate} style="width:100%;font-size:12px;" />
    </div>

    <div class="form-group">
        <label style="font-size:12px;">播放速度</label>
        <select bind:value={speed} style="width:100%;font-size:12px;">
            <option value={1}>1 天/秒</option>
            <option value={7}>7 天/秒</option>
            <option value={30}>30 天/秒</option>
        </select>
    </div>

    <div class="playback-controls">
        <button class="btn-icon" on:click={togglePlayback} disabled={!startDate || !endDate}>
            {playing ? '⏸' : '▶'}
        </button>
        <button class="btn-icon" on:click={stopPlayback}>⏹</button>
    </div>

    <div class="progress-bar-container" on:click={onProgressClick}>
        <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width:{progress}%"></div>
        </div>
    </div>

    {#if currentDateDisplay}
        <div class="current-date-display">
            当前日期: {currentDateDisplay}
        </div>
    {/if}

    {#if !playing && cacheFrames.length === 0}
        <button class="btn-primary btn-sm" style="width:100%;margin-top:8px;"
                on:click={startPlayback}
                disabled={!startDate || !endDate || !$currentProject}>
            开始回放
        </button>
    {/if}

    {#if cacheFrames.length > 0}
        <div class="playback-info">
            <span>帧数: {cacheFrames.length}</span>
            <span>当前: {cacheIdx}/{cacheFrames.length}</span>
        </div>
    {/if}
</div>

<style>
    .playback-controls {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin: 10px 0;
    }

    .btn-icon {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--bg-tertiary);
        border: 1px solid var(--border);
        color: var(--text-primary);
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
    }
    .btn-icon:hover:not(:disabled) {
        background: var(--accent);
        color: #fff;
    }
    .btn-icon:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    .progress-bar-container {
        cursor: pointer;
        padding: 6px 0;
    }

    .progress-bar-track {
        height: 6px;
        background: var(--bg-tertiary);
        border-radius: 3px;
        overflow: hidden;
    }

    .progress-bar-fill {
        height: 100%;
        background: var(--accent);
        border-radius: 3px;
        transition: width 0.1s linear;
    }

    .current-date-display {
        text-align: center;
        font-size: 13px;
        color: var(--accent);
        font-weight: 600;
        margin: 6px 0;
    }

    .playback-info {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: var(--text-muted);
        margin-top: 8px;
    }
</style>
