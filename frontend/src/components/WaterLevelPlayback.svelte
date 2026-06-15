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

    let interpT = 0;
    let currentFrameIdx = 0;
    let msPerDay = 1000 / speed;

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

    function interpolateGrids(gridA, gridB, t) {
        if (!gridA || !gridB) return gridA || gridB;
        const ny = gridA.length;
        if (ny === 0) return gridA;
        const nx = gridA[0].length;
        const result = [];
        for (let j = 0; j < ny; j++) {
            const row = [];
            for (let i = 0; i < nx; i++) {
                const a = gridA[j]?.[i] ?? 0;
                const b = gridB[j]?.[i] ?? 0;
                row.push(a + (b - a) * t);
            }
            result.push(row);
        }
        return result;
    }

    function interpolateResults(frameA, frameB, t) {
        const rA = frameA.result;
        const rB = frameB.result;
        const wlGrid = interpolateGrids(rA.water_level_grid, rB.water_level_grid, t);
        const wlMinA = rA.water_level_min;
        const wlMaxA = rA.water_level_max;
        const wlMinB = rB.water_level_min;
        const wlMaxB = rB.water_level_max;
        return {
            grid: rA.grid,
            water_level_grid: wlGrid,
            variance_grid: rA.variance_grid,
            water_level_min: wlMinA + (wlMinB - wlMinA) * t,
            water_level_max: wlMaxA + (wlMaxB - wlMaxA) * t,
        };
    }

    function dateToDateStr(d) {
        const dt = new Date(d);
        return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
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
        currentFrameIdx = 0;
        interpT = 0;

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
                    dateMs: new Date(sampledDates[i]).getTime(),
                    result: result,
                });
            } catch (e) {
                console.warn(`Frame ${sampledDates[i]} failed:`, e);
            }
        }

        if (cacheFrames.length < 2) {
            playing = false;
            addToast('无法生成足够的回放帧', 'error');
            return;
        }

        msPerDay = 1000 / speed;
        lastFrameTime = performance.now();
        animatePlayback();
    }

    function animatePlayback() {
        if (!playing) return;

        const now = performance.now();
        const dt = now - lastFrameTime;
        lastFrameTime = now;

        const simDaysElapsed = dt / msPerDay;

        const curFrame = cacheFrames[currentFrameIdx];
        const nextIdx = currentFrameIdx + 1;

        if (nextIdx >= cacheFrames.length) {
            playing = false;
            progress = 100;
            $waterLevelContourResult = curFrame.result;
            $waterLevelContourVisible = true;
            currentDateDisplay = curFrame.date;
            addToast('回放完成', 'info');
            return;
        }

        const nextFrame = cacheFrames[nextIdx];
        const daySpan = (nextFrame.dateMs - curFrame.dateMs) / (1000 * 60 * 60 * 24);
        const tStep = daySpan > 0 ? simDaysElapsed / daySpan : 1;

        interpT += tStep;

        while (interpT >= 1 && currentFrameIdx + 1 < cacheFrames.length) {
            interpT -= 1;
            currentFrameIdx++;
        }

        if (currentFrameIdx + 1 >= cacheFrames.length) {
            playing = false;
            progress = 100;
            $waterLevelContourResult = cacheFrames[cacheFrames.length - 1].result;
            $waterLevelContourVisible = true;
            currentDateDisplay = cacheFrames[cacheFrames.length - 1].date;
            addToast('回放完成', 'info');
            return;
        }

        const clampedT = Math.max(0, Math.min(1, interpT));
        const interpolated = interpolateResults(cacheFrames[currentFrameIdx], cacheFrames[currentFrameIdx + 1], clampedT);
        $waterLevelContourResult = interpolated;
        $waterLevelContourVisible = true;

        const curDateMs = cacheFrames[currentFrameIdx].dateMs;
        const nextDateMs = cacheFrames[currentFrameIdx + 1].dateMs;
        const displayMs = curDateMs + (nextDateMs - curDateMs) * clampedT;
        currentDateDisplay = dateToDateStr(displayMs);

        const totalSpan = cacheFrames[cacheFrames.length - 1].dateMs - cacheFrames[0].dateMs;
        const elapsed = displayMs - cacheFrames[0].dateMs;
        progress = totalSpan > 0 ? (elapsed / totalSpan) * 100 : 0;

        animFrameId = requestAnimationFrame(animatePlayback);
    }

    function togglePlayback() {
        if (playing) {
            playing = false;
            if (animFrameId) cancelAnimationFrame(animFrameId);
        } else {
            if (cacheFrames.length < 2) {
                startPlayback();
                return;
            }
            if (currentFrameIdx >= cacheFrames.length - 1) {
                currentFrameIdx = 0;
                interpT = 0;
            }
            playing = true;
            msPerDay = 1000 / speed;
            lastFrameTime = performance.now();
            animatePlayback();
        }
    }

    function stopPlayback() {
        playing = false;
        if (animFrameId) cancelAnimationFrame(animFrameId);
        currentFrameIdx = 0;
        interpT = 0;
        progress = 0;
        currentDateDisplay = '';
    }

    function seekTo(pct) {
        if (cacheFrames.length < 2) return;
        const totalSpan = cacheFrames[cacheFrames.length - 1].dateMs - cacheFrames[0].dateMs;
        const targetMs = cacheFrames[0].dateMs + (pct / 100) * totalSpan;

        let idx = 0;
        for (let i = 0; i < cacheFrames.length - 1; i++) {
            if (cacheFrames[i].dateMs <= targetMs && cacheFrames[i + 1].dateMs > targetMs) {
                idx = i;
                break;
            }
            if (i === cacheFrames.length - 2) {
                idx = i;
            }
        }

        currentFrameIdx = idx;
        const daySpan = cacheFrames[idx + 1] ? (cacheFrames[idx + 1].dateMs - cacheFrames[idx].dateMs) / (1000 * 60 * 60 * 24) : 1;
        interpT = daySpan > 0 ? (targetMs - cacheFrames[idx].dateMs) / (1000 * 60 * 60 * 24) / daySpan : 0;
        interpT = Math.max(0, Math.min(1, interpT));

        if (cacheFrames[idx + 1]) {
            const interpolated = interpolateResults(cacheFrames[idx], cacheFrames[idx + 1], interpT);
            $waterLevelContourResult = interpolated;
            $waterLevelContourVisible = true;
            currentDateDisplay = dateToDateStr(targetMs);
        } else {
            $waterLevelContourResult = cacheFrames[idx].result;
            $waterLevelContourVisible = true;
            currentDateDisplay = cacheFrames[idx].date;
        }
        progress = pct;
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
            <span>当前帧: {currentFrameIdx + 1}/{cacheFrames.length}</span>
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
