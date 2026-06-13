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
        const detail = await resp.json().catch(() => ({ detail: resp.statusText }));
        throw new Error(detail.detail || `请求失败: ${resp.status}`);
    }

    if (options.raw) return resp;

    return resp.json();
}

export default {
    get: (path, opts) => request('GET', path, null, opts),
    post: (path, body, opts) => request('POST', path, body, opts),
    put: (path, body, opts) => request('PUT', path, body, opts),
    delete: (path, opts) => request('DELETE', path, null, opts),

    uploadCsv: (projectId, file) => {
        const fd = new FormData();
        fd.append('file', file);
        return request('POST', `/boreholes/${projectId}/boreholes/import-csv`, fd);
    },

    exportGltf: (runId) => request('GET', `/export/gltf/${runId}`, null, { raw: true }),
    exportProfilePng: (profileId) => request('GET', `/export/profile/${profileId}/png`, null, { raw: true }),
    exportProfileSvg: (profileId) => request('GET', `/export/profile/${profileId}/svg`, null, { raw: true }),
    exportStatsExcel: (projectId) => request('GET', `/export/stats/${projectId}/excel`, null, { raw: true }),
    exportReportPdf: (runId) => request('GET', `/export/report/${runId}/pdf`, null, { raw: true }),
};
