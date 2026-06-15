<script>
    import { onMount } from 'svelte';
    import {
        currentProject, boreholes, lithologyTypes, activeModelResult,
        layerVisibility, layerOpacity, clipPlane, volumeResult, addToast,
        attributeField, attributeRendering, surfaceOverlay
    } from '../stores/index.js';

    let container;
    let scene, camera, renderer, controls;
    let layerMeshes = {};
    let boreholeMeshes = [];
    let clipPlaneObj = null;
    let attributeMesh = null;
    let surfaceMesh = null;
    let animationId;

    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

    const DEFAULT_COLORS = [
        '#E6B89C', '#F0E68C', '#CD853F', '#8B7355', '#A0522D',
        '#DEB887', '#D2B48C', '#BDB76B', '#BC8F8F', '#C4A882',
        '#9ACD32', '#6B8E23', '#556B2F', '#8FBC8F', '#2E8B57',
        '#708090', '#778899', '#B0C4DE', '#87CEEB', '#4682B4',
    ];

    function getLayerColor(name, idx = 0) {
        const lt = $lithologyTypes?.find(l => l.name === name);
        if (lt?.color) return new THREE.Color(lt.color);
        return new THREE.Color(DEFAULT_COLORS[idx % DEFAULT_COLORS.length]);
    }

    function valueToColor(v, vmin, vmax) {
        const t = vmax > vmin ? Math.max(0, Math.min(1, (v - vmin) / (vmax - vmin))) : 0.5;
        if (t < 0.25) {
            const s = t / 0.25;
            return [0, 0, 0.5 + s * 0.5];
        } else if (t < 0.5) {
            const s = (t - 0.25) / 0.25;
            return [0, s, 1 - s];
        } else if (t < 0.75) {
            const s = (t - 0.5) / 0.25;
            return [s, 1 - s, 0];
        } else {
            const s = (t - 0.75) / 0.25;
            return [1, 1 - s * 0.5, 0];
        }
    }

    onMount(() => {
        initScene();
        return () => {
            cancelAnimationFrame(animationId);
            renderer?.dispose();
        };
    });

    function initScene() {
        if (!container) return;

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1d23);

        camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 10000);
        camera.position.set(100, 80, 100);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.localClippingEnabled = true;
        container.appendChild(renderer.domElement);

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(100, 200, 100);
        scene.add(directionalLight);

        const gridHelper = new THREE.GridHelper(200, 20, 0x444444, 0x333333);
        scene.add(gridHelper);

        const axesHelper = new THREE.AxesHelper(50);
        scene.add(axesHelper);

        animate();

        new ResizeObserver(() => {
            if (container && renderer && camera) {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            }
        }).observe(container);
    }

    function animate() {
        animationId = requestAnimationFrame(animate);
        controls?.update();
        renderer?.render(scene, camera);
    }

    $: {
        if (scene && $boreholes.length > 0) {
            updateBoreholeCylinders();
        }
    }

    $: {
        if (scene && $activeModelResult) {
            updateModelSurfaces();
        }
    }

    $: {
        updateClipPlane();
    }

    $: {
        if (scene && $attributeField) {
            updateAttributeField();
        } else if (scene && attributeMesh) {
            scene.remove(attributeMesh);
            attributeMesh.geometry?.dispose();
            if (Array.isArray(attributeMesh.material)) {
                attributeMesh.material.forEach(m => m.dispose());
            } else {
                attributeMesh.material?.dispose();
            }
            attributeMesh = null;
        }
    }

    $: {
        if (scene && $surfaceOverlay) {
            updateSurfaceOverlay();
        }
    }

    function updateBoreholeCylinders() {
        boreholeMeshes.forEach(m => scene.remove(m));
        boreholeMeshes = [];

        if (!$boreholes || $boreholes.length === 0) return;

        const coords = $boreholes.map(b => [b.longitude, b.latitude, b.elevation]);
        if (coords.length === 0) return;

        const lonMin = Math.min(...coords.map(c => c[0]));
        const latMin = Math.min(...coords.map(c => c[1]));

        $boreholes.forEach(bh => {
            const x = (bh.longitude - lonMin) * 111320 * Math.cos(bh.latitude * Math.PI / 180);
            const z = (bh.latitude - latMin) * 111320;
            const maxDepth = bh.layers.length > 0 ? Math.max(...bh.layers.map(l => l.bottom_depth)) : 10;

            const cylinderGeo = new THREE.CylinderGeometry(1, 1, maxDepth, 16);

            const currentY = bh.elevation;

            bh.layers.forEach(layer => {
                const color = getLayerColor(layer.lithology_name, $lithologyTypes?.findIndex(l => l.name === layer.lithology_name) || 0);
                const thickness = layer.bottom_depth - layer.top_depth;

                const segGeo = new THREE.CylinderGeometry(1.2, 1.2, thickness, 16);
                const mat = new THREE.MeshPhongMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.9,
                });
                const mesh = new THREE.Mesh(segGeo, mat);
                mesh.position.set(x, bh.elevation - layer.top_depth - thickness / 2, z);
                scene.add(mesh);
                boreholeMeshes.push(mesh);
            });

            const topSphere = new THREE.Mesh(
                new THREE.SphereGeometry(1.5, 16, 16),
                new THREE.MeshPhongMaterial({ color: 0xffffff })
            );
            topSphere.position.set(x, bh.elevation, z);
            scene.add(topSphere);
            boreholeMeshes.push(topSphere);
        });
    }

    function updateModelSurfaces() {
        Object.values(layerMeshes).forEach(group => scene.remove(group));
        layerMeshes = {};

        if (!$activeModelResult?.surfaces) return;

        const result = $activeModelResult;
        const gridInfo = result.grid;
        const nx = gridInfo.nx;
        const ny = gridInfo.ny;

        result.lithologies.forEach((lithoName, idx) => {
            const surface = result.surfaces[lithoName];
            if (!surface?.top || !surface?.bottom) return;

            const top = surface.top;
            const bottom = surface.bottom;

            const color = getLayerColor(lithoName, idx);
            const isVisible = $layerVisibility[lithoName] !== false;
            const opacity = $layerOpacity[lithoName] ?? 0.7;

            const group = new THREE.Group();

            const geometry = new THREE.BufferGeometry();
            const vertices = [];
            const indices = [];

            for (let j = 0; j < ny; j++) {
                for (let i = 0; i < nx; i++) {
                    const x = (i / (nx - 1)) * 100;
                    const z = (j / (ny - 1)) * 100;
                    const y_top = top[j][i];
                    const y_bottom = bottom[j][i];

                    vertices.push(x, y_top, z);
                    vertices.push(x, y_bottom, z);
                }
            }

            for (let j = 0; j < ny - 1; j++) {
                for (let i = 0; i < nx - 1; i++) {
                    const idx0 = (j * nx + i) * 2;
                    const idx1 = (j * nx + i + 1) * 2;
                    const idx2 = ((j + 1) * nx + i) * 2;
                    const idx3 = ((j + 1) * nx + i + 1) * 2;

                    indices.push(idx0, idx2, idx1);
                    indices.push(idx1, idx2, idx3);
                    indices.push(idx0 + 1, idx1 + 1, idx2 + 1);
                    indices.push(idx1 + 1, idx3 + 1, idx2 + 1);
                }
            }

            for (let j = 0; j < ny - 1; j++) {
                for (let i = 0; i < nx - 1; i++) {
                    const topIdx = (j * nx + i) * 2;
                    const botIdx = topIdx + 1;
                    const topIdxNext = (j * nx + i + 1) * 2;
                    const botIdxNext = topIdxNext + 1;

                    indices.push(topIdx, topIdxNext, botIdx);
                    indices.push(botIdx, topIdxNext, botIdxNext);
                }
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            geometry.setIndex(indices);
            geometry.computeVertexNormals();

            const material = new THREE.MeshPhongMaterial({
                color: color,
                transparent: true,
                opacity: opacity,
                side: THREE.DoubleSide,
                clippingPlanes: $clipPlane.enabled && clipPlaneObj ? [clipPlaneObj] : [],
            });

            const mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);

            group.visible = isVisible;
            scene.add(group);
            layerMeshes[lithoName] = group;
        });
    }

    function updateClipPlane() {
        if ($clipPlane.enabled) {
            const n = $clipPlane.normal;
            const p = $clipPlane.position;
            clipPlaneObj = new THREE.Plane(
                new THREE.Vector3(n[0], n[1], n[2]).normalize(),
                -(n[0] * p[0] + n[1] * p[1] + n[2] * p[2])
            );
        } else {
            clipPlaneObj = null;
        }

        if (scene && $activeModelResult) {
            updateModelSurfaces();
        }
    }

    function updateAttributeField() {
        if (attributeMesh) {
            scene.remove(attributeMesh);
            attributeMesh.geometry?.dispose();
            if (Array.isArray(attributeMesh.material)) {
                attributeMesh.material.forEach(m => m.dispose());
            } else {
                attributeMesh.material?.dispose();
            }
            attributeMesh = null;
        }

        if (!$attributeField?.grid_values) return;

        const values = $attributeField.grid_values;
        const grid = $attributeField.grid;
        if (!grid || !values) return;

        const { nx, ny, nz, x_min, x_max, y_min, y_max, z_min, z_max } = grid;
        const mode = $attributeRendering.mode;
        const vmin = $attributeRendering.colorMin;
        const vmax = $attributeRendering.colorMax;

        const dx = (x_max - x_min) / (nx - 1 || 1);
        const dy = (y_max - y_min) / (ny - 1 || 1);
        const dz = (z_max - z_min) / (nz - 1 || 1);

        const voxelSize = 100 / Math.max(nx, ny);

        if (mode === 'voxel') {
            const group = new THREE.Group();
            const total = nx * ny * nz;
            const step = Math.max(1, Math.floor(total / 3000));
            let idx = 0;

            for (let k = 0; k < nz; k += 1) {
                for (let j = 0; j < ny; j += 1) {
                    for (let i = 0; i < nx; i += 1) {
                        if (idx++ % step !== 0 && step > 1) continue;
                        const flatIdx = k * ny * nx + j * nx + i;
                        if (flatIdx >= values.length) continue;
                        const v = values[flatIdx];
                        if (v === undefined || v === null || Number.isNaN(v)) continue;

                        const rgb = valueToColor(v, vmin, vmax);
                        const px = (i / (nx - 1 || 1)) * 100;
                        const pz = (j / (ny - 1 || 1)) * 100;
                        const py = z_min + k * dz;

                        const geo = new THREE.BoxGeometry(voxelSize * 0.8, dz * 0.8 || 0.5, voxelSize * 0.8);
                        const mat = new THREE.MeshBasicMaterial({
                            color: new THREE.Color(rgb[0], rgb[1], rgb[2]),
                            transparent: true,
                            opacity: 0.7,
                        });
                        const cube = new THREE.Mesh(geo, mat);
                        cube.position.set(px, py, pz);
                        group.add(cube);
                    }
                }
            }

            attributeMesh = group;
            scene.add(group);
        } else {
            const iso = $attributeRendering.isosurfaceValue;
            const verts = [];
            const inds = [];
            const colors = [];
            let vi = 0;

            for (let k = 0; k < nz - 1; k++) {
                for (let j = 0; j < ny - 1; j++) {
                    for (let i = 0; i < nx - 1; i++) {
                        const p = [
                            [i, j, k], [i + 1, j, k], [i + 1, j + 1, k], [i, j + 1, k],
                            [i, j, k + 1], [i + 1, j, k + 1], [i + 1, j + 1, k + 1], [i, j + 1, k + 1],
                        ];
                        const vals = p.map(([x, y, z]) => {
                            const fi = z * ny * nx + y * nx + x;
                            return fi < values.length ? values[fi] : 0;
                        });
                        const signs = vals.map(v => (v || 0) >= iso);
                        const count = signs.filter(s => s).length;
                        if (count === 0 || count === 8) continue;

                        const center_x = (i + 0.5) / (nx - 1) * 100;
                        const center_z = (j + 0.5) / (ny - 1) * 100;
                        const center_y = z_min + (k + 0.5) * dz;
                        const avgVal = vals.reduce((a, b) => a + b, 0) / 8;
                        const rgb = valueToColor(avgVal, vmin, vmax);

                        const s = voxelSize * 0.9;
                        const sy = Math.max(dz * 0.9, s * 0.2);
                        verts.push(
                            center_x - s/2, center_y - sy/2, center_z - s/2,
                            center_x + s/2, center_y - sy/2, center_z - s/2,
                            center_x + s/2, center_y - sy/2, center_z + s/2,
                            center_x - s/2, center_y - sy/2, center_z + s/2,
                            center_x - s/2, center_y + sy/2, center_z - s/2,
                            center_x + s/2, center_y + sy/2, center_z - s/2,
                            center_x + s/2, center_y + sy/2, center_z + s/2,
                            center_x - s/2, center_y + sy/2, center_z + s/2,
                        );
                        for (let cc = 0; cc < 8; cc++) {
                            colors.push(rgb[0], rgb[1], rgb[2]);
                        }
                        inds.push(
                            vi, vi + 1, vi + 2, vi, vi + 2, vi + 3,
                            vi + 4, vi + 6, vi + 5, vi + 4, vi + 7, vi + 6,
                            vi, vi + 4, vi + 5, vi, vi + 5, vi + 1,
                            vi + 1, vi + 5, vi + 6, vi + 1, vi + 6, vi + 2,
                            vi + 2, vi + 6, vi + 7, vi + 2, vi + 7, vi + 3,
                            vi + 3, vi + 7, vi + 4, vi + 3, vi + 4, vi,
                        );
                        vi += 8;
                    }
                }
            }

            if (verts.length === 0) return;

            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
            geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
            geo.setIndex(inds);
            geo.computeVertexNormals();

            const mat = new THREE.MeshPhongMaterial({
                vertexColors: true,
                transparent: true,
                opacity: 0.85,
                side: THREE.DoubleSide,
            });
            attributeMesh = new THREE.Mesh(geo, mat);
            scene.add(attributeMesh);
        }
    }

    function updateSurfaceOverlay() {
        if (surfaceMesh) {
            scene.remove(surfaceMesh);
            surfaceMesh.geometry?.dispose();
            if (Array.isArray(surfaceMesh.material)) {
                surfaceMesh.material.forEach(m => m.dispose());
            } else {
                surfaceMesh.material?.dispose();
            }
            surfaceMesh = null;
        }

        const overlay = $surfaceOverlay;
        if (!overlay || !overlay.visible || (!overlay.orthoImage && !overlay.demImage)) return;

        const width = 100;
        const height = 100;
        const size = 100;

        if (overlay.demImage) {
            const img = overlay.demImage;
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            const imgRatio = size / 100;
            ctx.drawImage(img, 0, 0, 64, 64);
            try {
                const imgData = ctx.getImageData(0, 0, 64, 64).data;
                const segW = 32;
                const segH = 32;
                const geo = new THREE.PlaneGeometry(size, size, segW, segH);
                const pos = geo.attributes.position;
                for (let j = 0; j <= segH; j++) {
                    for (let i = 0; i <= segW; i++) {
                        const px = Math.floor(i / segW * 63);
                        const py = Math.floor(j / segH * 63);
                        const idx = (py * 64 + px) * 4;
                        const gray = (imgData[idx] + imgData[idx + 1] + imgData[idx + 2]) / 3;
                        const elev = (gray / 255) * 30 - 5;
                        pos.setZ(j * (segW + 1) + i, elev);
                    }
                }
                geo.computeVertexNormals();

                const matParams = {
                    transparent: true,
                    opacity: overlay.opacity,
                    side: THREE.DoubleSide,
                };

                if (overlay.orthoImage) {
                    const texture = new THREE.Texture(overlay.orthoImage);
                    texture.needsUpdate = true;
                    matParams.map = texture;
                } else {
                    matParams.vertexColors = false;
                    matParams.color = 0x88aa66;
                }

                const mat = new THREE.MeshPhongMaterial(matParams);
                const mesh = new THREE.Mesh(geo, mat);
                mesh.rotation.x = -Math.PI / 2;
                mesh.position.y = 0;
                surfaceMesh = mesh;
                scene.add(mesh);
                return;
            } catch (e) {
                console.warn('DEM texture load failed:', e);
            }
        }

        if (overlay.orthoImage) {
            const texture = new THREE.Texture(overlay.orthoImage);
            texture.needsUpdate = true;
            const geo = new THREE.PlaneGeometry(size, size);
            const mat = new THREE.MeshPhongMaterial({
                map: texture,
                transparent: true,
                opacity: overlay.opacity,
                side: THREE.DoubleSide,
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.rotation.x = -Math.PI / 2;
            mesh.position.y = 0.01;
            surfaceMesh = mesh;
            scene.add(mesh);
        }
    }
</script>

<div class="viewer-container" bind:this={container}>
    {#if !$activeModelResult && $boreholes.length === 0 && !$attributeField}
        <div class="viewer-empty">
            <div class="empty-icon">⛏</div>
            <h3>GeoModeler 三维地质可视化</h3>
            <p>导入钻孔数据后开始三维建模与可视化分析</p>
        </div>
    {/if}
</div>

<style>
    .viewer-container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .viewer-empty {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text-muted);
        pointer-events: none;
        z-index: 1;
    }

    .empty-icon {
        font-size: 48px;
        margin-bottom: 16px;
    }

    .viewer-empty h3 {
        font-size: 18px;
        color: var(--text-secondary);
        margin-bottom: 8px;
    }

    .viewer-empty p {
        font-size: 13px;
    }
</style>
