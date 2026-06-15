<script>
    import { onMount } from 'svelte';
    import {
        currentProject, boreholes, lithologyTypes, activeModelResult,
        layerVisibility, layerOpacity, clipPlane, volumeResult, addToast,
        attributeField, attributeRendering, surfaceOverlay,
        boreholeWarnings, volumeCardData, volumeCardCollapsed,
        waterLevelContourResult, waterLevelContourVisible, waterLevelContourOpacity,
        waterLevelIntersectionLine
    } from '../stores/index.js';
    import api from '../api/client.js';

    let container;
    let scene, camera, renderer, controls;
    let layerMeshes = {};
    let boreholeMeshes = [];
    let warningMeshes = [];
    let clipPlaneObj = null;
    let attributeMesh = null;
    let surfaceMesh = null;
    let waterLevelMesh = null;
    let intersectionLineMesh = null;
    let animationId;
    let sceneReady = false;

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

        const unsubBoreholes = boreholes.subscribe(v => {
            if (sceneReady && v && v.length > 0) {
                updateBoreholeCylinders(v);
                updateWarningBoxes();
            }
        });

        const unsubModel = activeModelResult.subscribe(v => {
            if (sceneReady && v) {
                updateModelSurfaces();
            }
        });

        const unsubClip = clipPlane.subscribe(() => {
            if (sceneReady) {
                updateClipPlane();
            }
        });

        const unsubLayerVis = layerVisibility.subscribe(() => {
            if (sceneReady && $activeModelResult) {
                updateModelSurfaces();
            }
        });

        const unsubLayerOpacity = layerOpacity.subscribe(() => {
            if (sceneReady && $activeModelResult) {
                updateModelSurfaces();
            }
        });

        const unsubAttr = attributeField.subscribe(v => {
            if (!sceneReady) return;
            if (v) {
                updateAttributeField();
            } else if (attributeMesh) {
                disposeMesh(attributeMesh);
                attributeMesh = null;
            }
        });

        const unsubAttrRendering = attributeRendering.subscribe(() => {
            if (sceneReady && $attributeField) {
                updateAttributeField();
            }
        });

        const unsubOverlay = surfaceOverlay.subscribe(() => {
            if (sceneReady) {
                updateSurfaceOverlay();
            }
        });

        const unsubWarnings = boreholeWarnings.subscribe(() => {
            if (sceneReady) {
                updateWarningBoxes();
            }
        });

        const unsubWLContour = waterLevelContourResult.subscribe(() => {
            if (sceneReady) {
                updateWaterLevelSurface();
            }
        });

        const unsubWLVisible = waterLevelContourVisible.subscribe(() => {
            if (sceneReady && waterLevelMesh) {
                waterLevelMesh.visible = $waterLevelContourVisible;
            }
        });

        const unsubWLOpacity = waterLevelContourOpacity.subscribe(() => {
            if (sceneReady && waterLevelMesh) {
                waterLevelMesh.material.opacity = $waterLevelContourOpacity;
            }
        });

        const unsubWLIntersect = waterLevelIntersectionLine.subscribe(() => {
            if (sceneReady) {
                updateIntersectionLine();
            }
        });

        return () => {
            unsubBoreholes();
            unsubModel();
            unsubClip();
            unsubLayerVis();
            unsubLayerOpacity();
            unsubAttr();
            unsubAttrRendering();
            unsubOverlay();
            unsubWarnings();
            unsubWLContour();
            unsubWLVisible();
            unsubWLOpacity();
            unsubWLIntersect();
            cancelAnimationFrame(animationId);
            renderer?.dispose();
        };
    });

    function disposeMesh(mesh) {
        if (!mesh) return;
        scene.remove(mesh);
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
            if (Array.isArray(mesh.material)) {
                mesh.material.forEach(m => m.dispose());
            } else {
                mesh.material.dispose();
            }
        }
        if (mesh.children) {
            mesh.children.forEach(c => disposeMesh(c));
        }
    }

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

        sceneReady = true;

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

    function getBoreholePosition(bh) {
        const bhs = $boreholes;
        if (!bhs || bhs.length === 0) return null;
        const coords = bhs.map(b => [b.longitude, b.latitude]);
        const lonMin = Math.min(...coords.map(c => c[0]));
        const latMin = Math.min(...coords.map(c => c[1]));
        const x = (bh.longitude - lonMin) * 111320 * Math.cos(bh.latitude * Math.PI / 180);
        const z = (bh.latitude - latMin) * 111320;
        return { x, z };
    }

    function updateWarningBoxes() {
        warningMeshes.forEach(m => { disposeMesh(m); });
        warningMeshes = [];

        const bhs = $boreholes;
        if (!bhs || bhs.length < 2) return;

        const coords = bhs.map(b => [b.longitude, b.latitude]);
        const spacings = [];
        for (let i = 1; i < bhs.length; i++) {
            const d = Math.sqrt(
                Math.pow((bhs[i].longitude - bhs[i-1].longitude) * 111320 * Math.cos(bhs[i].latitude * Math.PI / 180), 2) +
                Math.pow((bhs[i].latitude - bhs[i-1].latitude) * 111320, 2)
            );
            spacings.push(d);
        }
        const avgSpacing = spacings.reduce((a, b) => a + b, 0) / spacings.length;

        for (let i = 0; i < spacings.length; i++) {
            if (spacings[i] > avgSpacing * 2) {
                const pos1 = getBoreholePosition(bhs[i]);
                const pos2 = getBoreholePosition(bhs[i + 1]);
                if (!pos1 || !pos2) continue;

                const cx = (pos1.x + pos2.x) / 2;
                const cz = (pos1.z + pos2.z) / 2;
                const w = Math.abs(pos2.x - pos1.x) || 5;
                const d = Math.abs(pos2.z - pos1.z) || 5;
                const h = 50;

                const geo = new THREE.BoxGeometry(w + 4, h, d + 4);
                const mat = new THREE.MeshBasicMaterial({
                    color: 0xff3333,
                    transparent: true,
                    opacity: 0.15,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                });
                const mesh = new THREE.Mesh(geo, mat);
                mesh.position.set(cx, bhs[i].elevation - h / 2, cz);
                scene.add(mesh);
                warningMeshes.push(mesh);

                const edges = new THREE.EdgesGeometry(geo);
                const lineMat = new THREE.LineBasicMaterial({
                    color: 0xff3333,
                    transparent: true,
                    opacity: 0.6,
                });
                const line = new THREE.LineSegments(edges, lineMat);
                line.position.copy(mesh.position);
                scene.add(line);
                warningMeshes.push(line);
            }
        }
    }

    function updateBoreholeCylinders(bhs) {
        boreholeMeshes.forEach(m => { disposeMesh(m); });
        boreholeMeshes = [];

        if (!bhs || bhs.length === 0) return;

        const coords = bhs.map(b => [b.longitude, b.latitude, b.elevation]);
        if (coords.length === 0) return;

        const lonMin = Math.min(...coords.map(c => c[0]));
        const latMin = Math.min(...coords.map(c => c[1]));

        bhs.forEach(bh => {
            const x = (bh.longitude - lonMin) * 111320 * Math.cos(bh.latitude * Math.PI / 180);
            const z = (bh.latitude - latMin) * 111320;

            if (!bh.layers || bh.layers.length === 0) return;

            bh.layers.forEach(layer => {
                const ltIdx = $lithologyTypes?.findIndex(l => l.name === layer.lithology_name) || 0;
                const color = getLayerColor(layer.lithology_name, ltIdx);
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
        Object.values(layerMeshes).forEach(group => { disposeMesh(group); });
        layerMeshes = {};

        const result = $activeModelResult;
        if (!result?.surfaces) return;

        const gridInfo = result.grid;
        if (!gridInfo) return;
        const nx = gridInfo.nx;
        const ny = gridInfo.ny;

        if (!result.lithologies) return;

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
                    const y_top = top[j]?.[i] ?? 0;
                    const y_bottom = bottom[j]?.[i] ?? 0;

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

        if (sceneReady && $activeModelResult) {
            updateModelSurfaces();
        }
    }

    function updateAttributeField() {
        if (attributeMesh) {
            disposeMesh(attributeMesh);
            attributeMesh = null;
        }

        const attrField = $attributeField;
        if (!attrField) return;

        const values = attrField.field || attrField.grid_values;
        if (!values) return;

        const grid = attrField.grid;
        if (!grid) return;

        const nx = grid.nx || grid.lon_nx || 50;
        const ny = grid.ny || grid.lat_ny || 50;
        const nz = grid.nz || grid.elev_nz || 25;

        const mode = $attributeRendering.mode;
        const vmin = $attributeRendering.colorMin;
        const vmax = $attributeRendering.colorMax;

        const zMin = grid.elev_min ?? grid.z_min ?? 0;
        const zMax = grid.elev_max ?? grid.z_max ?? 100;
        const dz = (zMax - zMin) / (nz - 1 || 1);

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
                        const py = zMin + k * dz;

                        const geo = new THREE.BoxGeometry(voxelSize * 0.8, Math.abs(dz * 0.8) || 0.5, voxelSize * 0.8);
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
                        const center_y = zMin + (k + 0.5) * dz;
                        const avgVal = vals.reduce((a, b) => a + b, 0) / 8;
                        const rgb = valueToColor(avgVal, vmin, vmax);

                        const s = voxelSize * 0.9;
                        const sy = Math.max(Math.abs(dz * 0.9), s * 0.2);
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
            disposeMesh(surfaceMesh);
            surfaceMesh = null;
        }

        const overlay = $surfaceOverlay;
        if (!overlay || !overlay.visible || (!overlay.orthoImage && !overlay.demImage)) return;

        const size = 100;

        if (overlay.demImage) {
            const img = overlay.demImage;
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
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

    async function loadVolumeCard() {
        if (!$activeModelResult || !$modelingProgress?.runId) return;
        try {
            const data = await api.post(`/projects/modeling/runs/${$modelingProgress?.runId}/volumes-all`);
            $volumeCardData = data;
        } catch (e) {
            console.warn('加载体积卡片失败:', e);
        }
    }

    function getSceneCoordFromLonLat(lon, lat, elev) {
        const bhs = $boreholes;
        if (!bhs || bhs.length === 0) return null;
        const lonMin = Math.min(...bhs.map(b => b.longitude));
        const latMin = Math.min(...bhs.map(b => b.latitude));
        const refLat = bhs[0].latitude;
        const x = (lon - lonMin) * 111320 * Math.cos(refLat * Math.PI / 180);
        const z = (lat - latMin) * 111320;
        return { x, y: elev, z };
    }

    function wlValueToColor(v, vmin, vmax) {
        const t = vmax > vmin ? Math.max(0, Math.min(1, (v - vmin) / (vmax - vmin))) : 0.5;
        const r = Math.min(1, t * 2);
        const g = t < 0.5 ? t * 1.5 : (1 - t) * 1.5;
        const b = Math.max(0, 1 - t * 2);
        return [r, g, b];
    }

    function updateWaterLevelSurface() {
        if (waterLevelMesh) {
            disposeMesh(waterLevelMesh);
            waterLevelMesh = null;
        }

        const contour = $waterLevelContourResult;
        if (!contour?.water_level_grid) return;

        const grid = contour.grid;
        const nx = grid.nx;
        const ny = grid.ny;
        const wlGrid = contour.water_level_grid;
        const wlMin = contour.water_level_min;
        const wlMax = contour.water_level_max;

        const bhs = $boreholes;
        if (!bhs || bhs.length === 0) return;

        const lonMin = grid.lon_min;
        const latMin = grid.lat_min;
        const lonRange = grid.lon_max - lonMin;
        const latRange = grid.lat_max - latMin;
        const refLat = bhs[0].latitude;

        const size = 100;
        const vertices = [];
        const colors = [];
        const indices = [];

        for (let j = 0; j < ny; j++) {
            for (let i = 0; i < nx; i++) {
                const lonFrac = nx > 1 ? i / (nx - 1) : 0.5;
                const latFrac = ny > 1 ? j / (ny - 1) : 0.5;
                const lon = lonMin + lonFrac * lonRange;
                const lat = latMin + latFrac * latRange;
                const wl = wlGrid[j]?.[i] ?? (wlMin + wlMax) / 2;

                const pos = getSceneCoordFromLonLat(lon, lat, wl);
                if (!pos) continue;

                vertices.push(pos.x, pos.y, pos.z);

                const rgb = wlValueToColor(wl, wlMin, wlMax);
                colors.push(rgb[0], rgb[1], rgb[2]);
            }
        }

        for (let j = 0; j < ny - 1; j++) {
            for (let i = 0; i < nx - 1; i++) {
                const idx0 = j * nx + i;
                const idx1 = j * nx + i + 1;
                const idx2 = (j + 1) * nx + i;
                const idx3 = (j + 1) * nx + i + 1;

                indices.push(idx0, idx2, idx1);
                indices.push(idx1, idx2, idx3);
            }
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geo.setIndex(indices);
        geo.computeVertexNormals();

        const mat = new THREE.MeshPhongMaterial({
            vertexColors: true,
            transparent: true,
            opacity: $waterLevelContourOpacity,
            side: THREE.DoubleSide,
            depthWrite: false,
        });

        waterLevelMesh = new THREE.Mesh(geo, mat);
        waterLevelMesh.visible = $waterLevelContourVisible;
        waterLevelMesh.renderOrder = 10;
        scene.add(waterLevelMesh);
    }

    function updateIntersectionLine() {
        if (intersectionLineMesh) {
            disposeMesh(intersectionLineMesh);
            intersectionLineMesh = null;
        }

        const points = $waterLevelIntersectionLine;
        if (!points || points.length < 2) return;

        const bhs = $boreholes;
        if (!bhs || bhs.length === 0) return;

        points.sort((a, b) => {
            const da = (a.longitude - bhs[0].longitude) ** 2 + (a.latitude - bhs[0].latitude) ** 2;
            const db = (b.longitude - bhs[0].longitude) ** 2 + (b.latitude - bhs[0].latitude) ** 2;
            return da - db;
        });

        const positions = [];
        for (const p of points) {
            const pos = getSceneCoordFromLonLat(p.longitude, p.latitude, p.elevation);
            if (pos) {
                positions.push(pos.x, pos.y, pos.z);
            }
        }

        if (positions.length < 6) return;

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        const mat = new THREE.LineBasicMaterial({
            color: 0xffffff,
            linewidth: 2,
            transparent: true,
            opacity: 0.9,
        });

        intersectionLineMesh = new THREE.Line(geo, mat);
        intersectionLineMesh.renderOrder = 20;
        scene.add(intersectionLineMesh);
    }

    let modelingProgress;
    import { modelingProgress as mpStore } from '../stores/index.js';
    mpStore.subscribe(v => { modelingProgress = v; });

    $: if ($activeModelResult && !$volumeCardData) {
        loadVolumeCard();
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

    {#if $volumeCardData && $volumeCardData.length > 0}
        <div class="volume-card" class:collapsed={$volumeCardCollapsed}>
            <div class="volume-card-header" on:click={() => $volumeCardCollapsed = !$volumeCardCollapsed}>
                <span class="volume-card-title">体积估算</span>
                <span class="volume-card-toggle">{$volumeCardCollapsed ? '▸' : '▾'}</span>
            </div>
            {#if !$volumeCardCollapsed}
                <div class="volume-card-body">
                    {#each $volumeCardData as item}
                        <div class="volume-card-row">
                            <span class="volume-color-swatch" style="background:{$lithologyTypes?.find(l => l.name === item.lithology_name)?.color || '#888'}"></span>
                            <span class="volume-name">{item.lithology_name}</span>
                            <span class="volume-value">{item.volume.toFixed(2)} m³</span>
                            <span class="volume-percent">{item.percentage.toFixed(2)}%</span>
                        </div>
                    {/each}
                    {#if $volumeCardData.length > 0}
                        <div class="volume-card-total">
                            总体积: {$volumeCardData[0].total_volume.toFixed(2)} m³
                        </div>
                    {/if}
                </div>
            {/if}
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

    .volume-card {
        position: absolute;
        bottom: 16px;
        right: 16px;
        background: rgba(26, 29, 35, 0.92);
        border: 1px solid var(--border);
        border-radius: 10px;
        min-width: 240px;
        max-width: 320px;
        z-index: 10;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    }

    .volume-card.collapsed {
        min-width: auto;
    }

    .volume-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 14px;
        cursor: pointer;
        border-bottom: 1px solid var(--border);
    }

    .volume-card-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--text-primary);
    }

    .volume-card-toggle {
        font-size: 12px;
        color: var(--text-muted);
    }

    .volume-card-body {
        padding: 8px 12px;
        max-height: 260px;
        overflow-y: auto;
    }

    .volume-card-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 0;
        font-size: 12px;
    }

    .volume-color-swatch {
        width: 12px;
        height: 12px;
        border-radius: 2px;
        flex-shrink: 0;
        border: 1px solid rgba(255,255,255,0.2);
    }

    .volume-name {
        flex: 1;
        color: var(--text-secondary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .volume-value {
        color: var(--text-primary);
        font-weight: 600;
        white-space: nowrap;
    }

    .volume-percent {
        color: var(--text-muted);
        font-size: 11px;
        min-width: 44px;
        text-align: right;
    }

    .volume-card-total {
        margin-top: 6px;
        padding-top: 6px;
        border-top: 1px solid var(--border);
        font-size: 12px;
        font-weight: 600;
        color: var(--accent);
        text-align: center;
    }
</style>
