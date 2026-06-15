<script>
    import { onMount, afterUpdate, tick } from 'svelte';
    import {
        lithologyTypes, activeProfileData, addToast,
        comparisonMode, comparisonLeftData, comparisonRightData, boreholeWarnings
    } from '../stores/index.js';

    let canvasEl = null;

    const DEFAULT_COLORS = [
        '#E6B89C', '#F0E68C', '#CD853F', '#8B7355', '#A0522D',
        '#DEB887', '#D2B48C', '#BDB76B', '#BC8F8F', '#C4A882',
        '#9ACD32', '#6B8E23', '#556B2F', '#8FBC8F', '#2E8B57',
        '#708090', '#778899', '#B0C4DE', '#87CEEB', '#4682B4',
    ];

    function getLayerColor(lithologyName, lithoIdx = 0) {
        const lt = $lithologyTypes?.find(l => l.name === lithologyName);
        if (lt?.color) return lt.color;
        return DEFAULT_COLORS[lithoIdx % DEFAULT_COLORS.length];
    }

    function computeBoreholeWarnings(columns) {
        if (!columns || columns.length < 2) return [];
        const dists = columns.map(c => c.distance);
        const spacings = [];
        for (let i = 1; i < dists.length; i++) {
            spacings.push(dists[i] - dists[i - 1]);
        }
        const avgSpacing = spacings.reduce((a, b) => a + b, 0) / spacings.length;
        const warnings = [];
        for (let i = 0; i < spacings.length; i++) {
            if (spacings[i] > avgSpacing * 2) {
                warnings.push({
                    leftCol: i,
                    rightCol: i + 1,
                    leftDist: dists[i],
                    rightDist: dists[i + 1],
                    spacing: spacings[i],
                    avgSpacing: avgSpacing,
                });
            }
        }
        return warnings;
    }

    function drawPinchOutHatch(ctx, x1, y1top, y1bot, x2, y2top, y2bot, xMid, yMid) {
        const steps = 20;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x1, y1top);
        ctx.lineTo(xMid, yMid);
        ctx.lineTo(x1, y1bot);
        ctx.closePath();
        ctx.clip();

        ctx.strokeStyle = '#555';
        ctx.lineWidth = 0.8;
        const hatchSpacing = 6;
        const minX = Math.min(x1, xMid);
        const maxX = Math.max(x1, xMid);
        const minY = Math.min(y1top, y1bot, yMid);
        const maxY = Math.max(y1top, y1bot, yMid);
        for (let hy = minY; hy <= maxY; hy += hatchSpacing) {
            ctx.beginPath();
            ctx.moveTo(minX - 5, hy);
            ctx.lineTo(maxX + 5, hy + (maxX - minX) * 0.5);
            ctx.stroke();
        }
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(xMid, yMid);
        ctx.lineTo(x2, y2top);
        ctx.lineTo(x2, y2bot);
        ctx.closePath();
        ctx.clip();

        ctx.strokeStyle = '#555';
        ctx.lineWidth = 0.8;
        for (let hy = minY; hy <= maxY; hy += hatchSpacing) {
            ctx.beginPath();
            ctx.moveTo(minX - 5, hy);
            ctx.lineTo(maxX + 5, hy + (maxX - minX) * 0.5);
            ctx.stroke();
        }
        ctx.restore();
    }

    function renderSingleProfile(ctx, profileData, offsetX, availW, H, sharedMinElev, sharedMaxElev) {
        const padding = { top: 40, right: 30, bottom: 50, left: 70 };
        const plotW = availW - padding.left - padding.right;
        const plotH = H - padding.top - padding.bottom;

        const columns = profileData.columns;
        const connections = profileData.connections;

        if (!columns || columns.length === 0) return;

        const maxDist = profileData.total_distance > 0 ? profileData.total_distance : 100;
        let minElev = sharedMinElev;
        let maxElev = sharedMaxElev;
        if (minElev === undefined || maxElev === undefined) {
            minElev = Infinity; maxElev = -Infinity;
            columns.forEach(c => {
                c.layers.forEach(l => {
                    if (l.top_elevation > maxElev) maxElev = l.top_elevation;
                    if (l.bottom_elevation < minElev) minElev = l.bottom_elevation;
                });
            });
            if (minElev === Infinity) { minElev = 0; maxElev = 100; }
            const elevPadding = (maxElev - minElev) * 0.1 || 10;
            minElev -= elevPadding;
            maxElev += elevPadding;
        }

        const xScale = (d) => offsetX + padding.left + (d / maxDist) * plotW;
        const yScale = (e) => padding.top + ((maxElev - e) / (maxElev - minElev)) * plotH;

        ctx.strokeStyle = '#dddddd';
        ctx.lineWidth = 0.5;
        const eStep = Math.max(5, Math.round((maxElev - minElev) / 10));
        for (let e = Math.ceil(minElev / eStep) * eStep; e <= maxElev; e += eStep) {
            const y = yScale(e);
            ctx.beginPath();
            ctx.moveTo(offsetX + padding.left, y);
            ctx.lineTo(offsetX + availW - padding.right, y);
            ctx.stroke();

            ctx.fillStyle = '#888';
            ctx.font = '11px sans-serif';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillText(e.toFixed(0) + 'm', offsetX + padding.left - 8, y);
        }

        ctx.strokeStyle = '#dddddd';
        const dStep = Math.max(10, Math.round(maxDist / 10));
        for (let d = 0; d <= maxDist; d += dStep) {
            const x = xScale(d);
            ctx.beginPath();
            ctx.moveTo(x, padding.top);
            ctx.lineTo(x, H - padding.bottom);
            ctx.stroke();

            ctx.fillStyle = '#888';
            ctx.font = '11px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(d.toFixed(0) + 'm', x, H - padding.bottom + 8);
        }

        const lithoIdxMap = {};
        (profileData.lithologies || []).forEach((name, i) => { lithoIdxMap[name] = i; });

        const colLayersMap = {};
        columns.forEach(col => {
            colLayersMap[col.hole_id] = new Set(col.layers.map(l => l.lithology_name));
        });

        const warnings = computeBoreholeWarnings(columns);
        if (warnings.length > 0) {
            $boreholeWarnings = warnings;
        }

        connections.forEach(conn => {
            const color = getLayerColor(conn.lithology_name, lithoIdxMap[conn.lithology_name] || 0);
            const dists = conn.distances;
            const topE = conn.top_elevations;
            const botE = conn.bottom_elevations;

            if (dists.length < 2) return;

            let hasPinchOut = false;
            let pinchStartIdx = -1;
            let pinchEndIdx = -1;

            if (columns.length >= 2) {
                for (let ci = 0; ci < columns.length - 1; ci++) {
                    const leftHas = colLayersMap[columns[ci].hole_id]?.has(conn.lithology_name);
                    const rightHas = colLayersMap[columns[ci + 1].hole_id]?.has(conn.lithology_name);

                    if (leftHas && !rightHas) {
                        hasPinchOut = true;
                        pinchStartIdx = ci;
                        pinchEndIdx = ci + 1;
                        break;
                    } else if (!leftHas && rightHas) {
                        hasPinchOut = true;
                        pinchStartIdx = ci;
                        pinchEndIdx = ci + 1;
                        break;
                    }
                }
            }

            if (hasPinchOut) {
                const leftCol = columns[pinchStartIdx];
                const rightCol = columns[pinchEndIdx];
                const leftDist = leftCol.distance;
                const rightDist = rightCol.distance;

                const leftLayer = leftCol.layers.find(l => l.lithology_name === conn.lithology_name);
                const rightLayer = rightCol.layers.find(l => l.lithology_name === conn.lithology_name);

                const midDist = (leftDist + rightDist) / 2;

                const distStep = rightDist - leftDist;
                const nSteps = 30;

                const leftTopY = yScale(leftLayer ? leftLayer.top_elevation : 0);
                const leftBotY = yScale(leftLayer ? leftLayer.bottom_elevation : 0);
                const rightTopY = yScale(rightLayer ? rightLayer.top_elevation : 0);
                const rightBotY = yScale(rightLayer ? rightLayer.bottom_elevation : 0);
                const midX = xScale(midDist);
                const midY = leftLayer
                    ? (yScale(leftLayer.top_elevation) + yScale(leftLayer.bottom_elevation)) / 2
                    : (yScale(rightLayer.top_elevation) + yScale(rightLayer.bottom_elevation)) / 2;

                ctx.fillStyle = color;
                ctx.globalAlpha = 0.7;
                ctx.beginPath();

                if (leftLayer && !rightLayer) {
                    ctx.moveTo(xScale(leftDist), yScale(leftLayer.top_elevation));
                    for (let s = 1; s <= nSteps; s++) {
                        const t = s / nSteps;
                        const d = leftDist + t * distStep;
                        const topInterp = leftLayer.top_elevation * (1 - t) + (leftLayer.top_elevation + leftLayer.bottom_elevation) / 2 * t;
                        const botInterp = leftLayer.bottom_elevation * (1 - t) + (leftLayer.top_elevation + leftLayer.bottom_elevation) / 2 * t;
                        ctx.lineTo(xScale(d), yScale(topInterp));
                    }
                    for (let s = nSteps; s >= 1; s--) {
                        const t = s / nSteps;
                        const d = leftDist + t * distStep;
                        const botInterp = leftLayer.bottom_elevation * (1 - t) + (leftLayer.top_elevation + leftLayer.bottom_elevation) / 2 * t;
                        ctx.lineTo(xScale(d), yScale(botInterp));
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.globalAlpha = 1.0;

                    drawPinchOutHatch(ctx,
                        xScale(leftDist), yScale(leftLayer.top_elevation), yScale(leftLayer.bottom_elevation),
                        xScale(rightDist), rightTopY, rightBotY,
                        midX, midY
                    );
                } else if (!leftLayer && rightLayer) {
                    ctx.moveTo(xScale(rightDist), yScale(rightLayer.top_elevation));
                    for (let s = nSteps - 1; s >= 0; s--) {
                        const t = s / nSteps;
                        const d = midDist + t * (rightDist - midDist);
                        const topInterp = (rightLayer.top_elevation + rightLayer.bottom_elevation) / 2 * (1 - t) + rightLayer.top_elevation * t;
                        const botInterp = (rightLayer.top_elevation + rightLayer.bottom_elevation) / 2 * (1 - t) + rightLayer.bottom_elevation * t;
                        ctx.lineTo(xScale(d), yScale(topInterp));
                    }
                    for (let s = 0; s < nSteps; s++) {
                        const t = s / nSteps;
                        const d = midDist + t * (rightDist - midDist);
                        const botInterp = (rightLayer.top_elevation + rightLayer.bottom_elevation) / 2 * (1 - t) + rightLayer.bottom_elevation * t;
                        ctx.lineTo(xScale(d), yScale(botInterp));
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.globalAlpha = 1.0;

                    drawPinchOutHatch(ctx,
                        xScale(leftDist), leftTopY, leftBotY,
                        xScale(rightDist), yScale(rightLayer.top_elevation), yScale(rightLayer.bottom_elevation),
                        midX, midY
                    );
                }

                const startDist = leftLayer ? leftDist : midDist;
                const endDist = rightLayer ? rightDist : midDist;
                const connStartIdx = dists.findIndex(d => d >= startDist - 1);
                const connEndIdx = dists.findIndex(d => d >= endDist + 1);

                if (connStartIdx >= 0 && connEndIdx > connStartIdx) {
                    ctx.fillStyle = color;
                    ctx.globalAlpha = 0.85;
                    ctx.beginPath();
                    ctx.moveTo(xScale(dists[0]), yScale(topE[0]));
                    for (let i = 1; i < connStartIdx; i++) {
                        ctx.lineTo(xScale(dists[i]), yScale(topE[i]));
                    }
                    for (let i = connStartIdx - 1; i >= 0; i--) {
                        ctx.lineTo(xScale(dists[i]), yScale(botE[i]));
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.globalAlpha = 1.0;

                    ctx.strokeStyle = '#444';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    for (let i = 0; i < connStartIdx; i++) {
                        if (i === 0) ctx.moveTo(xScale(dists[i]), yScale(topE[i]));
                        else ctx.lineTo(xScale(dists[i]), yScale(topE[i]));
                    }
                    ctx.stroke();
                    ctx.beginPath();
                    for (let i = 0; i < connStartIdx; i++) {
                        if (i === 0) ctx.moveTo(xScale(dists[i]), yScale(botE[i]));
                        else ctx.lineTo(xScale(dists[i]), yScale(botE[i]));
                    }
                    ctx.stroke();

                    if (connEndIdx < dists.length) {
                        ctx.fillStyle = color;
                        ctx.globalAlpha = 0.85;
                        ctx.beginPath();
                        ctx.moveTo(xScale(dists[connEndIdx]), yScale(topE[connEndIdx]));
                        for (let i = connEndIdx + 1; i < dists.length; i++) {
                            ctx.lineTo(xScale(dists[i]), yScale(topE[i]));
                        }
                        for (let i = dists.length - 1; i >= connEndIdx; i--) {
                            ctx.lineTo(xScale(dists[i]), yScale(botE[i]));
                        }
                        ctx.closePath();
                        ctx.fill();
                        ctx.globalAlpha = 1.0;

                        ctx.strokeStyle = '#444';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        for (let i = connEndIdx; i < dists.length; i++) {
                            if (i === connEndIdx) ctx.moveTo(xScale(dists[i]), yScale(topE[i]));
                            else ctx.lineTo(xScale(dists[i]), yScale(topE[i]));
                        }
                        ctx.stroke();
                        ctx.beginPath();
                        for (let i = connEndIdx; i < dists.length; i++) {
                            if (i === connEndIdx) ctx.moveTo(xScale(dists[i]), yScale(botE[i]));
                            else ctx.lineTo(xScale(dists[i]), yScale(botE[i]));
                        }
                        ctx.stroke();
                    }
                }
            } else {
                ctx.fillStyle = color;
                ctx.globalAlpha = 0.85;
                ctx.beginPath();
                ctx.moveTo(xScale(dists[0]), yScale(topE[0]));
                for (let i = 1; i < dists.length; i++) {
                    ctx.lineTo(xScale(dists[i]), yScale(topE[i]));
                }
                for (let i = dists.length - 1; i >= 0; i--) {
                    ctx.lineTo(xScale(dists[i]), yScale(botE[i]));
                }
                ctx.closePath();
                ctx.fill();
                ctx.globalAlpha = 1.0;

                ctx.strokeStyle = '#444';
                ctx.lineWidth = 1;
                ctx.beginPath();
                for (let i = 0; i < dists.length; i++) {
                    if (i === 0) ctx.moveTo(xScale(dists[i]), yScale(topE[i]));
                    else ctx.lineTo(xScale(dists[i]), yScale(topE[i]));
                }
                ctx.stroke();

                ctx.beginPath();
                for (let i = 0; i < dists.length; i++) {
                    if (i === 0) ctx.moveTo(xScale(dists[i]), yScale(botE[i]));
                    else ctx.lineTo(xScale(dists[i]), yScale(botE[i]));
                }
                ctx.stroke();
            }
        });

        warnings.forEach(w => {
            const x1 = xScale(w.leftDist);
            const x2 = xScale(w.rightDist);
            const warnY = padding.top + 2;

            ctx.save();
            ctx.setLineDash([6, 4]);
            ctx.strokeStyle = '#e03030';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x1, warnY);
            ctx.lineTo(x2, warnY);
            ctx.stroke();
            ctx.restore();

            ctx.fillStyle = '#e03030';
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText('插值可信度低', (x1 + x2) / 2, warnY - 2);
        });

        columns.forEach(col => {
            const x = xScale(col.distance);
            const colW = Math.max(16, plotW / Math.max(8, columns.length * 2));

            col.layers.forEach((layer, i) => {
                const color = getLayerColor(layer.lithology_name, lithoIdxMap[layer.lithology_name] || i);
                const yTop = yScale(layer.top_elevation);
                const yBot = yScale(layer.bottom_elevation);
                const h = Math.max(3, yBot - yTop);

                ctx.fillStyle = color;
                ctx.globalAlpha = 0.95;
                ctx.fillRect(x - colW / 2, yTop, colW, h);
                ctx.globalAlpha = 1.0;
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 1.5;
                ctx.strokeRect(x - colW / 2, yTop, colW, h);

                if (h > 14) {
                    ctx.fillStyle = '#000';
                    ctx.font = 'bold 11px sans-serif';
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    const midY = (yTop + yBot) / 2;
                    ctx.fillText(`${layer.layer_no}  ${layer.thickness.toFixed(1)}m`, x + colW / 2 + 6, midY);
                }
            });

            ctx.fillStyle = '#000';
            ctx.font = 'bold 13px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(col.hole_id, x, padding.top - 8);

            ctx.fillStyle = '#666';
            ctx.font = '10px sans-serif';
            ctx.textBaseline = 'top';
            ctx.fillText(`标高${col.elevation.toFixed(1)}m`, x, H - padding.bottom + 22);
        });

        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(offsetX + padding.left, padding.top, plotW, plotH);

        ctx.fillStyle = '#333';
        ctx.font = '13px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText('水平距离 (m)', offsetX + availW / 2, H - 18);

        ctx.save();
        ctx.translate(offsetX + 16, H / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('高程 (m)', 0, 0);
        ctx.restore();

        if (profileData.lithologies?.length > 0) {
            const legendX = offsetX + availW - padding.right - 140;
            const legendY = padding.top + 10;
            ctx.fillStyle = 'rgba(255,255,255,0.92)';
            ctx.fillRect(legendX - 8, legendY - 6, 148, profileData.lithologies.length * 20 + 12);
            ctx.strokeStyle = '#ccc';
            ctx.lineWidth = 1;
            ctx.strokeRect(legendX - 8, legendY - 6, 148, profileData.lithologies.length * 20 + 12);

            profileData.lithologies.forEach((name, i) => {
                const ly = legendY + i * 20;
                ctx.fillStyle = getLayerColor(name, i);
                ctx.fillRect(legendX, ly, 14, 14);
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 0.5;
                ctx.strokeRect(legendX, ly, 14, 14);
                ctx.fillStyle = '#333';
                ctx.font = '12px sans-serif';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                ctx.fillText(name, legendX + 20, ly + 7);
            });
        }

        ctx.fillStyle = '#333';
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(`插值方式: ${profileData.interpolation_method || 'linear'}`, offsetX + padding.left + 8, padding.top + 8);
    }

    function computeElevRange(profileData) {
        let minElev = Infinity, maxElev = -Infinity;
        if (!profileData?.columns) return { min: 0, max: 100 };
        profileData.columns.forEach(c => {
            c.layers.forEach(l => {
                if (l.top_elevation > maxElev) maxElev = l.top_elevation;
                if (l.bottom_elevation < minElev) minElev = l.bottom_elevation;
            });
        });
        if (minElev === Infinity) { minElev = 0; maxElev = 100; }
        return { min: minElev, max: maxElev };
    }

    function renderProfileCanvas() {
        if (!canvasEl) return;

        const container = canvasEl.parentElement;
        const W = container.clientWidth || 800;
        const H = container.clientHeight || 600;
        canvasEl.width = W;
        canvasEl.height = H;

        const ctx = canvasEl.getContext('2d');
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, W, H);

        if ($comparisonMode && $comparisonLeftData && $comparisonRightData) {
            const leftRange = computeElevRange($comparisonLeftData);
            const rightRange = computeElevRange($comparisonRightData);
            const sharedMin = Math.min(leftRange.min, rightRange.min);
            const sharedMax = Math.max(leftRange.max, rightRange.max);
            const elevPadding = (sharedMax - sharedMin) * 0.1 || 10;
            const sharedMinElev = sharedMin - elevPadding;
            const sharedMaxElev = sharedMax + elevPadding;

            const halfW = Math.floor(W / 2);

            ctx.save();
            ctx.beginPath();
            ctx.rect(0, 0, halfW, H);
            ctx.clip();
            renderSingleProfile(ctx, $comparisonLeftData, 0, halfW, H, sharedMinElev, sharedMaxElev);
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.rect(halfW, 0, W - halfW, H);
            ctx.clip();
            renderSingleProfile(ctx, $comparisonRightData, halfW, W - halfW, H, sharedMinElev, sharedMaxElev);
            ctx.restore();

            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.setLineDash([8, 4]);
            ctx.beginPath();
            ctx.moveTo(halfW, 0);
            ctx.lineTo(halfW, H);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.font = 'bold 14px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText('左剖面', halfW / 2, H - 4);
            ctx.fillText('右剖面', halfW + (W - halfW) / 2, H - 4);

        } else if ($activeProfileData) {
            renderSingleProfile(ctx, $activeProfileData, 0, W, H, undefined, undefined);
        }
    }

    $: {
        if (($activeProfileData || ($comparisonMode && $comparisonLeftData && $comparisonRightData)) && canvasEl) {
            tick().then(() => renderProfileCanvas());
        }
    }

    onMount(() => {
        if ($activeProfileData || ($comparisonMode && $comparisonLeftData)) {
            tick().then(() => renderProfileCanvas());
        }

        const ro = new ResizeObserver(() => {
            if (canvasEl) {
                renderProfileCanvas();
            }
        });
        if (canvasEl?.parentElement) {
            ro.observe(canvasEl.parentElement);
        }
        return () => ro.disconnect();
    });

    afterUpdate(() => {
        if (($activeProfileData || ($comparisonMode && $comparisonLeftData && $comparisonRightData)) && canvasEl) {
            renderProfileCanvas();
        }
    });
</script>

<div class="profile-canvas-container">
    <canvas bind:this={canvasEl} id="mainProfileCanvas"></canvas>
</div>

<style>
    .profile-canvas-container {
        width: 100%;
        height: 100%;
        background: #fff;
        position: relative;
    }

    canvas {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
