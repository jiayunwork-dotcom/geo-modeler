const API_BASE = '/api';

async function request(method, path, body = null, options = {}) {
    const url = `${API_BASE}${path}`;
    const headers = {};
    if (body && !(body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }

    const resp = await fetch(url, {
        method,
        headers,
        body: body instanceof FormData ? body : body ? JSON.stringify(body) : null,
        ...options,
    });

    if (resp.status === 204) return null;

    if (!resp.ok) {
        const contentType = resp.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const err = await resp.json().catch(() => ({ detail: resp.statusText }));
            throw new Error(err.detail || `请求失败 (${resp.status}): ${resp.statusText}`);
        }
        throw new Error(`请求失败 (${resp.status}): ${resp.statusText}`);
    }

    if (options.raw) return resp;
    const contentType = resp.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return resp.json();
    }
    return resp;
}

export default {
    get: (path, opts) => request('GET', path, null, opts),
    post: (path, body, opts) => request('POST', path, body, opts),
    put: (path, body, opts) => request('PUT', path, body, opts),
    patch: (path, body, opts) => request('PATCH', path, body, opts),
    delete: (path, opts) => request('DELETE', path, null, opts),

    uploadCsv: (projectId, file) => {
        const fd = new FormData();
        fd.append('file', file);
        return request('POST', `/projects/${projectId}/boreholes/import-csv`, fd);
    },

    exportGltf: (runId) => request('GET', `/export/gltf/${runId}`, null, { raw: true }),
    exportProfilePng: (profileId) => request('GET', `/export/profile/${profileId}/png`, null, { raw: true }),
    exportProfileSvg: (profileId) => request('GET', `/export/profile/${profileId}/svg`, null, { raw: true }),
    exportStatsExcel: (projectId) => request('GET', `/export/stats/${projectId}/excel`, null, { raw: true }),
    exportReportPdf: (runId) => request('GET', `/export/report/${runId}/pdf`, null, { raw: true }),

    downloadBlob: async (path, filename) => {
        const resp = await request('GET', path, null, { raw: true });
        const blob = await resp.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = filename; a.click();
        URL.revokeObjectURL(url);
    },

    getWaterLevels: (projectId, boreholeId) => {
        const params = boreholeId ? `?borehole_id=${boreholeId}` : '';
        return request('GET', `/projects/${projectId}/water-levels${params}`);
    },

    createWaterLevel: (projectId, data) => request('POST', `/projects/${projectId}/water-levels`, data),

    deleteWaterLevel: (projectId, waterLevelId) => request('DELETE', `/projects/${projectId}/water-levels/${waterLevelId}`),

    importWaterLevelCsv: (projectId, file) => {
        const fd = new FormData();
        fd.append('file', file);
        return request('POST', `/projects/${projectId}/water-levels/import-csv`, fd);
    },

    getWaterLevelStats: (projectId, boreholeIds) =>
        request('POST', `/projects/${projectId}/water-levels/statistics`, boreholeIds),

    getWaterLevelMKTest: (projectId, boreholeIds) =>
        request('POST', `/projects/${projectId}/water-levels/mk-test`, boreholeIds),

    getWaterLevelBoxplot: (projectId, boreholeIds) =>
        request('POST', `/projects/${projectId}/water-levels/boxplot`, boreholeIds),

    krigingWaterLevel: (projectId, data) =>
        request('POST', `/projects/${projectId}/water-levels/kriging`, data),
};
