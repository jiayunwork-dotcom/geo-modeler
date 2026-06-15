<script>
    import { onMount, afterUpdate, tick } from 'svelte';
    import {
        lithologyTypes, activeProfileData, addToast
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

    function renderProfileCanvas() {
        if (!$activeProfileData || !canvasEl) return;

        const profileData = $activeProfileData;
        const container = canvasEl.parentElement;
        const W = container.clientWidth || 800;
        const H = container.clientHeight || 600;
        canvasEl.width = W;
        canvasEl.height = H;

        const ctx = canvasEl.getContext('2d');
        const padding = { top: 40, right: 30, bottom: 50, left: 70 };
        const plotW = W - padding.left - padding.right;
        const plotH = H - padding.top - padding.bottom;

        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, W, H);

        const columns = profileData.columns;
        const connections = profileData.connections;

        if (!columns || columns.length === 0) return;

        const maxDist = profileData.total_distance > 0 ? profileData.total_distance : 100;
        let minElev = Infinity, maxElev = -Infinity;
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

        const xScale = (d) => padding.left + (d / maxDist) * plotW;
        const yScale = (e) => padding.top + ((maxElev - e) / (maxElev - minElev)) * plotH;

        ctx.strokeStyle = '#dddddd';
        ctx.lineWidth = 0.5;
        const eStep = Math.max(5, Math.round((maxElev - minElev) / 10));
        for (let e = Math.ceil(minElev / eStep) * eStep; e <= maxElev; e += eStep) {
            const y = yScale(e);
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(W - padding.right, y);
            ctx.stroke();

            ctx.fillStyle = '#888';
            ctx.font = '11px sans-serif';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillText(e.toFixed(0) + 'm', padding.left - 8, y);
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

        connections.forEach(conn => {
            const color = getLayerColor(conn.lithology_name, lithoIdxMap[conn.lithology_name] || 0);
            const dists = conn.distances;
            const topE = conn.top_elevations;
            const botE = conn.bottom_elevations;

            if (dists.length < 2) return;

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
        ctx.strokeRect(padding.left, padding.top, plotW, plotH);

        ctx.fillStyle = '#333';
        ctx.font = '13px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText('水平距离 (m)', W / 2, H - 18);

        ctx.save();
        ctx.translate(16, H / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('高程 (m)', 0, 0);
        ctx.restore();

        if (profileData.lithologies?.length > 0) {
            const legendX = W - padding.right - 140;
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
        ctx.fillText(`插值方式: ${profileData.interpolation_method || 'linear'}`, padding.left + 8, padding.top + 8);
    }

    $: {
        if ($activeProfileData && canvasEl) {
            tick().then(() => renderProfileCanvas());
        }
    }

    onMount(() => {
        if ($activeProfileData) {
            tick().then(() => renderProfileCanvas());
        }

        const ro = new ResizeObserver(() => {
            if ($activeProfileData && canvasEl) {
                renderProfileCanvas();
            }
        });
        if (canvasEl?.parentElement) {
            ro.observe(canvasEl.parentElement);
        }
        return () => ro.disconnect();
    });

    afterUpdate(() => {
        if ($activeProfileData && canvasEl) {
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
