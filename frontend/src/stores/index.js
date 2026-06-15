import { writable, derived } from 'svelte/store';

export const currentProject = writable(null);

export const boreholes = writable([]);

export const lithologyTypes = writable([]);

export const profiles = writable([]);

export const modelRuns = writable([]);

export const activeModelResult = writable(null);

export const attributeField = writable(null);

export const attributeRendering = writable({
    mode: 'voxel',
    isosurfaceValue: 0,
    colorMin: 0,
    colorMax: 100,
});

export const toasts = writable([]);

export function addToast(message, type = 'info', duration = 4000) {
    const id = Date.now();
    toasts.update(t => [...t, { id, message, type }]);
    if (duration > 0) {
        setTimeout(() => {
            toasts.update(t => t.filter(x => x.id !== id));
        }, duration);
    }
}

export const selectedBoreholes = writable([]);

export const modelingProgress = writable({ status: 'idle', progress: 0, runId: null });

export const layerVisibility = writable({});

export const layerOpacity = writable({});

export const clipPlane = writable({ enabled: false, normal: [0, 0, -1], position: [0, 0, 0] });

export const volumeResult = writable(null);

export const activeTab = writable('boreholes');

export const editingBorehole = writable(null);

export const wsConnection = writable(null);

export const activeProfileData = writable(null);

export const comparisonMode = writable(false);

export const comparisonLeftProfileId = writable(null);

export const comparisonRightProfileId = writable(null);

export const comparisonLeftData = writable(null);

export const comparisonRightData = writable(null);

export const volumeCardCollapsed = writable(false);

export const volumeCardData = writable(null);

export const boreholeWarnings = writable([]);

export const variogramPreview = writable(null);

export const surfaceOverlay = writable({
    orthoImage: null,
    demImage: null,
    opacity: 1.0,
    visible: true,
});

export const waterLevelData = writable([]);

export const waterLevelStats = writable([]);

export const waterLevelMKResults = writable([]);

export const waterLevelBoxplot = writable([]);

export const waterLevelContourResult = writable(null);

export const waterLevelContourVisible = writable(false);

export const waterLevelContourOpacity = writable(0.6);

export const waterLevelIntersectionLine = writable(null);

export const waterLevelPlaybackState = writable({
    playing: false,
    startDate: null,
    endDate: null,
    speed: 7,
    currentDate: null,
    progress: 0,
});

export const waterLevelSubTab = writable('data');

