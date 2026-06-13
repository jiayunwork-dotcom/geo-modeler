<script>
    import { onMount } from 'svelte';
    import {
        currentProject, boreholes, lithologyTypes, activeModelResult,
        layerVisibility, layerOpacity, clipPlane, volumeResult, addToast
    } from '../stores/index.js';

    let container;
    let scene, camera, renderer, controls;
    let layerMeshes = {};
    let boreholeMeshes = [];
    let clipPlaneObj = null;
    let animationId;

    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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
                const lt = $lithologyTypes?.find(l => l.name === layer.lithology_name);
                const color = lt?.color || '#888888';
                const thickness = layer.bottom_depth - layer.top_depth;

                const segGeo = new THREE.CylinderGeometry(1.2, 1.2, thickness, 16);
                const mat = new THREE.MeshPhongMaterial({
                    color: new THREE.Color(color),
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

        const lonMin = gridInfo.lon_min;
        const lonMax = gridInfo.lon_max;
        const latMin = gridInfo.lat_min;
        const latMax = gridInfo.lat_max;

        result.lithologies.forEach((lithoName, idx) => {
            const surface = result.surfaces[lithoName];
            if (!surface?.top || !surface?.bottom) return;

            const top = surface.top;
            const bottom = surface.bottom;

            const lt = $lithologyTypes?.find(l => l.name === lithoName);
            const color = lt?.color || '#888888';
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
                color: new THREE.Color(color),
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
</script>

<div class="viewer-container" bind:this={container}>
    {#if !$activeModelResult && $boreholes.length === 0}
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
