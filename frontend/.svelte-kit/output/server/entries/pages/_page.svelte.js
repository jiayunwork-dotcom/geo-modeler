import { c as create_ssr_component, s as subscribe, e as escape, b as each, d as add_attribute, f as set_store_value, n as noop, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const currentProject = writable(null);
const boreholes = writable([]);
const lithologyTypes = writable([]);
const profiles = writable([]);
const modelRuns = writable([]);
const activeModelResult = writable(null);
const attributeField = writable(null);
const attributeRendering = writable({
  mode: "voxel",
  isosurfaceValue: 0,
  colorMin: 0,
  colorMax: 100
});
const toasts = writable([]);
function addToast(message, type = "info", duration = 4e3) {
  const id = Date.now();
  toasts.update((t) => [...t, { id, message, type }]);
  if (duration > 0) {
    setTimeout(() => {
      toasts.update((t) => t.filter((x) => x.id !== id));
    }, duration);
  }
}
const selectedBoreholes = writable([]);
const modelingProgress = writable({ status: "idle", progress: 0, runId: null });
const layerVisibility = writable({});
const layerOpacity = writable({});
const clipPlane = writable({ enabled: false, normal: [0, 0, -1], position: [0, 0, 0] });
const volumeResult = writable(null);
const activeTab = writable("boreholes");
const editingBorehole = writable(null);
const activeProfileData = writable(null);
const comparisonMode = writable(false);
const comparisonLeftProfileId = writable(null);
const comparisonRightProfileId = writable(null);
const comparisonLeftData = writable(null);
const comparisonRightData = writable(null);
const volumeCardCollapsed = writable(false);
const volumeCardData = writable(null);
const boreholeWarnings = writable([]);
const variogramPreview = writable(null);
const surfaceOverlay = writable({
  orthoImage: null,
  demImage: null,
  opacity: 1,
  visible: true
});
const waterLevelData = writable([]);
const waterLevelStats = writable([]);
const waterLevelMKResults = writable([]);
const waterLevelBoxplot = writable([]);
const waterLevelContourResult = writable(null);
const waterLevelContourVisible = writable(false);
const waterLevelContourOpacity = writable(0.6);
const waterLevelIntersectionLine = writable(null);
const waterLevelPlaybackState = writable({
  playing: false,
  startDate: null,
  endDate: null,
  speed: 7,
  currentDate: null,
  progress: 0
});
const waterLevelSubTab = writable("data");
const waterLevelThresholds = writable([]);
const waterLevelWarnings = writable([]);
const waterLevelAnomalies = writable({});
const selectedWaterLevelBoreholeId = writable("");
const showWarningPanel = writable(false);
const API_BASE = "/api";
async function request(method, path, body = null, options = {}) {
  const url = `${API_BASE}${path}`;
  const headers = {};
  if (body && !(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }
  const resp = await fetch(url, {
    method,
    headers,
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : null,
    ...options
  });
  if (resp.status === 204)
    return null;
  if (!resp.ok) {
    const contentType2 = resp.headers.get("content-type");
    if (contentType2 && contentType2.includes("application/json")) {
      const err = await resp.json().catch(() => ({ detail: resp.statusText }));
      throw new Error(err.detail || `请求失败 (${resp.status}): ${resp.statusText}`);
    }
    throw new Error(`请求失败 (${resp.status}): ${resp.statusText}`);
  }
  if (options.raw)
    return resp;
  const contentType = resp.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return resp.json();
  }
  return resp;
}
const api = {
  get: (path, opts) => request("GET", path, null, opts),
  post: (path, body, opts) => request("POST", path, body, opts),
  put: (path, body, opts) => request("PUT", path, body, opts),
  patch: (path, body, opts) => request("PATCH", path, body, opts),
  delete: (path, opts) => request("DELETE", path, null, opts),
  uploadCsv: (projectId, file) => {
    const fd = new FormData();
    fd.append("file", file);
    return request("POST", `/projects/${projectId}/boreholes/import-csv`, fd);
  },
  exportGltf: (runId) => request("GET", `/export/gltf/${runId}`, null, { raw: true }),
  exportProfilePng: (profileId) => request("GET", `/export/profile/${profileId}/png`, null, { raw: true }),
  exportProfileSvg: (profileId) => request("GET", `/export/profile/${profileId}/svg`, null, { raw: true }),
  exportStatsExcel: (projectId) => request("GET", `/export/stats/${projectId}/excel`, null, { raw: true }),
  exportReportPdf: (runId) => request("GET", `/export/report/${runId}/pdf`, null, { raw: true }),
  downloadBlob: async (path, filename) => {
    const resp = await request("GET", path, null, { raw: true });
    const blob = await resp.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  },
  getWaterLevels: (projectId, boreholeId) => {
    const params = boreholeId ? `?borehole_id=${boreholeId}` : "";
    return request("GET", `/projects/${projectId}/water-levels${params}`);
  },
  createWaterLevel: (projectId, data) => request("POST", `/projects/${projectId}/water-levels`, data),
  deleteWaterLevel: (projectId, waterLevelId) => request("DELETE", `/projects/${projectId}/water-levels/${waterLevelId}`),
  importWaterLevelCsv: (projectId, file) => {
    const fd = new FormData();
    fd.append("file", file);
    return request("POST", `/projects/${projectId}/water-levels/import-csv`, fd);
  },
  getWaterLevelStats: (projectId, boreholeIds) => request("POST", `/projects/${projectId}/water-levels/statistics`, boreholeIds),
  getWaterLevelMKTest: (projectId, boreholeIds) => request("POST", `/projects/${projectId}/water-levels/mk-test`, boreholeIds),
  getWaterLevelBoxplot: (projectId, boreholeIds) => request("POST", `/projects/${projectId}/water-levels/boxplot`, boreholeIds),
  krigingWaterLevel: (projectId, data) => request("POST", `/projects/${projectId}/water-levels/kriging`, data),
  getWaterLevelThresholds: (projectId) => request("GET", `/projects/${projectId}/water-levels/thresholds`),
  getWaterLevelThreshold: (projectId, boreholeId) => request("GET", `/projects/${projectId}/water-levels/thresholds/${boreholeId}`),
  createWaterLevelThreshold: (projectId, data) => request("POST", `/projects/${projectId}/water-levels/thresholds`, data),
  updateWaterLevelThreshold: (projectId, thresholdId, data) => request("PUT", `/projects/${projectId}/water-levels/thresholds/${thresholdId}`, data),
  deleteWaterLevelThreshold: (projectId, thresholdId) => request("DELETE", `/projects/${projectId}/water-levels/thresholds/${thresholdId}`),
  detectWaterLevelAnomalies: (projectId, boreholeIds) => request("POST", `/projects/${projectId}/water-levels/anomalies`, boreholeIds),
  getWaterLevelWarnings: (projectId) => request("GET", `/projects/${projectId}/water-levels/warnings`)
};
const css$c = {
  code: ".empty-state.svelte-jbi2uy.svelte-jbi2uy{text-align:center;padding:40px 16px;color:var(--text-muted)}.borehole-card.svelte-jbi2uy.svelte-jbi2uy{background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;padding:10px 12px;margin-bottom:8px;transition:border-color 0.2s}.borehole-card.selected.svelte-jbi2uy.svelte-jbi2uy{border-color:var(--accent)}.card-header.svelte-jbi2uy.svelte-jbi2uy{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.card-actions.svelte-jbi2uy.svelte-jbi2uy{display:flex;gap:4px}.card-info.svelte-jbi2uy.svelte-jbi2uy{display:flex;gap:12px;font-size:11px;color:var(--text-secondary);margin-bottom:6px}.layer-bar.svelte-jbi2uy.svelte-jbi2uy{display:flex;height:8px;border-radius:4px;overflow:hidden}.layer-chip.svelte-jbi2uy.svelte-jbi2uy{min-width:4px;transition:flex 0.2s}.color-editor.svelte-jbi2uy.svelte-jbi2uy{margin-bottom:8px}.color-row.svelte-jbi2uy.svelte-jbi2uy{display:flex;align-items:center;gap:8px;margin-bottom:4px;font-size:12px}.import-result.svelte-jbi2uy.svelte-jbi2uy{margin:12px 0}.import-result.svelte-jbi2uy p.svelte-jbi2uy{margin-bottom:4px}.layers-table.svelte-jbi2uy.svelte-jbi2uy{max-height:300px;overflow-y:auto}.layers-table.svelte-jbi2uy input.svelte-jbi2uy{font-size:12px;padding:3px 6px}.wl-count.svelte-jbi2uy.svelte-jbi2uy{color:var(--accent, #4fc3f7)}",
  map: null
};
const BoreholeManager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentProject;
  let $selectedBoreholes, $$unsubscribe_selectedBoreholes;
  let $editingBorehole, $$unsubscribe_editingBorehole;
  let $waterLevelData, $$unsubscribe_waterLevelData;
  let $lithologyTypes, $$unsubscribe_lithologyTypes;
  let $boreholes, $$unsubscribe_boreholes;
  $$unsubscribe_currentProject = subscribe(currentProject, (value) => value);
  $$unsubscribe_selectedBoreholes = subscribe(selectedBoreholes, (value) => $selectedBoreholes = value);
  $$unsubscribe_editingBorehole = subscribe(editingBorehole, (value) => $editingBorehole = value);
  $$unsubscribe_waterLevelData = subscribe(waterLevelData, (value) => $waterLevelData = value);
  $$unsubscribe_lithologyTypes = subscribe(lithologyTypes, (value) => $lithologyTypes = value);
  $$unsubscribe_boreholes = subscribe(boreholes, (value) => $boreholes = value);
  let wlByBorehole = {};
  $$result.css.add(css$c);
  {
    {
      const map = {};
      $waterLevelData.forEach((r) => {
        if (!map[r.borehole_id])
          map[r.borehole_id] = [];
        map[r.borehole_id].push(r);
      });
      wlByBorehole = map;
    }
  }
  $$unsubscribe_currentProject();
  $$unsubscribe_selectedBoreholes();
  $$unsubscribe_editingBorehole();
  $$unsubscribe_waterLevelData();
  $$unsubscribe_lithologyTypes();
  $$unsubscribe_boreholes();
  return `<div class="panel-header"><h3 data-svelte-h="svelte-1xeck8m">钻孔数据管理</h3> <div style="display:flex;gap:6px;"><button class="btn-primary btn-sm" data-svelte-h="svelte-vemyzj">导入CSV</button> <button class="btn-secondary btn-sm">${escape("颜色")}</button></div></div> <div class="panel-body scrollable">${``} ${$boreholes.length === 0 ? `<div class="empty-state svelte-jbi2uy" data-svelte-h="svelte-b2zuvh"><p>暂无钻孔数据</p> <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">点击&quot;导入CSV&quot;添加钻孔数据</p></div>` : `<div class="borehole-list">${each($boreholes, (bh) => {
    return `<div class="${[
      "borehole-card svelte-jbi2uy",
      $selectedBoreholes.includes(bh.id) ? "selected" : ""
    ].join(" ").trim()}"><div class="card-header svelte-jbi2uy"><label class="checkbox-label"><input type="checkbox" ${$selectedBoreholes.includes(bh.id) ? "checked" : ""}> <strong>${escape(bh.hole_id)}</strong></label> <div class="card-actions svelte-jbi2uy"><button class="btn-secondary btn-sm" data-svelte-h="svelte-qjn1px">编辑</button> <button class="btn-danger btn-sm" data-svelte-h="svelte-3c3ohz">删除</button> </div></div> <div class="card-info svelte-jbi2uy"><span>坐标: ${escape(bh.longitude.toFixed(5))}, ${escape(bh.latitude.toFixed(5))}</span> <span>高程: ${escape(bh.elevation.toFixed(2))}m</span> <span>${escape(bh.layers.length)} 层</span> <span class="wl-count svelte-jbi2uy">${escape((wlByBorehole[bh.id] || []).length)} 条水位</span></div> <div class="layer-bar svelte-jbi2uy">${each(bh.layers, (layer) => {
      let lt = $lithologyTypes.find((l) => l.name === layer.lithology_name);
      return ` <div class="layer-chip svelte-jbi2uy" style="${"background:" + escape(lt?.color || "#888", true) + ";flex:" + escape(layer.bottom_depth - layer.top_depth, true)}" title="${escape(layer.lithology_name, true) + ": " + escape(layer.top_depth, true) + "-" + escape(layer.bottom_depth, true) + "m"}"></div>`;
    })}</div> </div>`;
  })}</div>`}</div> ${``} ${$editingBorehole ? `<div class="modal-overlay"><div class="modal" style="min-width:600px;"><h3>编辑钻孔 - ${escape($editingBorehole.hole_id)}</h3> <div class="form-row" style="margin-bottom:12px;"><div class="form-group"><label data-svelte-h="svelte-natzrr">孔号</label> <input type="text"${add_attribute("value", $editingBorehole.hole_id, 0)}></div> <div class="form-group"><label data-svelte-h="svelte-1xtfx5p">高程(m)</label> <input type="number" step="0.01"${add_attribute("value", $editingBorehole.elevation, 0)}></div></div> <div class="form-row" style="margin-bottom:12px;"><div class="form-group"><label data-svelte-h="svelte-ndgehb">经度</label> <input type="number" step="0.000001"${add_attribute("value", $editingBorehole.longitude, 0)}></div> <div class="form-group"><label data-svelte-h="svelte-h6t6m2">纬度</label> <input type="number" step="0.000001"${add_attribute("value", $editingBorehole.latitude, 0)}></div></div> <h4 style="margin:12px 0 8px;font-size:13px;" data-svelte-h="svelte-ltk5jk">分层信息</h4> <div class="layers-table svelte-jbi2uy"><table><thead data-svelte-h="svelte-qllypy"><tr><th>层号</th> <th>层顶(m)</th> <th>层底(m)</th> <th>岩性</th> <th>标贯N</th></tr></thead> <tbody>${each($editingBorehole.layers, (layer, i) => {
    return `<tr><td>${escape(layer.layer_no)}</td> <td><input type="number" step="0.1" style="width:70px;" class="svelte-jbi2uy"${add_attribute("value", layer.top_depth, 0)}></td> <td><input type="number" step="0.1" style="width:70px;" class="svelte-jbi2uy"${add_attribute("value", layer.bottom_depth, 0)}></td> <td><input type="text" style="width:100px;" class="svelte-jbi2uy"${add_attribute("value", layer.lithology_name, 0)}></td> <td><input type="number" step="0.1" style="width:60px;" class="svelte-jbi2uy"${add_attribute("value", layer.spt_n, 0)}></td> </tr>`;
  })}</tbody></table></div> <div class="modal-actions"><button class="btn-secondary" data-svelte-h="svelte-1xgwxe6">取消</button> <button class="btn-primary" data-svelte-h="svelte-1qz0hu8">保存</button></div></div></div>` : ``}`;
});
const css$b = {
  code: ".selected-bhs.svelte-1h3xo7h{display:flex;flex-wrap:wrap;gap:4px;min-height:24px}.profile-item.svelte-1h3xo7h{display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:6px;margin-bottom:4px;cursor:pointer;font-size:12px;transition:border-color 0.2s}.profile-item.svelte-1h3xo7h:hover{border-color:var(--accent)}.profile-item.active.svelte-1h3xo7h{border-color:var(--accent);background:var(--bg-hover)}.profile-preview.svelte-1h3xo7h{background:#fff;border-radius:6px;padding:4px;overflow:hidden}.legend-box.svelte-1h3xo7h{background:var(--bg-tertiary);border-radius:6px;padding:4px 8px;margin-top:6px}.legend-list.svelte-1h3xo7h{display:flex;flex-wrap:wrap;gap:6px 12px}.legend-item.svelte-1h3xo7h{display:flex;align-items:center;gap:4px}.ann-item.svelte-1h3xo7h{display:flex;justify-content:space-between;align-items:center;padding:4px 8px;background:var(--bg-tertiary);border-radius:4px;margin-bottom:4px;font-size:12px}.annotation-section.svelte-1h3xo7h{margin-top:8px}.comparison-section.svelte-1h3xo7h{background:var(--bg-tertiary);border-radius:6px;padding:8px 10px}",
  map: null
};
const ProfileEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $comparisonMode, $$unsubscribe_comparisonMode;
  let $comparisonRightProfileId, $$unsubscribe_comparisonRightProfileId;
  let $comparisonLeftProfileId, $$unsubscribe_comparisonLeftProfileId;
  let $comparisonRightData, $$unsubscribe_comparisonRightData;
  let $comparisonLeftData, $$unsubscribe_comparisonLeftData;
  let $$unsubscribe_activeProfileData;
  let $profiles, $$unsubscribe_profiles;
  let $selectedBoreholes, $$unsubscribe_selectedBoreholes;
  let $$unsubscribe_currentProject;
  let $$unsubscribe_lithologyTypes;
  let $boreholes, $$unsubscribe_boreholes;
  $$unsubscribe_comparisonMode = subscribe(comparisonMode, (value) => $comparisonMode = value);
  $$unsubscribe_comparisonRightProfileId = subscribe(comparisonRightProfileId, (value) => $comparisonRightProfileId = value);
  $$unsubscribe_comparisonLeftProfileId = subscribe(comparisonLeftProfileId, (value) => $comparisonLeftProfileId = value);
  $$unsubscribe_comparisonRightData = subscribe(comparisonRightData, (value) => $comparisonRightData = value);
  $$unsubscribe_comparisonLeftData = subscribe(comparisonLeftData, (value) => $comparisonLeftData = value);
  $$unsubscribe_activeProfileData = subscribe(activeProfileData, (value) => value);
  $$unsubscribe_profiles = subscribe(profiles, (value) => $profiles = value);
  $$unsubscribe_selectedBoreholes = subscribe(selectedBoreholes, (value) => $selectedBoreholes = value);
  $$unsubscribe_currentProject = subscribe(currentProject, (value) => value);
  $$unsubscribe_lithologyTypes = subscribe(lithologyTypes, (value) => value);
  $$unsubscribe_boreholes = subscribe(boreholes, (value) => $boreholes = value);
  let profileName = "";
  let activeProfileId = null;
  async function loadComparisonProfile(side) {
    const profileId = side === "left" ? $comparisonLeftProfileId : $comparisonRightProfileId;
    if (!profileId)
      return;
    try {
      const data = await api.get(`/projects/profiles/${profileId}/data`);
      if (side === "left") {
        set_store_value(comparisonLeftData, $comparisonLeftData = data, $comparisonLeftData);
      } else {
        set_store_value(comparisonRightData, $comparisonRightData = data, $comparisonRightData);
      }
    } catch (e) {
      addToast(`加载对比剖面失败: ${e.message}`, "error");
    }
  }
  $$result.css.add(css$b);
  {
    if ($comparisonLeftProfileId && $comparisonMode) {
      loadComparisonProfile("left");
    }
  }
  {
    if ($comparisonRightProfileId && $comparisonMode) {
      loadComparisonProfile("right");
    }
  }
  $$unsubscribe_comparisonMode();
  $$unsubscribe_comparisonRightProfileId();
  $$unsubscribe_comparisonLeftProfileId();
  $$unsubscribe_comparisonRightData();
  $$unsubscribe_comparisonLeftData();
  $$unsubscribe_activeProfileData();
  $$unsubscribe_profiles();
  $$unsubscribe_selectedBoreholes();
  $$unsubscribe_currentProject();
  $$unsubscribe_lithologyTypes();
  $$unsubscribe_boreholes();
  return `<div class="panel-header"><h3 data-svelte-h="svelte-1tw5t1i">剖面分析</h3> <div style="display:flex;gap:6px;"><button class="btn-secondary btn-sm" ${"disabled"}>PNG</button> <button class="btn-secondary btn-sm" ${"disabled"}>SVG</button></div></div> <div class="panel-body scrollable"><div class="form-group"><label data-svelte-h="svelte-aae5qr">剖面名称</label> <input type="text" placeholder="输入剖面名称"${add_attribute("value", profileName, 0)}></div> <div class="form-group"><label data-svelte-h="svelte-w2ab1e">插值方式</label> <select><option value="linear" data-svelte-h="svelte-1acgaat">线性插值</option><option value="cubic_spline" data-svelte-h="svelte-b97obq">三次样条</option><option value="kriging" data-svelte-h="svelte-m7cjkk">Kriging地统计插值</option></select></div> <div class="form-group"><label>已选钻孔 (${escape($selectedBoreholes.length)})</label> <div class="selected-bhs svelte-1h3xo7h">${each($boreholes.filter((b) => $selectedBoreholes.includes(b.id)), (bh) => {
    return `<span class="badge badge-info">${escape(bh.hole_id)}</span>`;
  })} ${$selectedBoreholes.length < 2 ? `<span style="font-size:11px;color:var(--text-muted);" data-svelte-h="svelte-1k8zcgx">请在钻孔管理中选择2个以上钻孔</span>` : ``}</div></div> <button class="btn-primary" style="width:100%;margin-bottom:12px;" data-svelte-h="svelte-18tzs37">生成剖面</button> ${$profiles.length > 0 ? `<div class="profile-list"><h4 style="font-size:13px;margin-bottom:8px;" data-svelte-h="svelte-dgmf3y">剖面列表</h4> ${each($profiles, (p) => {
    return `<div class="${["profile-item svelte-1h3xo7h", activeProfileId === p.id ? "active" : ""].join(" ").trim()}"><span>${escape(p.name)}</span> <span class="badge badge-info">${escape(p.interpolation_method)}</span> </div>`;
  })}</div>` : ``} <hr style="border-color:var(--border);margin:12px 0;"> <div class="comparison-section svelte-1h3xo7h"><label class="checkbox-label"><input type="checkbox" ${$comparisonMode ? "checked" : ""}>
            剖面对比模式</label> ${$comparisonMode ? `<div class="form-group" style="margin-top:8px;"><label data-svelte-h="svelte-93im8q">左剖面</label> <select><option${add_attribute("value", null, 0)} data-svelte-h="svelte-l2e5hj">选择剖面</option>${each($profiles, (p) => {
    return `<option${add_attribute("value", p.id, 0)}>${escape(p.name)}</option>`;
  })}</select></div> <div class="form-group"><label data-svelte-h="svelte-1soi0kp">右剖面</label> <select><option${add_attribute("value", null, 0)} data-svelte-h="svelte-l2e5hj">选择剖面</option>${each($profiles, (p) => {
    return `<option${add_attribute("value", p.id, 0)}>${escape(p.name)}</option>`;
  })}</select></div>` : ``}</div> ${``} </div>`;
});
const css$a = {
  code: ".profile-canvas-container.svelte-1uozxjf{width:100%;height:100%;background:#fff;position:relative}canvas.svelte-1uozxjf{display:block;width:100%;height:100%}",
  map: null
};
const ProfileCanvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_comparisonRightData;
  let $$unsubscribe_comparisonLeftData;
  let $$unsubscribe_comparisonMode;
  let $$unsubscribe_activeProfileData;
  let $$unsubscribe_boreholeWarnings;
  let $$unsubscribe_lithologyTypes;
  $$unsubscribe_comparisonRightData = subscribe(comparisonRightData, (value) => value);
  $$unsubscribe_comparisonLeftData = subscribe(comparisonLeftData, (value) => value);
  $$unsubscribe_comparisonMode = subscribe(comparisonMode, (value) => value);
  $$unsubscribe_activeProfileData = subscribe(activeProfileData, (value) => value);
  $$unsubscribe_boreholeWarnings = subscribe(boreholeWarnings, (value) => value);
  $$unsubscribe_lithologyTypes = subscribe(lithologyTypes, (value) => value);
  let canvasEl = null;
  $$result.css.add(css$a);
  $$unsubscribe_comparisonRightData();
  $$unsubscribe_comparisonLeftData();
  $$unsubscribe_comparisonMode();
  $$unsubscribe_activeProfileData();
  $$unsubscribe_boreholeWarnings();
  $$unsubscribe_lithologyTypes();
  return `<div class="profile-canvas-container svelte-1uozxjf"><canvas id="mainProfileCanvas" class="svelte-1uozxjf"${add_attribute("this", canvasEl, 0)}></canvas> </div>`;
});
const css$9 = {
  code: ".viewer-container.svelte-1ux5xdu.svelte-1ux5xdu{width:100%;height:100%;position:relative}.viewer-empty.svelte-1ux5xdu.svelte-1ux5xdu{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--text-muted);pointer-events:none;z-index:1}.empty-icon.svelte-1ux5xdu.svelte-1ux5xdu{font-size:48px;margin-bottom:16px}.viewer-empty.svelte-1ux5xdu h3.svelte-1ux5xdu{font-size:18px;color:var(--text-secondary);margin-bottom:8px}.viewer-empty.svelte-1ux5xdu p.svelte-1ux5xdu{font-size:13px}.volume-card.svelte-1ux5xdu.svelte-1ux5xdu{position:absolute;bottom:16px;right:16px;background:rgba(26, 29, 35, 0.92);border:1px solid var(--border);border-radius:10px;min-width:240px;max-width:320px;z-index:10;backdrop-filter:blur(8px);box-shadow:0 4px 16px rgba(0,0,0,0.3)}.volume-card.collapsed.svelte-1ux5xdu.svelte-1ux5xdu{min-width:auto}.volume-card-header.svelte-1ux5xdu.svelte-1ux5xdu{display:flex;align-items:center;justify-content:space-between;padding:8px 14px;cursor:pointer;border-bottom:1px solid var(--border)}.volume-card-title.svelte-1ux5xdu.svelte-1ux5xdu{font-size:13px;font-weight:600;color:var(--text-primary)}.volume-card-toggle.svelte-1ux5xdu.svelte-1ux5xdu{font-size:12px;color:var(--text-muted)}.volume-card-body.svelte-1ux5xdu.svelte-1ux5xdu{padding:8px 12px;max-height:260px;overflow-y:auto}.volume-card-row.svelte-1ux5xdu.svelte-1ux5xdu{display:flex;align-items:center;gap:8px;padding:4px 0;font-size:12px}.volume-color-swatch.svelte-1ux5xdu.svelte-1ux5xdu{width:12px;height:12px;border-radius:2px;flex-shrink:0;border:1px solid rgba(255,255,255,0.2)}.volume-name.svelte-1ux5xdu.svelte-1ux5xdu{flex:1;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.volume-value.svelte-1ux5xdu.svelte-1ux5xdu{color:var(--text-primary);font-weight:600;white-space:nowrap}.volume-percent.svelte-1ux5xdu.svelte-1ux5xdu{color:var(--text-muted);font-size:11px;min-width:44px;text-align:right}.volume-card-total.svelte-1ux5xdu.svelte-1ux5xdu{margin-top:6px;padding-top:6px;border-top:1px solid var(--border);font-size:12px;font-weight:600;color:var(--accent);text-align:center}",
  map: null
};
const Viewer3D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $volumeCardData, $$unsubscribe_volumeCardData;
  let $activeModelResult, $$unsubscribe_activeModelResult;
  let $boreholes, $$unsubscribe_boreholes;
  let $$unsubscribe_waterLevelIntersectionLine;
  let $$unsubscribe_waterLevelContourVisible;
  let $$unsubscribe_waterLevelContourOpacity;
  let $$unsubscribe_waterLevelContourResult;
  let $modelingProgress, $$unsubscribe_modelingProgress = noop, $$subscribe_modelingProgress = () => ($$unsubscribe_modelingProgress(), $$unsubscribe_modelingProgress = subscribe(modelingProgress$1, ($$value) => $modelingProgress = $$value), modelingProgress$1);
  let $$unsubscribe_surfaceOverlay;
  let $$unsubscribe_attributeRendering;
  let $attributeField, $$unsubscribe_attributeField;
  let $$unsubscribe_clipPlane;
  let $$unsubscribe_layerOpacity;
  let $$unsubscribe_layerVisibility;
  let $lithologyTypes, $$unsubscribe_lithologyTypes;
  let $$unsubscribe_waterLevelWarnings;
  let $volumeCardCollapsed, $$unsubscribe_volumeCardCollapsed;
  $$unsubscribe_volumeCardData = subscribe(volumeCardData, (value) => $volumeCardData = value);
  $$unsubscribe_activeModelResult = subscribe(activeModelResult, (value) => $activeModelResult = value);
  $$unsubscribe_boreholes = subscribe(boreholes, (value) => $boreholes = value);
  $$unsubscribe_waterLevelIntersectionLine = subscribe(waterLevelIntersectionLine, (value) => value);
  $$unsubscribe_waterLevelContourVisible = subscribe(waterLevelContourVisible, (value) => value);
  $$unsubscribe_waterLevelContourOpacity = subscribe(waterLevelContourOpacity, (value) => value);
  $$unsubscribe_waterLevelContourResult = subscribe(waterLevelContourResult, (value) => value);
  $$unsubscribe_surfaceOverlay = subscribe(surfaceOverlay, (value) => value);
  $$unsubscribe_attributeRendering = subscribe(attributeRendering, (value) => value);
  $$unsubscribe_attributeField = subscribe(attributeField, (value) => $attributeField = value);
  $$unsubscribe_clipPlane = subscribe(clipPlane, (value) => value);
  $$unsubscribe_layerOpacity = subscribe(layerOpacity, (value) => value);
  $$unsubscribe_layerVisibility = subscribe(layerVisibility, (value) => value);
  $$unsubscribe_lithologyTypes = subscribe(lithologyTypes, (value) => $lithologyTypes = value);
  $$unsubscribe_waterLevelWarnings = subscribe(waterLevelWarnings, (value) => value);
  $$unsubscribe_volumeCardCollapsed = subscribe(volumeCardCollapsed, (value) => $volumeCardCollapsed = value);
  let container;
  async function loadVolumeCard() {
    if (!$activeModelResult || !$modelingProgress?.runId)
      return;
    try {
      const data = await api.post(`/projects/modeling/runs/${$modelingProgress?.runId}/volumes-all`);
      set_store_value(volumeCardData, $volumeCardData = data, $volumeCardData);
    } catch (e) {
      console.warn("加载体积卡片失败:", e);
    }
  }
  let modelingProgress$1;
  modelingProgress.subscribe((v) => {
    $$subscribe_modelingProgress(modelingProgress$1 = v);
  });
  $$result.css.add(css$9);
  {
    if ($activeModelResult && !$volumeCardData) {
      loadVolumeCard();
    }
  }
  $$unsubscribe_volumeCardData();
  $$unsubscribe_activeModelResult();
  $$unsubscribe_boreholes();
  $$unsubscribe_waterLevelIntersectionLine();
  $$unsubscribe_waterLevelContourVisible();
  $$unsubscribe_waterLevelContourOpacity();
  $$unsubscribe_waterLevelContourResult();
  $$unsubscribe_modelingProgress();
  $$unsubscribe_surfaceOverlay();
  $$unsubscribe_attributeRendering();
  $$unsubscribe_attributeField();
  $$unsubscribe_clipPlane();
  $$unsubscribe_layerOpacity();
  $$unsubscribe_layerVisibility();
  $$unsubscribe_lithologyTypes();
  $$unsubscribe_waterLevelWarnings();
  $$unsubscribe_volumeCardCollapsed();
  return `<div class="viewer-container svelte-1ux5xdu"${add_attribute("this", container, 0)}>${!$activeModelResult && $boreholes.length === 0 && !$attributeField ? `<div class="viewer-empty svelte-1ux5xdu" data-svelte-h="svelte-1u73fdm"><div class="empty-icon svelte-1ux5xdu">⛏</div> <h3 class="svelte-1ux5xdu">GeoModeler 三维地质可视化</h3> <p class="svelte-1ux5xdu">导入钻孔数据后开始三维建模与可视化分析</p></div>` : ``} ${$volumeCardData && $volumeCardData.length > 0 ? `<div class="${["volume-card svelte-1ux5xdu", $volumeCardCollapsed ? "collapsed" : ""].join(" ").trim()}"><div class="volume-card-header svelte-1ux5xdu"><span class="volume-card-title svelte-1ux5xdu" data-svelte-h="svelte-14576x2">体积估算</span> <span class="volume-card-toggle svelte-1ux5xdu">${escape($volumeCardCollapsed ? "▸" : "▾")}</span></div> ${!$volumeCardCollapsed ? `<div class="volume-card-body svelte-1ux5xdu">${each($volumeCardData, (item) => {
    return `<div class="volume-card-row svelte-1ux5xdu"><span class="volume-color-swatch svelte-1ux5xdu" style="${"background:" + escape($lithologyTypes?.find((l) => l.name === item.lithology_name)?.color || "#888", true)}"></span> <span class="volume-name svelte-1ux5xdu">${escape(item.lithology_name)}</span> <span class="volume-value svelte-1ux5xdu">${escape(item.volume.toFixed(2))} m³</span> <span class="volume-percent svelte-1ux5xdu">${escape(item.percentage.toFixed(2))}%</span> </div>`;
  })} ${$volumeCardData.length > 0 ? `<div class="volume-card-total svelte-1ux5xdu">总体积: ${escape($volumeCardData[0].total_volume.toFixed(2))} m³</div>` : ``}</div>` : ``}</div>` : ``} </div>`;
});
const css$8 = {
  code: ".progress-section.svelte-z3j894.svelte-z3j894{margin-bottom:16px}.progress-section.svelte-z3j894 p.svelte-z3j894{font-size:13px;margin-bottom:6px;text-align:center}.layer-control.svelte-z3j894.svelte-z3j894{margin-bottom:8px;padding:6px 8px;background:var(--bg-tertiary);border-radius:6px}.opacity-control.svelte-z3j894.svelte-z3j894{display:flex;align-items:center;gap:8px;margin-top:4px;padding-left:24px}.opacity-control.svelte-z3j894 input.svelte-z3j894{flex:1}.volume-result.svelte-z3j894.svelte-z3j894{margin-top:8px;padding:8px 12px;background:var(--bg-tertiary);border-radius:6px;text-align:center}.volume-value.svelte-z3j894.svelte-z3j894{font-size:20px;font-weight:700;color:var(--accent)}.run-item.svelte-z3j894.svelte-z3j894{display:flex;align-items:center;gap:8px;padding:6px 8px;background:var(--bg-tertiary);border-radius:6px;margin-bottom:4px;cursor:pointer;font-size:11px}.run-item.svelte-z3j894.svelte-z3j894:hover{background:var(--bg-hover)}.variogram-preview.svelte-z3j894.svelte-z3j894{background:#1a1d23;border-radius:6px;padding:4px;overflow:hidden}.variogram-preview.svelte-z3j894 canvas.svelte-z3j894{width:100%;height:auto}",
  map: null
};
const ModelingPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $boreholes, $$unsubscribe_boreholes;
  let $$unsubscribe_currentProject;
  let $modelRuns, $$unsubscribe_modelRuns;
  let $volumeResult, $$unsubscribe_volumeResult;
  let $modelingProgress, $$unsubscribe_modelingProgress;
  let $layerOpacity, $$unsubscribe_layerOpacity;
  let $layerVisibility, $$unsubscribe_layerVisibility;
  let $activeModelResult, $$unsubscribe_activeModelResult;
  let $variogramPreview, $$unsubscribe_variogramPreview;
  let $lithologyTypes, $$unsubscribe_lithologyTypes;
  let $clipPlane, $$unsubscribe_clipPlane;
  $$unsubscribe_boreholes = subscribe(boreholes, (value) => $boreholes = value);
  $$unsubscribe_currentProject = subscribe(currentProject, (value) => value);
  $$unsubscribe_modelRuns = subscribe(modelRuns, (value) => $modelRuns = value);
  $$unsubscribe_volumeResult = subscribe(volumeResult, (value) => $volumeResult = value);
  $$unsubscribe_modelingProgress = subscribe(modelingProgress, (value) => $modelingProgress = value);
  $$unsubscribe_layerOpacity = subscribe(layerOpacity, (value) => $layerOpacity = value);
  $$unsubscribe_layerVisibility = subscribe(layerVisibility, (value) => $layerVisibility = value);
  $$unsubscribe_activeModelResult = subscribe(activeModelResult, (value) => $activeModelResult = value);
  $$unsubscribe_variogramPreview = subscribe(variogramPreview, (value) => $variogramPreview = value);
  $$unsubscribe_lithologyTypes = subscribe(lithologyTypes, (value) => $lithologyTypes = value);
  $$unsubscribe_clipPlane = subscribe(clipPlane, (value) => $clipPlane = value);
  let variogramModel = "spherical";
  let rangeParam = "";
  let sillParam = "";
  let nuggetParam = "";
  let anisoAngle = 0;
  let anisoRatio = 1;
  let gridNx = 50;
  let gridNy = 50;
  let gridNz = 25;
  let autoFit = true;
  let variogramCanvas = null;
  async function fetchVariogramPreview() {
    if (!$boreholes || $boreholes.length < 3)
      return;
    const coords = $boreholes.map((b) => [b.longitude, b.latitude]);
    const values = $boreholes.map((b) => b.elevation);
    try {
      const data = await api.post("/projects/modeling/variogram-preview", {
        model_type: variogramModel,
        range_param: autoFit ? null : rangeParam ? parseFloat(rangeParam) : null,
        sill_param: autoFit ? null : sillParam ? parseFloat(sillParam) : null,
        nugget_param: autoFit ? null : nuggetParam ? parseFloat(nuggetParam) : null,
        coords,
        values
      });
      set_store_value(variogramPreview, $variogramPreview = data, $variogramPreview);
    } catch (e) {
      console.warn("变异函数预览失败:", e);
    }
  }
  $$result.css.add(css$8);
  {
    {
      if ($boreholes?.length >= 3) {
        fetchVariogramPreview();
      }
    }
  }
  $$unsubscribe_boreholes();
  $$unsubscribe_currentProject();
  $$unsubscribe_modelRuns();
  $$unsubscribe_volumeResult();
  $$unsubscribe_modelingProgress();
  $$unsubscribe_layerOpacity();
  $$unsubscribe_layerVisibility();
  $$unsubscribe_activeModelResult();
  $$unsubscribe_variogramPreview();
  $$unsubscribe_lithologyTypes();
  $$unsubscribe_clipPlane();
  return `<div class="panel-header"><h3 data-svelte-h="svelte-1tzs814">三维建模</h3> <button class="btn-secondary btn-sm" data-svelte-h="svelte-z4d5z9">刷新</button></div> <div class="panel-body scrollable">${$modelingProgress.status === "running" ? `<div class="progress-section svelte-z3j894"><p class="svelte-z3j894">建模中... ${escape($modelingProgress.progress.toFixed(0))}%</p> <div class="progress-bar"><div class="progress-bar-fill" style="${"width:" + escape($modelingProgress.progress, true) + "%"}"></div></div></div>` : `<div class="model-params"><div class="form-group"><label data-svelte-h="svelte-1jgf9ft">变异函数模型</label> <select><option value="spherical" data-svelte-h="svelte-17ym7v6">球状模型</option><option value="exponential" data-svelte-h="svelte-bzk8zo">指数模型</option><option value="gaussian" data-svelte-h="svelte-1iqrdsw">高斯模型</option></select></div> <label class="checkbox-label"><input type="checkbox"${add_attribute("checked", autoFit, 1)}>
                自动拟合参数</label> ${``} <h4 style="font-size:13px;margin:12px 0 8px;" data-svelte-h="svelte-3v99de">半变异函数拟合预览</h4> <div class="variogram-preview svelte-z3j894"><canvas id="variogramCanvas" width="340" height="200" class="svelte-z3j894"${add_attribute("this", variogramCanvas, 0)}></canvas></div> <button class="btn-secondary btn-sm" style="width:100%;margin-top:4px;" data-svelte-h="svelte-1ik1azm">刷新预览</button> <h4 style="font-size:13px;margin:12px 0 8px;" data-svelte-h="svelte-1bmbghc">各向异性</h4> <div class="form-row"><div class="form-group"><label data-svelte-h="svelte-121beyc">主轴方向(°)</label> <input type="number" step="1"${add_attribute("value", anisoAngle, 0)}></div> <div class="form-group"><label data-svelte-h="svelte-yzj6ss">各向异性比</label> <input type="number" step="0.1" min="1"${add_attribute("value", anisoRatio, 0)}></div></div> <h4 style="font-size:13px;margin:12px 0 8px;" data-svelte-h="svelte-z4z6jw">网格分辨率</h4> <div class="form-row"><div class="form-group"><label data-svelte-h="svelte-kuum7m">NX</label> <input type="number" min="5" max="100"${add_attribute("value", gridNx, 0)}></div> <div class="form-group"><label data-svelte-h="svelte-1kjsuy3">NY</label> <input type="number" min="5" max="100"${add_attribute("value", gridNy, 0)}></div> <div class="form-group"><label data-svelte-h="svelte-1vblzhc">NZ</label> <input type="number" min="5" max="50"${add_attribute("value", gridNz, 0)}></div></div> <button class="btn-primary" style="width:100%;margin-top:12px;" data-svelte-h="svelte-1rcbday">开始建模</button></div>`} ${$activeModelResult ? `<hr style="border-color:var(--border);margin:12px 0;"> <h4 style="font-size:13px;margin-bottom:8px;" data-svelte-h="svelte-10xewq4">图层控制</h4> ${each($activeModelResult.lithologies || [], (lithoName) => {
    return `<div class="layer-control svelte-z3j894"><label class="checkbox-label"><input type="checkbox" ${$layerVisibility[lithoName] !== false ? "checked" : ""}> <span class="color-swatch" style="${"background:" + escape($lithologyTypes?.find((l) => l.name === lithoName)?.color || "#888", true)}"></span> ${escape(lithoName)}</label> <div class="opacity-control svelte-z3j894"><span style="font-size:10px;color:var(--text-muted);" data-svelte-h="svelte-11ptxvf">透明度</span> <input type="range"${add_attribute("value", $layerOpacity[lithoName] ?? 70, 0)} min="0" max="100" class="svelte-z3j894"></div> </div>`;
  })} <hr style="border-color:var(--border);margin:12px 0;"> <h4 style="font-size:13px;margin-bottom:8px;" data-svelte-h="svelte-vflg5w">切面</h4> <div class="form-group"><label class="checkbox-label"><input type="checkbox" ${$clipPlane.enabled ? "checked" : ""}>
                启用切面</label></div> ${$clipPlane.enabled ? `<div class="form-group"><label data-svelte-h="svelte-1ya7iue">切面位置</label> <input type="range"${add_attribute("value", $clipPlane.position[0], 0)} min="-100" max="100"></div>` : ``} <hr style="border-color:var(--border);margin:12px 0;"> <h4 style="font-size:13px;margin-bottom:8px;" data-svelte-h="svelte-5dpzi">体积估算</h4> <div class="form-group"><select><option value="" data-svelte-h="svelte-e12hhe">选择地层</option>${each($activeModelResult.lithologies || [], (name) => {
    return `<option${add_attribute("value", name, 0)}>${escape(name)}</option>`;
  })}</select></div> <button class="btn-primary btn-sm" ${"disabled"} style="width:100%;">计算体积</button> ${$volumeResult ? `<div class="volume-result svelte-z3j894"><p>${escape($volumeResult.lithology_name)}</p> <p class="volume-value svelte-z3j894">${escape($volumeResult.volume.toFixed(1))} m³</p></div>` : ``} ${$modelRuns.length > 0 ? `<hr style="border-color:var(--border);margin:12px 0;"> <h4 style="font-size:13px;margin-bottom:8px;" data-svelte-h="svelte-1xvbgi4">历史建模</h4> ${each($modelRuns.slice(0, 5), (run) => {
    return `<div class="run-item svelte-z3j894"><span class="${"badge badge-" + escape(
      run.status === "completed" ? "success" : run.status === "failed" ? "danger" : "warning",
      true
    )}">${escape(run.status)}</span> <span style="font-size:11px;">${escape(run.variogram_model)} ${escape(run.grid_nx)}x${escape(run.grid_ny)}x${escape(run.grid_nz)}</span> </div>`;
  })}` : ``}` : ``} </div>`;
});
const css$7 = {
  code: ".stats-grid.svelte-8lfmmm{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px}.stat-item.svelte-8lfmmm{background:var(--bg-tertiary);padding:8px;border-radius:6px;text-align:center}.stat-label.svelte-8lfmmm{font-size:10px;color:var(--text-muted);display:block}.stat-value.svelte-8lfmmm{font-size:14px;font-weight:600;color:var(--accent)}.color-legend.svelte-8lfmmm{margin-top:8px}.legend-bar.svelte-8lfmmm{height:12px;border-radius:6px}.legend-labels.svelte-8lfmmm{display:flex;justify-content:space-between;font-size:10px;color:var(--text-muted);margin-top:2px}",
  map: null
};
const AttributePanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $attributeField, $$unsubscribe_attributeField;
  let $$unsubscribe_currentProject;
  let $attributeRendering, $$unsubscribe_attributeRendering;
  $$unsubscribe_attributeField = subscribe(attributeField, (value) => $attributeField = value);
  $$unsubscribe_currentProject = subscribe(currentProject, (value) => value);
  $$unsubscribe_attributeRendering = subscribe(attributeRendering, (value) => $attributeRendering = value);
  let selectedAttribute = "spt_n";
  let gridNx = 50;
  let gridNy = 50;
  let gridNz = 25;
  let isosurfaceValue = 0;
  let colorMin = 0;
  let colorMax = 100;
  let renderingMode = "voxel";
  const attributeLabels = {
    spt_n: "标贯N值",
    water_content: "含水量",
    compression_modulus: "压缩模量"
  };
  $$result.css.add(css$7);
  {
    {
      set_store_value(
        attributeRendering,
        $attributeRendering = {
          ...$attributeRendering,
          mode: renderingMode,
          isosurfaceValue,
          colorMin,
          colorMax
        },
        $attributeRendering
      );
    }
  }
  $$unsubscribe_attributeField();
  $$unsubscribe_currentProject();
  $$unsubscribe_attributeRendering();
  return `<div class="panel-header" data-svelte-h="svelte-s1qbq0"><h3>属性场建模</h3></div> <div class="panel-body scrollable"><div class="form-group"><label data-svelte-h="svelte-vxe5jw">参数类型</label> <select><option value="spt_n" data-svelte-h="svelte-1ekkfg">标贯N值</option><option value="water_content" data-svelte-h="svelte-vhtqdz">含水量</option><option value="compression_modulus" data-svelte-h="svelte-1m1gv94">压缩模量</option></select></div> <div class="form-group"><label data-svelte-h="svelte-1jgf9ft">变异函数模型</label> <select><option value="spherical" data-svelte-h="svelte-17ym7v6">球状模型</option><option value="exponential" data-svelte-h="svelte-bzk8zo">指数模型</option><option value="gaussian" data-svelte-h="svelte-1iqrdsw">高斯模型</option></select></div> <div class="form-row"><div class="form-group"><label data-svelte-h="svelte-kuum7m">NX</label> <input type="number" min="5" max="100"${add_attribute("value", gridNx, 0)}></div> <div class="form-group"><label data-svelte-h="svelte-1kjsuy3">NY</label> <input type="number" min="5" max="100"${add_attribute("value", gridNy, 0)}></div> <div class="form-group"><label data-svelte-h="svelte-1vblzhc">NZ</label> <input type="number" min="5" max="50"${add_attribute("value", gridNz, 0)}></div></div> <button class="btn-primary" ${""} style="width:100%;">${escape("开始插值")}</button> ${$attributeField ? `<hr style="border-color:var(--border);margin:12px 0;"> <h4 style="font-size:13px;margin-bottom:8px;">属性: ${escape(attributeLabels[selectedAttribute])}</h4> <div class="stats-grid svelte-8lfmmm"><div class="stat-item svelte-8lfmmm"><span class="stat-label svelte-8lfmmm" data-svelte-h="svelte-9zqffl">最小值</span> <span class="stat-value svelte-8lfmmm">${escape($attributeField.value_min?.toFixed(2))}</span></div> <div class="stat-item svelte-8lfmmm"><span class="stat-label svelte-8lfmmm" data-svelte-h="svelte-pto1ax">最大值</span> <span class="stat-value svelte-8lfmmm">${escape($attributeField.value_max?.toFixed(2))}</span></div> <div class="stat-item svelte-8lfmmm"><span class="stat-label svelte-8lfmmm" data-svelte-h="svelte-os332j">均值</span> <span class="stat-value svelte-8lfmmm">${escape($attributeField.value_mean?.toFixed(2))}</span></div></div> <h4 style="font-size:13px;margin:12px 0 8px;" data-svelte-h="svelte-1ld9l9j">渲染设置</h4> <div class="form-group"><label data-svelte-h="svelte-cq5b4l">渲染模式</label> <select><option value="voxel" data-svelte-h="svelte-127lpa0">彩色体素</option><option value="isosurface" data-svelte-h="svelte-q3a2m9">等值面</option></select></div> ${``} <div class="form-group"><label data-svelte-h="svelte-1lqds2v">颜色映射范围</label> <div class="form-row"><input type="number" step="0.1"${add_attribute("value", colorMin, 0)}> <input type="number" step="0.1"${add_attribute("value", colorMax, 0)}></div></div> <div class="color-legend svelte-8lfmmm"><div class="legend-bar svelte-8lfmmm" style="background: linear-gradient(to right, #0000ff, #00ff00, #ffff00, #ff0000);"></div> <div class="legend-labels svelte-8lfmmm"><span>${escape(colorMin.toFixed(1))}</span> <span>${escape(((colorMin + colorMax) / 2).toFixed(1))}</span> <span>${escape(colorMax.toFixed(1))}</span></div></div>` : ``} </div>`;
});
const css$6 = {
  code: ".export-section.svelte-xy1nc2.svelte-xy1nc2{margin-bottom:4px}.export-buttons.svelte-xy1nc2.svelte-xy1nc2{display:flex;gap:8px;flex-wrap:wrap}.export-buttons.svelte-xy1nc2 button.svelte-xy1nc2{flex:1;min-width:120px}",
  map: null
};
const ExportPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentProject, $$unsubscribe_currentProject;
  let $modelRuns, $$unsubscribe_modelRuns;
  let $profiles, $$unsubscribe_profiles;
  $$unsubscribe_currentProject = subscribe(currentProject, (value) => $currentProject = value);
  $$unsubscribe_modelRuns = subscribe(modelRuns, (value) => $modelRuns = value);
  $$unsubscribe_profiles = subscribe(profiles, (value) => $profiles = value);
  $$result.css.add(css$6);
  $$unsubscribe_currentProject();
  $$unsubscribe_modelRuns();
  $$unsubscribe_profiles();
  return `<div class="panel-header" data-svelte-h="svelte-16wx9di"><h3>成果导出</h3></div> <div class="panel-body scrollable"><div class="export-section svelte-xy1nc2"><h4 style="font-size:13px;margin-bottom:8px;" data-svelte-h="svelte-f1tw8s">三维模型</h4> <div class="form-group"><label data-svelte-h="svelte-rq7xu0">选择建模结果</label> <select><option value="" data-svelte-h="svelte-ma6l8e">选择建模结果</option>${each($modelRuns.filter((r) => r.status === "completed"), (run) => {
    return `<option${add_attribute("value", run.id, 0)}>${escape(run.variogram_model)} ${escape(run.grid_nx)}x${escape(run.grid_ny)}x${escape(run.grid_nz)} (${escape(run.status)})</option>`;
  })}</select></div> <div class="export-buttons svelte-xy1nc2"><button class="btn-primary svelte-xy1nc2" ${"disabled"}>导出 glTF 模型</button></div> <p style="font-size:11px;color:var(--text-muted);margin-top:4px;" data-svelte-h="svelte-elxrxh">glTF格式可在Blender、ParaView等软件中打开</p></div> <hr style="border-color:var(--border);margin:16px 0;"> <div class="export-section svelte-xy1nc2"><h4 style="font-size:13px;margin-bottom:8px;" data-svelte-h="svelte-l0uqjv">剖面图</h4> <div class="form-group"><label data-svelte-h="svelte-1uj1nrm">选择剖面</label> <select><option value="" data-svelte-h="svelte-ij5m9g">选择剖面</option>${each($profiles, (p) => {
    return `<option${add_attribute("value", p.id, 0)}>${escape(p.name)}</option>`;
  })}</select></div> <div class="export-buttons svelte-xy1nc2"><button class="btn-secondary svelte-xy1nc2" ${"disabled"}>导出 PNG</button> <button class="btn-secondary svelte-xy1nc2" ${"disabled"}>导出 SVG</button></div></div> <hr style="border-color:var(--border);margin:16px 0;"> <div class="export-section svelte-xy1nc2"><h4 style="font-size:13px;margin-bottom:8px;" data-svelte-h="svelte-nufmjz">数据统计</h4> <button class="btn-primary" ${!$currentProject ? "disabled" : ""} style="width:100%;">导出地层数据统计表 (Excel)</button> <p style="font-size:11px;color:var(--text-muted);margin-top:4px;" data-svelte-h="svelte-soh8v8">包含各层厚度统计、面积、体积等</p></div> <hr style="border-color:var(--border);margin:16px 0;"> <div class="export-section svelte-xy1nc2"><h4 style="font-size:13px;margin-bottom:8px;" data-svelte-h="svelte-16vzmgj">建模报告</h4> <button class="btn-primary" ${"disabled"} style="width:100%;">导出建模参数报告 (PDF)</button> <p style="font-size:11px;color:var(--text-muted);margin-top:4px;" data-svelte-h="svelte-1mnkg1">包含半变异函数拟合结果、插值参数、剖面图缩略</p></div> </div>`;
});
const SurfaceOverlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $surfaceOverlay, $$unsubscribe_surfaceOverlay;
  $$unsubscribe_surfaceOverlay = subscribe(surfaceOverlay, (value) => $surfaceOverlay = value);
  $$unsubscribe_surfaceOverlay();
  return `<div class="panel-header"><h3 data-svelte-h="svelte-gzaxfa">地表贴图</h3> <button class="btn-secondary btn-sm">${escape($surfaceOverlay.visible ? "隐藏" : "显示")}</button></div> <div class="panel-body" style="padding:10px 12px;"><div class="form-group"><label data-svelte-h="svelte-txh69p">正射影像 (贴图纹理)</label> <div style="display:flex;gap:4px;align-items:center;"><input type="file" id="orthoInput" accept="image/*"></div> ${$surfaceOverlay.orthoImage ? `<div style="display:flex;align-items:center;gap:6px;margin-top:4px;"><span class="badge badge-success" data-svelte-h="svelte-1k217nw">已加载</span> <button class="btn-danger btn-sm" data-svelte-h="svelte-xi3j00">清除</button></div>` : ``}</div> <div class="form-group"><label data-svelte-h="svelte-1aq3yz3">DEM 灰度图 (地形起伏)</label> <input type="file" id="demInput" accept="image/*"> ${$surfaceOverlay.demImage ? `<div style="display:flex;align-items:center;gap:6px;margin-top:4px;"><span class="badge badge-success" data-svelte-h="svelte-1k217nw">已加载</span> <button class="btn-danger btn-sm" data-svelte-h="svelte-1i2ssbg">清除</button></div>` : ``}</div> <div class="form-group"><label>贴图透明度: ${escape(($surfaceOverlay.opacity * 100).toFixed(0))}%</label> <input type="range" min="0" max="100"${add_attribute("value", $surfaceOverlay.opacity * 100, 0)}></div></div>`;
});
const css$5 = {
  code: ".toast.svelte-ii73z2{padding:10px 16px;border-radius:8px;font-size:13px;max-width:360px;display:flex;align-items:center;justify-content:space-between;gap:8px;animation:svelte-ii73z2-slideIn 0.3s ease}.close-btn.svelte-ii73z2{background:none;color:inherit;font-size:14px;padding:0 4px;opacity:0.6}.close-btn.svelte-ii73z2:hover{opacity:1}@keyframes svelte-ii73z2-slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}",
  map: null
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_toasts;
  $$unsubscribe_toasts = subscribe(toasts, (value) => value);
  let { toast } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast !== void 0)
    $$bindings.toast(toast);
  $$result.css.add(css$5);
  $$unsubscribe_toasts();
  return `<div class="${"toast toast-" + escape(toast.type, true) + " svelte-ii73z2"}">${escape(toast.message)} <button class="close-btn svelte-ii73z2" data-svelte-h="svelte-4r1jhq">✕</button> </div>`;
});
const css$4 = {
  code: ".sub-tabs.svelte-kfrf0t.svelte-kfrf0t{display:flex;gap:2px;padding:4px 12px;border-bottom:1px solid var(--border)}.sub-tab-btn.svelte-kfrf0t.svelte-kfrf0t{background:transparent;color:var(--text-secondary);padding:6px 12px;font-size:12px;border-radius:4px;transition:all 0.2s}.sub-tab-btn.svelte-kfrf0t.svelte-kfrf0t:hover{color:var(--text-primary);background:var(--bg-hover)}.sub-tab-btn.active.svelte-kfrf0t.svelte-kfrf0t{color:var(--accent);background:var(--bg-tertiary)}.empty-state.svelte-kfrf0t.svelte-kfrf0t{text-align:center;padding:40px 16px;color:var(--text-muted)}.wl-list.svelte-kfrf0t.svelte-kfrf0t{display:flex;flex-direction:column;gap:6px}.wl-card.svelte-kfrf0t.svelte-kfrf0t{background:var(--bg-tertiary);border:1px solid var(--border);border-radius:6px;padding:8px 10px;transition:all 0.2s}.wl-card.wl-warning-blue.svelte-kfrf0t.svelte-kfrf0t{background:linear-gradient(90deg, rgba(33, 150, 243, 0.15), var(--bg-tertiary));border-color:rgba(33, 150, 243, 0.4)}.wl-card.wl-warning-orange.svelte-kfrf0t.svelte-kfrf0t{background:linear-gradient(90deg, rgba(255, 152, 0, 0.15), var(--bg-tertiary));border-color:rgba(255, 152, 0, 0.4)}.wl-card.wl-warning-red.svelte-kfrf0t.svelte-kfrf0t{background:linear-gradient(90deg, rgba(244, 67, 54, 0.15), var(--bg-tertiary));border-color:rgba(244, 67, 54, 0.4)}.wl-card.wl-anomaly.svelte-kfrf0t.svelte-kfrf0t{border-left:3px solid #f44336}.wl-card-header.svelte-kfrf0t.svelte-kfrf0t{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;font-size:12px}.wl-card-title.svelte-kfrf0t.svelte-kfrf0t{display:flex;align-items:center;gap:6px}.anomaly-icon.svelte-kfrf0t.svelte-kfrf0t{cursor:pointer;font-size:14px}.warning-badge.svelte-kfrf0t.svelte-kfrf0t{font-size:10px;padding:1px 5px;border-radius:3px;font-weight:600}.warning-blue.svelte-kfrf0t.svelte-kfrf0t{background:rgba(33, 150, 243, 0.2);color:#2196f3}.warning-orange.svelte-kfrf0t.svelte-kfrf0t{background:rgba(255, 152, 0, 0.2);color:#ff9800}.warning-red.svelte-kfrf0t.svelte-kfrf0t{background:rgba(244, 67, 54, 0.2);color:#f44336}.wl-card-info.svelte-kfrf0t.svelte-kfrf0t{display:flex;gap:10px;font-size:11px;color:var(--text-secondary);flex-wrap:wrap}.history-chart-container.svelte-kfrf0t.svelte-kfrf0t{width:100%;height:280px;border:1px solid var(--border);border-radius:6px;overflow:hidden}.history-canvas.svelte-kfrf0t.svelte-kfrf0t{width:100%;height:100%;display:block}.history-stats.svelte-kfrf0t.svelte-kfrf0t{margin-top:8px}.stat-row.svelte-kfrf0t.svelte-kfrf0t{display:flex;gap:12px;font-size:11px;color:var(--text-secondary)}.import-result.svelte-kfrf0t.svelte-kfrf0t{margin:12px 0}.import-result.svelte-kfrf0t p.svelte-kfrf0t{margin-bottom:4px}.threshold-form.svelte-kfrf0t.svelte-kfrf0t{padding:8px 0}.thresholds-list.svelte-kfrf0t.svelte-kfrf0t{margin-top:16px;border-top:1px solid var(--border);padding-top:8px}.thresholds-table.svelte-kfrf0t.svelte-kfrf0t{display:flex;flex-direction:column;gap:4px}.threshold-row.svelte-kfrf0t.svelte-kfrf0t{display:flex;justify-content:space-between;align-items:center;padding:6px 8px;background:var(--bg-tertiary);border-radius:4px;cursor:pointer;transition:background 0.2s}.threshold-row.svelte-kfrf0t.svelte-kfrf0t:hover{background:var(--bg-hover)}.threshold-hole.svelte-kfrf0t.svelte-kfrf0t{font-size:12px;font-weight:600}.threshold-values.svelte-kfrf0t.svelte-kfrf0t{display:flex;gap:6px}.tv.svelte-kfrf0t.svelte-kfrf0t{font-size:10px;padding:2px 6px;border-radius:3px}.tv-blue.svelte-kfrf0t.svelte-kfrf0t{background:rgba(33, 150, 243, 0.15);color:#2196f3}.tv-orange.svelte-kfrf0t.svelte-kfrf0t{background:rgba(255, 152, 0, 0.15);color:#ff9800}.tv-red.svelte-kfrf0t.svelte-kfrf0t{background:rgba(244, 67, 54, 0.15);color:#f44336}.anomaly-modal.svelte-kfrf0t.svelte-kfrf0t{min-width:320px}.anomaly-header.svelte-kfrf0t.svelte-kfrf0t{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.anomaly-hole.svelte-kfrf0t.svelte-kfrf0t{font-size:14px;font-weight:600}.anomaly-direction.svelte-kfrf0t.svelte-kfrf0t{font-size:12px;padding:3px 8px;border-radius:4px;font-weight:600}.anomaly-direction.upper.svelte-kfrf0t.svelte-kfrf0t{background:rgba(244, 67, 54, 0.15);color:#f44336}.anomaly-direction.lower.svelte-kfrf0t.svelte-kfrf0t{background:rgba(33, 150, 243, 0.15);color:#2196f3}.anomaly-info.svelte-kfrf0t.svelte-kfrf0t{background:var(--bg-tertiary);padding:10px 12px;border-radius:6px;margin-bottom:12px}.anomaly-row.svelte-kfrf0t.svelte-kfrf0t{display:flex;justify-content:space-between;padding:3px 0;font-size:12px}.anomaly-neighbors.svelte-kfrf0t.svelte-kfrf0t{margin:8px 0}.anomaly-neighbors.svelte-kfrf0t h4.svelte-kfrf0t{font-size:11px;color:var(--text-muted);margin:4px 0}.neighbor-row.svelte-kfrf0t.svelte-kfrf0t{display:flex;justify-content:space-between;padding:4px 10px;font-size:11px;background:var(--bg-tertiary);border-radius:4px;margin-bottom:2px}.anomaly-current.svelte-kfrf0t.svelte-kfrf0t{margin:8px 0}.anomaly-current.highlight.svelte-kfrf0t.svelte-kfrf0t{background:rgba(244, 67, 54, 0.1);border:1px solid rgba(244, 67, 54, 0.3);border-radius:4px;padding:4px 10px}.anomaly-current.svelte-kfrf0t .neighbor-row.svelte-kfrf0t{background:transparent;color:#f44336;font-weight:600}",
  map: null
};
function getWarningRowClass(level) {
  if (!level)
    return "";
  return `wl-warning-${level}`;
}
const WaterLevelPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $waterLevelData, $$unsubscribe_waterLevelData;
  let $waterLevelSubTab, $$unsubscribe_waterLevelSubTab;
  let $boreholes, $$unsubscribe_boreholes;
  let $waterLevelAnomalies, $$unsubscribe_waterLevelAnomalies;
  let $waterLevelThresholds, $$unsubscribe_waterLevelThresholds;
  let $$unsubscribe_currentProject;
  let $$unsubscribe_waterLevelWarnings;
  let $selectedWaterLevelBoreholeId, $$unsubscribe_selectedWaterLevelBoreholeId;
  $$unsubscribe_waterLevelData = subscribe(waterLevelData, (value) => $waterLevelData = value);
  $$unsubscribe_waterLevelSubTab = subscribe(waterLevelSubTab, (value) => $waterLevelSubTab = value);
  $$unsubscribe_boreholes = subscribe(boreholes, (value) => $boreholes = value);
  $$unsubscribe_waterLevelAnomalies = subscribe(waterLevelAnomalies, (value) => $waterLevelAnomalies = value);
  $$unsubscribe_waterLevelThresholds = subscribe(waterLevelThresholds, (value) => $waterLevelThresholds = value);
  $$unsubscribe_currentProject = subscribe(currentProject, (value) => value);
  $$unsubscribe_waterLevelWarnings = subscribe(waterLevelWarnings, (value) => value);
  $$unsubscribe_selectedWaterLevelBoreholeId = subscribe(selectedWaterLevelBoreholeId, (value) => $selectedWaterLevelBoreholeId = value);
  let selectedBoreholeId = "";
  let historyCanvas;
  const subTabs = [
    { id: "data", label: "水位数据" },
    { id: "history", label: "水位历史" },
    { id: "thresholds", label: "预警设置" }
  ];
  function getWarningLevel(waterLevel, boreholeId) {
    const threshold = $waterLevelThresholds.find((t) => t.borehole_id === boreholeId);
    if (!threshold)
      return null;
    if (waterLevel >= threshold.red_threshold)
      return "red";
    if (waterLevel >= threshold.orange_threshold)
      return "orange";
    if (waterLevel >= threshold.blue_threshold)
      return "blue";
    return null;
  }
  function isAnomaly(recordId, boreholeId) {
    const bhData = $waterLevelAnomalies[boreholeId];
    if (!bhData)
      return false;
    return bhData.anomalies?.some((a) => a.id === recordId);
  }
  function drawHistoryChart() {
    return;
  }
  let waterLevelsByBorehole;
  $$result.css.add(css$4);
  {
    {
      const storeVal = $selectedWaterLevelBoreholeId;
      if (storeVal && storeVal !== selectedBoreholeId) {
        selectedBoreholeId = storeVal;
      }
    }
  }
  $boreholes.find((b) => b.id === selectedBoreholeId);
  {
    if ($waterLevelSubTab === "history" && selectedBoreholeId && $waterLevelData) {
      setTimeout(drawHistoryChart, 50);
    }
  }
  {
    {
      const map = {};
      $waterLevelData.forEach((r) => {
        if (!map[r.borehole_id])
          map[r.borehole_id] = [];
        map[r.borehole_id].push(r);
      });
      waterLevelsByBorehole = map;
    }
  }
  $$unsubscribe_waterLevelData();
  $$unsubscribe_waterLevelSubTab();
  $$unsubscribe_boreholes();
  $$unsubscribe_waterLevelAnomalies();
  $$unsubscribe_waterLevelThresholds();
  $$unsubscribe_currentProject();
  $$unsubscribe_waterLevelWarnings();
  $$unsubscribe_selectedWaterLevelBoreholeId();
  return `<div class="panel-header"><h3 data-svelte-h="svelte-rckkdc">地下水位数据</h3> <div style="display:flex;gap:6px;"><button class="btn-primary btn-sm" data-svelte-h="svelte-vemyzj">导入CSV</button></div></div> <div class="sub-tabs svelte-kfrf0t">${each(subTabs, (tab) => {
    return `<button class="${["sub-tab-btn svelte-kfrf0t", $waterLevelSubTab === tab.id ? "active" : ""].join(" ").trim()}">${escape(tab.label)} </button>`;
  })}</div> <div class="panel-body scrollable">${$waterLevelSubTab === "data" ? `<div class="form-group" style="margin-bottom:10px;"><label style="font-size:12px;" data-svelte-h="svelte-6fopgs">筛选钻孔</label> <select${add_attribute("value", selectedBoreholeId, 0)} style="width:100%;font-size:12px;"><option value="" data-svelte-h="svelte-r6bhbn">全部钻孔</option>${each($boreholes, (bh) => {
    return `<option${add_attribute("value", bh.id, 0)}>${escape(bh.hole_id)}</option>`;
  })}</select></div> ${$waterLevelData.length === 0 ? `<div class="empty-state svelte-kfrf0t" data-svelte-h="svelte-1mxdbwe"><p>暂无水位数据</p> <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">点击&quot;导入CSV&quot;添加水位时序数据</p></div>` : `<div class="wl-list svelte-kfrf0t">${each($waterLevelData, (record) => {
    let bh = $boreholes.find((b) => b.id === record.borehole_id), warningLevel = getWarningLevel(record.water_level, record.borehole_id), isAnom = isAnomaly(record.id, record.borehole_id);
    return `   ${!selectedBoreholeId || record.borehole_id === selectedBoreholeId ? `<div class="${"wl-card " + escape(getWarningRowClass(warningLevel), true) + " " + escape(isAnom ? "wl-anomaly" : "", true) + " svelte-kfrf0t"}"><div class="wl-card-header svelte-kfrf0t"><div class="wl-card-title svelte-kfrf0t"><strong>${escape(bh?.hole_id || "未知")}</strong> ${isAnom ? `<span class="anomaly-icon svelte-kfrf0t" title="异常值" data-svelte-h="svelte-1y6ibi4">⚠️</span>` : ``} ${warningLevel ? `<span class="${"warning-badge warning-" + escape(warningLevel, true) + " svelte-kfrf0t"}">${escape(warningLevel === "blue" ? "蓝" : warningLevel === "orange" ? "橙" : "红")} </span>` : ``}</div> <button class="btn-danger btn-sm" style="font-size:10px;padding:2px 6px;" data-svelte-h="svelte-k58z44">删除</button></div> <div class="wl-card-info svelte-kfrf0t"><span>日期: ${escape(record.obs_date)}</span> <span>水位: ${escape(record.water_level.toFixed(2))}m</span> ${record.water_temp != null ? `<span>水温: ${escape(record.water_temp.toFixed(1))}℃</span>` : ``} ${record.conductivity != null ? `<span>电导率: ${escape(record.conductivity.toFixed(1))}μS/cm</span>` : ``}</div> </div>` : ``}`;
  })}</div>`}` : `${$waterLevelSubTab === "history" ? `<div class="form-group" style="margin-bottom:10px;"><label style="font-size:12px;" data-svelte-h="svelte-kq5742">选择钻孔</label> <select${add_attribute("value", selectedBoreholeId, 0)} style="width:100%;font-size:12px;"><option value="" data-svelte-h="svelte-1do3tcg">请选择钻孔</option>${each($boreholes, (bh) => {
    return `<option${add_attribute("value", bh.id, 0)}>${escape(bh.hole_id)} (${escape((waterLevelsByBorehole[bh.id] || []).length)}条)</option>`;
  })}</select></div> <div class="history-chart-container svelte-kfrf0t"><canvas class="history-canvas svelte-kfrf0t"${add_attribute("this", historyCanvas, 0)}></canvas></div> ${selectedBoreholeId && (waterLevelsByBorehole[selectedBoreholeId] || []).length > 0 ? (() => {
    let records = waterLevelsByBorehole[selectedBoreholeId] || [];
    return ` <div class="history-stats svelte-kfrf0t"><div class="stat-row svelte-kfrf0t"><span>记录数: ${escape(records.length)}</span> <span>最高: ${escape(Math.max(...records.map((r) => r.water_level)).toFixed(2))}m</span> <span>最低: ${escape(Math.min(...records.map((r) => r.water_level)).toFixed(2))}m</span></div></div>`;
  })() : ``}` : `${$waterLevelSubTab === "thresholds" ? `<div class="form-group" style="margin-bottom:10px;"><label style="font-size:12px;" data-svelte-h="svelte-kq5742">选择钻孔</label> <select style="width:100%;font-size:12px;"><option value="" data-svelte-h="svelte-1do3tcg">请选择钻孔</option>${each($boreholes, (bh) => {
    return `<option${add_attribute("value", bh.id, 0)}>${escape(bh.hole_id)}</option>`;
  })}</select></div> ${``} ${$waterLevelThresholds.length > 0 ? `<div class="thresholds-list svelte-kfrf0t"><h4 style="font-size:12px;margin:12px 0 6px;color:var(--text-secondary);" data-svelte-h="svelte-m9yzll">已配置阈值的钻孔</h4> <div class="thresholds-table svelte-kfrf0t">${each($waterLevelThresholds, (t) => {
    let bh = $boreholes.find((b) => b.id === t.borehole_id);
    return ` <div class="threshold-row svelte-kfrf0t"><span class="threshold-hole svelte-kfrf0t">${escape(bh?.hole_id || "未知")}</span> <div class="threshold-values svelte-kfrf0t"><span class="tv tv-blue svelte-kfrf0t">${escape(t.blue_threshold.toFixed(2))}</span> <span class="tv tv-orange svelte-kfrf0t">${escape(t.orange_threshold.toFixed(2))}</span> <span class="tv tv-red svelte-kfrf0t">${escape(t.red_threshold.toFixed(2))}</span></div> </div>`;
  })}</div></div>` : ``}` : ``}`}`}</div> ${``} ${``}`;
});
const css$3 = {
  code: ".borehole-checkboxes.svelte-1gd2qhx.svelte-1gd2qhx{display:flex;flex-wrap:wrap;gap:4px 10px;max-height:120px;overflow-y:auto;padding:4px 0}.section-tabs.svelte-1gd2qhx.svelte-1gd2qhx{display:flex;gap:2px;margin-bottom:10px;border-bottom:1px solid var(--border);padding-bottom:2px}.section-tab.svelte-1gd2qhx.svelte-1gd2qhx{background:transparent;color:var(--text-secondary);padding:5px 10px;font-size:11px;border-radius:4px 4px 0 0;transition:all 0.2s}.section-tab.svelte-1gd2qhx.svelte-1gd2qhx:hover{color:var(--text-primary)}.section-tab.active.svelte-1gd2qhx.svelte-1gd2qhx{color:var(--accent);background:var(--bg-tertiary);border-bottom:2px solid var(--accent)}.stats-table-container.svelte-1gd2qhx.svelte-1gd2qhx{overflow-x:auto;margin-bottom:8px}.stats-table.svelte-1gd2qhx.svelte-1gd2qhx{width:100%;border-collapse:collapse;font-size:11px}.stats-table.svelte-1gd2qhx th.svelte-1gd2qhx,.stats-table.svelte-1gd2qhx td.svelte-1gd2qhx{padding:4px 6px;text-align:center;border:1px solid var(--border);white-space:nowrap}.stats-table.svelte-1gd2qhx th.svelte-1gd2qhx{background:var(--bg-tertiary);color:var(--text-secondary);font-weight:600;position:sticky;top:0}.stats-table.svelte-1gd2qhx td.svelte-1gd2qhx{color:var(--text-primary)}.trend-icon.svelte-1gd2qhx.svelte-1gd2qhx{font-size:14px;font-weight:bold;margin-right:2px}.mk-legend.svelte-1gd2qhx.svelte-1gd2qhx{display:flex;gap:12px;flex-wrap:wrap;font-size:11px;margin-top:8px;padding:6px 8px;background:var(--bg-tertiary);border-radius:4px}.boxplot-container.svelte-1gd2qhx.svelte-1gd2qhx{width:100%;height:300px;border:1px solid var(--border);border-radius:6px;overflow:hidden}.boxplot-canvas.svelte-1gd2qhx.svelte-1gd2qhx{width:100%;height:100%;display:block}.compare-section.svelte-1gd2qhx.svelte-1gd2qhx{padding:4px 0}.compare-chart-container.svelte-1gd2qhx.svelte-1gd2qhx{position:relative;width:100%;height:320px;border:1px solid var(--border);border-radius:6px;overflow:visible}.compare-canvas.svelte-1gd2qhx.svelte-1gd2qhx{width:100%;height:100%;display:block;cursor:crosshair}.compare-tooltip.svelte-1gd2qhx.svelte-1gd2qhx{position:absolute;background:rgba(26, 29, 35, 0.95);border:1px solid var(--border);border-radius:6px;padding:8px 10px;pointer-events:none;z-index:100;min-width:140px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);box-sizing:border-box;overflow-wrap:break-word;word-break:break-word}.tooltip-date.svelte-1gd2qhx.svelte-1gd2qhx{font-size:11px;color:var(--text-muted);margin-bottom:6px;padding-bottom:4px;border-bottom:1px solid var(--border)}.tooltip-row.svelte-1gd2qhx.svelte-1gd2qhx{display:flex;justify-content:space-between;padding:2px 0;font-size:11px}.tooltip-hole.svelte-1gd2qhx.svelte-1gd2qhx{font-weight:600}.tooltip-value.svelte-1gd2qhx.svelte-1gd2qhx{font-family:monospace}",
  map: null
};
const WaterLevelAnalysis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_waterLevelData;
  let $boreholes, $$unsubscribe_boreholes;
  let $waterLevelBoxplot, $$unsubscribe_waterLevelBoxplot;
  let $$unsubscribe_waterLevelMKResults;
  let $waterLevelStats, $$unsubscribe_waterLevelStats;
  let $$unsubscribe_currentProject;
  $$unsubscribe_waterLevelData = subscribe(waterLevelData, (value) => value);
  $$unsubscribe_boreholes = subscribe(boreholes, (value) => $boreholes = value);
  $$unsubscribe_waterLevelBoxplot = subscribe(waterLevelBoxplot, (value) => $waterLevelBoxplot = value);
  $$unsubscribe_waterLevelMKResults = subscribe(waterLevelMKResults, (value) => value);
  $$unsubscribe_waterLevelStats = subscribe(waterLevelStats, (value) => $waterLevelStats = value);
  $$unsubscribe_currentProject = subscribe(currentProject, (value) => value);
  let selectedBoreholeIds = [];
  let compareBoreholeIds = [];
  function drawBoxplot() {
    return;
  }
  function drawCompareChart() {
    return;
  }
  $$result.css.add(css$3);
  {
    if ($waterLevelBoxplot && $waterLevelBoxplot.length > 0) {
      setTimeout(drawBoxplot, 50);
    }
  }
  {
    if (compareBoreholeIds && compareBoreholeIds.length >= 2) {
      setTimeout(drawCompareChart, 50);
    }
  }
  $$unsubscribe_waterLevelData();
  $$unsubscribe_boreholes();
  $$unsubscribe_waterLevelBoxplot();
  $$unsubscribe_waterLevelMKResults();
  $$unsubscribe_waterLevelStats();
  $$unsubscribe_currentProject();
  return `<div class="panel-header" data-svelte-h="svelte-7pvpg7"><h3>水位分析</h3></div> <div class="panel-body scrollable"><div class="form-group" style="margin-bottom:8px;"><label style="font-size:12px;" data-svelte-h="svelte-5wk8rr">选择钻孔 (可多选)</label> <div class="borehole-checkboxes svelte-1gd2qhx">${each($boreholes, (bh) => {
    return `<label class="checkbox-label" style="font-size:11px;"><input type="checkbox" ${selectedBoreholeIds.includes(bh.id) ? "checked" : ""}> ${escape(bh.hole_id)} </label>`;
  })}</div></div> <button class="btn-primary btn-sm" style="width:100%;margin-bottom:12px;" ${selectedBoreholeIds.length === 0 ? "disabled" : ""}>${escape("执行统计分析")}</button> ${$waterLevelStats.length > 0 ? `<div class="section-tabs svelte-1gd2qhx"><button class="${["section-tab svelte-1gd2qhx", "active"].join(" ").trim()}" data-svelte-h="svelte-1tm5qhr">统计指标</button> <button class="${["section-tab svelte-1gd2qhx", ""].join(" ").trim()}" data-svelte-h="svelte-13bt70l">MK趋势检验</button> <button class="${["section-tab svelte-1gd2qhx", ""].join(" ").trim()}" data-svelte-h="svelte-zp9jyh">箱线图</button> <button class="${["section-tab svelte-1gd2qhx", ""].join(" ").trim()}" data-svelte-h="svelte-1x9a0i1">多井对比</button></div> ${`<div class="stats-table-container svelte-1gd2qhx"><table class="stats-table svelte-1gd2qhx"><thead data-svelte-h="svelte-149pjfl"><tr><th class="svelte-1gd2qhx">孔号</th> <th class="svelte-1gd2qhx">记录数</th> <th class="svelte-1gd2qhx">均值</th> <th class="svelte-1gd2qhx">中位数</th> <th class="svelte-1gd2qhx">标准差</th> <th class="svelte-1gd2qhx">变异系数</th> <th class="svelte-1gd2qhx">最大连续上升</th> <th class="svelte-1gd2qhx">最大连续下降</th> <th class="svelte-1gd2qhx">年际变幅</th> <th class="svelte-1gd2qhx">异常值</th></tr></thead> <tbody>${each($waterLevelStats, (s) => {
    return `<tr><td class="svelte-1gd2qhx">${escape(s.hole_id)}</td> <td class="svelte-1gd2qhx">${escape(s.count)}</td> <td class="svelte-1gd2qhx">${escape(s.mean?.toFixed(2) ?? "-")}</td> <td class="svelte-1gd2qhx">${escape(s.median?.toFixed(2) ?? "-")}</td> <td class="svelte-1gd2qhx">${escape(s.std_dev?.toFixed(2) ?? "-")}</td> <td class="svelte-1gd2qhx">${escape(s.cv?.toFixed(2) ?? "-")}%</td> <td class="svelte-1gd2qhx">${escape(s.max_rise_days ?? "-")}</td> <td class="svelte-1gd2qhx">${escape(s.max_fall_days ?? "-")}</td> <td class="svelte-1gd2qhx">${escape(s.annual_amplitude?.toFixed(2) ?? "-")}</td> <td class="svelte-1gd2qhx">${escape(s.count >= 10 ? s.anomaly_count != null ? s.anomaly_count : "—" : "—")}</td> </tr>`;
  })}</tbody></table></div>`}` : ``} </div>`;
});
const css$2 = {
  code: ".result-info.svelte-17dv1aw{background:var(--bg-tertiary);border-radius:6px;padding:8px 10px}.info-row.svelte-17dv1aw{display:flex;justify-content:space-between;font-size:11px;color:var(--text-secondary)}",
  map: null
};
const WaterLevelContour = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let layerNames;
  let canComputeIntersect;
  let $waterLevelIntersectionLine, $$unsubscribe_waterLevelIntersectionLine;
  let $activeModelResult, $$unsubscribe_activeModelResult;
  let $waterLevelContourResult, $$unsubscribe_waterLevelContourResult;
  let $waterLevelContourVisible, $$unsubscribe_waterLevelContourVisible;
  let $$unsubscribe_currentProject;
  let $waterLevelContourOpacity, $$unsubscribe_waterLevelContourOpacity;
  $$unsubscribe_waterLevelIntersectionLine = subscribe(waterLevelIntersectionLine, (value) => $waterLevelIntersectionLine = value);
  $$unsubscribe_activeModelResult = subscribe(activeModelResult, (value) => $activeModelResult = value);
  $$unsubscribe_waterLevelContourResult = subscribe(waterLevelContourResult, (value) => $waterLevelContourResult = value);
  $$unsubscribe_waterLevelContourVisible = subscribe(waterLevelContourVisible, (value) => $waterLevelContourVisible = value);
  $$unsubscribe_currentProject = subscribe(currentProject, (value) => value);
  $$unsubscribe_waterLevelContourOpacity = subscribe(waterLevelContourOpacity, (value) => $waterLevelContourOpacity = value);
  let singleDate = "";
  let gridNx = 50;
  let gridNy = 50;
  let intersectLayerName = "";
  $$result.css.add(css$2);
  layerNames = $activeModelResult?.lithologies || [];
  canComputeIntersect = $waterLevelContourResult && intersectLayerName;
  $$unsubscribe_waterLevelIntersectionLine();
  $$unsubscribe_activeModelResult();
  $$unsubscribe_waterLevelContourResult();
  $$unsubscribe_waterLevelContourVisible();
  $$unsubscribe_currentProject();
  $$unsubscribe_waterLevelContourOpacity();
  return `<div class="panel-header" data-svelte-h="svelte-agmq8t"><h3>水位等值线</h3></div> <div class="panel-body scrollable"><div class="form-group"><label style="font-size:12px;" data-svelte-h="svelte-18ghoz1">日期模式</label> <select style="width:100%;font-size:12px;"><option value="single" data-svelte-h="svelte-158tu90">单日</option><option value="range" data-svelte-h="svelte-nsqibw">日期范围(取均值)</option></select></div> ${`<div class="form-group"><label style="font-size:12px;" data-svelte-h="svelte-1ax8ghg">观测日期</label> <input type="date" style="width:100%;font-size:12px;"${add_attribute("value", singleDate, 0)}></div>`} <div class="form-group"><label style="font-size:12px;" data-svelte-h="svelte-1gmmfbo">变异函数模型</label> <select style="width:100%;font-size:12px;"><option value="spherical" data-svelte-h="svelte-17ym7v6">球状模型</option><option value="exponential" data-svelte-h="svelte-bzk8zo">指数模型</option><option value="gaussian" data-svelte-h="svelte-1iqrdsw">高斯模型</option></select></div> <div class="form-row"><div class="form-group"><label style="font-size:12px;" data-svelte-h="svelte-v5oz4u">网格X</label> <input type="number" min="5" max="100" style="width:100%;font-size:12px;"${add_attribute("value", gridNx, 0)}></div> <div class="form-group"><label style="font-size:12px;" data-svelte-h="svelte-1blztqd">网格Y</label> <input type="number" min="5" max="100" style="width:100%;font-size:12px;"${add_attribute("value", gridNy, 0)}></div></div> <button class="btn-primary btn-sm" style="width:100%;margin-bottom:12px;" ${"disabled"}>${escape("生成等值线")}</button> ${$waterLevelContourResult ? `<div class="result-info svelte-17dv1aw"><div class="info-row svelte-17dv1aw"><span data-svelte-h="svelte-1mah59w">水位范围:</span> <span>${escape($waterLevelContourResult.water_level_min?.toFixed(2))} ~ ${escape($waterLevelContourResult.water_level_max?.toFixed(2))} m</span></div></div> <div class="form-group" style="margin-top:10px;"><label style="display:flex;align-items:center;gap:6px;font-size:12px;"><input type="checkbox"${add_attribute("checked", $waterLevelContourVisible, 1)}>
                显示等值面</label></div> <div class="form-group"><label style="font-size:12px;">透明度: ${escape($waterLevelContourOpacity.toFixed(1))}</label> <input type="range" min="0.1" max="1" step="0.05" style="width:100%;"${add_attribute("value", $waterLevelContourOpacity, 0)}></div> <hr style="border-color:var(--border);margin:12px 0;"> <h4 style="font-size:12px;margin-bottom:8px;" data-svelte-h="svelte-18xkkxk">水位面与地层面交线</h4> ${layerNames.length > 0 ? `<div class="form-group"><label style="font-size:12px;" data-svelte-h="svelte-10as4wd">选择地层</label> <select style="width:100%;font-size:12px;"><option value="" data-svelte-h="svelte-13g6dt">请选择地层</option>${each(layerNames, (name) => {
    return `<option${add_attribute("value", name, 0)}>${escape(name)}</option>`;
  })}</select></div> <button class="btn-secondary btn-sm" style="width:100%;" ${!canComputeIntersect ? "disabled" : ""}>计算交线</button> ${$waterLevelIntersectionLine && $waterLevelIntersectionLine.length > 0 ? `<div class="info-row svelte-17dv1aw" style="margin-top:8px;"><span data-svelte-h="svelte-1c4hjfv">交点数:</span> <span>${escape($waterLevelIntersectionLine.length)}</span></div>` : ``}` : `<p style="font-size:11px;color:var(--text-muted);" data-svelte-h="svelte-10sbxyz">需要先完成三维建模才能计算交线</p>`}` : ``} </div>`;
});
const css$1 = {
  code: ".playback-controls.svelte-b6qn9o{display:flex;gap:8px;justify-content:center;margin:10px 0}.btn-icon.svelte-b6qn9o{width:36px;height:36px;border-radius:50%;background:var(--bg-tertiary);border:1px solid var(--border);color:var(--text-primary);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s}.btn-icon.svelte-b6qn9o:hover:not(:disabled){background:var(--accent);color:#fff}.btn-icon.svelte-b6qn9o:disabled{opacity:0.4;cursor:not-allowed}.progress-bar-container.svelte-b6qn9o{cursor:pointer;padding:6px 0}.progress-bar-track.svelte-b6qn9o{height:6px;background:var(--bg-tertiary);border-radius:3px;overflow:hidden}.progress-bar-fill.svelte-b6qn9o{height:100%;background:var(--accent);border-radius:3px;transition:width 0.1s linear}.current-date-display.svelte-b6qn9o{text-align:center;font-size:13px;color:var(--accent);font-weight:600;margin:6px 0}.playback-info.svelte-b6qn9o{display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);margin-top:8px}",
  map: null
};
const WaterLevelPlayback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $waterLevelPlaybackState, $$unsubscribe_waterLevelPlaybackState;
  let $$unsubscribe_waterLevelContourVisible;
  let $$unsubscribe_waterLevelContourResult;
  let $$unsubscribe_currentProject;
  let $$unsubscribe_waterLevelData;
  $$unsubscribe_waterLevelPlaybackState = subscribe(waterLevelPlaybackState, (value) => $waterLevelPlaybackState = value);
  $$unsubscribe_waterLevelContourVisible = subscribe(waterLevelContourVisible, (value) => value);
  $$unsubscribe_waterLevelContourResult = subscribe(waterLevelContourResult, (value) => value);
  $$unsubscribe_currentProject = subscribe(currentProject, (value) => value);
  $$unsubscribe_waterLevelData = subscribe(waterLevelData, (value) => value);
  let startDate = "";
  let endDate = "";
  let speed = 7;
  let playing = false;
  let progress = 0;
  let currentDateDisplay = "";
  let cacheFrames = [];
  let currentFrameIdx = 0;
  $$result.css.add(css$1);
  set_store_value(
    waterLevelPlaybackState,
    $waterLevelPlaybackState = {
      playing,
      startDate,
      endDate,
      speed,
      currentDate: currentDateDisplay,
      progress
    },
    $waterLevelPlaybackState
  );
  $$unsubscribe_waterLevelPlaybackState();
  $$unsubscribe_waterLevelContourVisible();
  $$unsubscribe_waterLevelContourResult();
  $$unsubscribe_currentProject();
  $$unsubscribe_waterLevelData();
  return `<div class="panel-header" data-svelte-h="svelte-1v7985g"><h3>水位动态回放</h3></div> <div class="panel-body scrollable"><div class="form-group"><label style="font-size:12px;" data-svelte-h="svelte-adhmnz">起始日期</label> <input type="date" style="width:100%;font-size:12px;"${add_attribute("value", startDate, 0)}></div> <div class="form-group"><label style="font-size:12px;" data-svelte-h="svelte-4ph25r">结束日期</label> <input type="date" style="width:100%;font-size:12px;"${add_attribute("value", endDate, 0)}></div> <div class="form-group"><label style="font-size:12px;" data-svelte-h="svelte-usmb6n">播放速度</label> <select style="width:100%;font-size:12px;"><option${add_attribute("value", 1, 0)} data-svelte-h="svelte-1humdvw">1 天/秒</option><option${add_attribute("value", 7, 0)} data-svelte-h="svelte-17dltp0">7 天/秒</option><option${add_attribute("value", 30, 0)} data-svelte-h="svelte-4ot9n8">30 天/秒</option></select></div> <div class="playback-controls svelte-b6qn9o"><button class="btn-icon svelte-b6qn9o" ${"disabled"}>${escape("▶")}</button> <button class="btn-icon svelte-b6qn9o" data-svelte-h="svelte-1iouqet">⏹</button></div> <div class="progress-bar-container svelte-b6qn9o"><div class="progress-bar-track svelte-b6qn9o"><div class="progress-bar-fill svelte-b6qn9o" style="${"width:" + escape(progress, true) + "%"}"></div></div></div> ${``} ${cacheFrames.length === 0 ? `<button class="btn-primary btn-sm" style="width:100%;margin-top:8px;" ${"disabled"}>开始回放</button>` : ``} ${cacheFrames.length > 0 ? `<div class="playback-info svelte-b6qn9o"><span>帧数: ${escape(cacheFrames.length)}</span> <span>当前帧: ${escape(currentFrameIdx + 1)}/${escape(cacheFrames.length)}</span></div>` : ``} </div>`;
});
const css = {
  code: ".app-layout.svelte-f592h6.svelte-f592h6{display:flex;flex-direction:column;height:100vh;width:100vw}.app-header.svelte-f592h6.svelte-f592h6{display:flex;align-items:center;justify-content:space-between;height:48px;padding:0 16px;background:var(--bg-secondary);border-bottom:1px solid var(--border);flex-shrink:0}.header-left.svelte-f592h6.svelte-f592h6{display:flex;align-items:center;gap:12px}.logo.svelte-f592h6.svelte-f592h6{font-size:16px;font-weight:700;color:var(--accent);white-space:nowrap}.header-left.svelte-f592h6 select.svelte-f592h6{min-width:160px;padding:4px 8px;font-size:12px}.header-center.svelte-f592h6.svelte-f592h6{display:flex;gap:2px}.tab-btn.svelte-f592h6.svelte-f592h6{background:transparent;color:var(--text-secondary);padding:8px 14px;font-size:13px;border-radius:6px;transition:all 0.2s}.tab-btn.svelte-f592h6.svelte-f592h6:hover{color:var(--text-primary);background:var(--bg-hover)}.tab-btn.active.svelte-f592h6.svelte-f592h6{color:var(--accent);background:var(--bg-tertiary)}.header-right.svelte-f592h6.svelte-f592h6{display:flex;align-items:center;gap:12px;position:relative}.info-text.svelte-f592h6.svelte-f592h6{font-size:12px;color:var(--text-muted)}.warning-badge-btn.svelte-f592h6.svelte-f592h6{position:relative;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:6px;padding:4px 10px;cursor:pointer;font-size:14px;transition:all 0.2s}.warning-badge-btn.svelte-f592h6.svelte-f592h6:hover{background:var(--bg-hover)}.warning-count-badge.svelte-f592h6.svelte-f592h6{position:absolute;top:-6px;right:-6px;background:#f44336;color:white;font-size:10px;font-weight:700;min-width:18px;height:18px;border-radius:9px;display:flex;align-items:center;justify-content:center;padding:0 4px;box-shadow:0 1px 3px rgba(0,0,0,0.3)}.warning-panel.svelte-f592h6.svelte-f592h6{position:absolute;top:44px;right:0;width:320px;max-height:480px;background:rgba(26, 29, 35, 0.98);border:1px solid var(--border);border-radius:10px;box-shadow:0 8px 32px rgba(0,0,0,0.4);z-index:1000;overflow:hidden;backdrop-filter:blur(10px)}.warning-panel-header.svelte-f592h6.svelte-f592h6{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--border)}.warning-panel-header.svelte-f592h6 h4.svelte-f592h6{margin:0;font-size:13px;color:var(--text-primary)}.close-btn.svelte-f592h6.svelte-f592h6{background:none;border:none;color:var(--text-muted);font-size:18px;cursor:pointer;padding:0 4px;line-height:1}.close-btn.svelte-f592h6.svelte-f592h6:hover{color:var(--text-primary)}.warning-panel-body.svelte-f592h6.svelte-f592h6{padding:8px;overflow-y:auto;max-height:420px}.warning-group.svelte-f592h6.svelte-f592h6{margin-bottom:10px}.warning-group.svelte-f592h6.svelte-f592h6:last-child{margin-bottom:0}.warning-group-title.svelte-f592h6.svelte-f592h6{font-size:11px;font-weight:600;padding:6px 8px;border-radius:4px;margin-bottom:4px}.warning-group-title.red.svelte-f592h6.svelte-f592h6{background:rgba(244, 67, 54, 0.15);color:#f44336}.warning-group-title.orange.svelte-f592h6.svelte-f592h6{background:rgba(255, 152, 0, 0.15);color:#ff9800}.warning-group-title.blue.svelte-f592h6.svelte-f592h6{background:rgba(33, 150, 243, 0.15);color:#2196f3}.warning-item.svelte-f592h6.svelte-f592h6{padding:8px 10px;margin:2px 0;background:var(--bg-tertiary);border-radius:6px;cursor:pointer;transition:all 0.2s}.warning-item.svelte-f592h6.svelte-f592h6:hover{background:var(--bg-hover);transform:translateX(2px)}.warning-item-header.svelte-f592h6.svelte-f592h6{display:flex;justify-content:space-between;align-items:center;margin-bottom:3px}.warning-hole.svelte-f592h6.svelte-f592h6{font-size:12px;font-weight:600;color:var(--text-primary)}.warning-exceed.svelte-f592h6.svelte-f592h6{font-size:10px;font-weight:600;color:#f44336}.warning-item-details.svelte-f592h6.svelte-f592h6{display:flex;gap:12px;font-size:10px;color:var(--text-muted)}.app-body.svelte-f592h6.svelte-f592h6{display:flex;flex:1;overflow:hidden}.left-panel.svelte-f592h6.svelte-f592h6{width:var(--panel-width);min-width:var(--panel-width);flex-shrink:0;overflow-y:auto}.divider.svelte-f592h6.svelte-f592h6{height:1px;background:var(--border);margin:4px 0}.main-content.svelte-f592h6.svelte-f592h6{flex:1;position:relative;overflow:hidden}",
  map: null
};
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $waterLevelWarnings, $$unsubscribe_waterLevelWarnings;
  let $showWarningPanel, $$unsubscribe_showWarningPanel;
  let $$unsubscribe_selectedWaterLevelBoreholeId;
  let $$unsubscribe_waterLevelSubTab;
  let $activeTab, $$unsubscribe_activeTab;
  let $$unsubscribe_waterLevelThresholds;
  let $currentProject, $$unsubscribe_currentProject;
  let $$unsubscribe_modelRuns;
  let $$unsubscribe_profiles;
  let $lithologyTypes, $$unsubscribe_lithologyTypes;
  let $boreholes, $$unsubscribe_boreholes;
  let $activeProfileData, $$unsubscribe_activeProfileData;
  let $comparisonMode, $$unsubscribe_comparisonMode;
  let $comparisonLeftData, $$unsubscribe_comparisonLeftData;
  let $comparisonRightData, $$unsubscribe_comparisonRightData;
  let $toasts, $$unsubscribe_toasts;
  $$unsubscribe_waterLevelWarnings = subscribe(waterLevelWarnings, (value) => $waterLevelWarnings = value);
  $$unsubscribe_showWarningPanel = subscribe(showWarningPanel, (value) => $showWarningPanel = value);
  $$unsubscribe_selectedWaterLevelBoreholeId = subscribe(selectedWaterLevelBoreholeId, (value) => value);
  $$unsubscribe_waterLevelSubTab = subscribe(waterLevelSubTab, (value) => value);
  $$unsubscribe_activeTab = subscribe(activeTab, (value) => $activeTab = value);
  $$unsubscribe_waterLevelThresholds = subscribe(waterLevelThresholds, (value) => value);
  $$unsubscribe_currentProject = subscribe(currentProject, (value) => $currentProject = value);
  $$unsubscribe_modelRuns = subscribe(modelRuns, (value) => value);
  $$unsubscribe_profiles = subscribe(profiles, (value) => value);
  $$unsubscribe_lithologyTypes = subscribe(lithologyTypes, (value) => $lithologyTypes = value);
  $$unsubscribe_boreholes = subscribe(boreholes, (value) => $boreholes = value);
  $$unsubscribe_activeProfileData = subscribe(activeProfileData, (value) => $activeProfileData = value);
  $$unsubscribe_comparisonMode = subscribe(comparisonMode, (value) => $comparisonMode = value);
  $$unsubscribe_comparisonLeftData = subscribe(comparisonLeftData, (value) => $comparisonLeftData = value);
  $$unsubscribe_comparisonRightData = subscribe(comparisonRightData, (value) => $comparisonRightData = value);
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  let projectList = [];
  const tabs = [
    {
      id: "boreholes",
      label: "钻孔数据",
      icon: "⊕"
    },
    { id: "profiles", label: "剖面分析", icon: "☷" },
    { id: "modeling", label: "三维建模", icon: "◆" },
    {
      id: "waterlevel",
      label: "地下水位",
      icon: "◈"
    },
    {
      id: "attributes",
      label: "属性场",
      icon: "◇"
    },
    { id: "export", label: "成果导出", icon: "↓" }
  ];
  let groupedWarnings;
  $$result.css.add(css);
  {
    {
      const groups = { red: [], orange: [], blue: [] };
      $waterLevelWarnings.forEach((w) => {
        groups[w.warning_level].push(w);
      });
      groupedWarnings = groups;
    }
  }
  $$unsubscribe_waterLevelWarnings();
  $$unsubscribe_showWarningPanel();
  $$unsubscribe_selectedWaterLevelBoreholeId();
  $$unsubscribe_waterLevelSubTab();
  $$unsubscribe_activeTab();
  $$unsubscribe_waterLevelThresholds();
  $$unsubscribe_currentProject();
  $$unsubscribe_modelRuns();
  $$unsubscribe_profiles();
  $$unsubscribe_lithologyTypes();
  $$unsubscribe_boreholes();
  $$unsubscribe_activeProfileData();
  $$unsubscribe_comparisonMode();
  $$unsubscribe_comparisonLeftData();
  $$unsubscribe_comparisonRightData();
  $$unsubscribe_toasts();
  return `<div class="app-layout svelte-f592h6"><header class="app-header svelte-f592h6"><div class="header-left svelte-f592h6"><span class="logo svelte-f592h6" data-svelte-h="svelte-1m7r0r6">⛏ GeoModeler</span> <select${add_attribute("value", $currentProject ? $currentProject.id : "", 0)} class="svelte-f592h6">${each(projectList, (p) => {
    return `<option${add_attribute("value", p.id, 0)}>${escape(p.name)}</option>`;
  })}</select> <button class="btn-secondary btn-sm" data-svelte-h="svelte-1c65pm4">+ 新项目</button></div> <div class="header-center svelte-f592h6">${each(tabs, (tab) => {
    return `<button class="${["tab-btn svelte-f592h6", $activeTab === tab.id ? "active" : ""].join(" ").trim()}">${escape(tab.icon)} ${escape(tab.label)} </button>`;
  })}</div> <div class="header-right svelte-f592h6"><span class="info-text svelte-f592h6">钻孔: ${escape($boreholes.length)} | 岩性: ${escape($lithologyTypes.length)}</span> ${$waterLevelWarnings.length > 0 ? `<div class="warning-badge-container" style="position:relative;"><button class="warning-badge-btn svelte-f592h6" title="水位预警">⚠️
                        <span class="warning-count-badge svelte-f592h6">${escape($waterLevelWarnings.length)}</span></button> ${$showWarningPanel ? `<div class="warning-panel svelte-f592h6"><div class="warning-panel-header svelte-f592h6"><h4 class="svelte-f592h6" data-svelte-h="svelte-qsbpnk">水位预警摘要</h4> <button class="close-btn svelte-f592h6" data-svelte-h="svelte-wie9fy">×</button></div> <div class="warning-panel-body svelte-f592h6">${groupedWarnings.red.length > 0 ? `<div class="warning-group svelte-f592h6"><div class="warning-group-title red svelte-f592h6">🔴 红色预警 (${escape(groupedWarnings.red.length)})</div> ${each(groupedWarnings.red, (w) => {
    return `<div class="warning-item svelte-f592h6"><div class="warning-item-header svelte-f592h6"><span class="warning-hole svelte-f592h6">${escape(w.hole_id)}</span> <span class="warning-exceed svelte-f592h6">超出 +${escape(w.exceed_amount.toFixed(2))}m</span></div> <div class="warning-item-details svelte-f592h6"><span>水位: ${escape(w.latest_water_level.toFixed(2))}m</span> <span>日期: ${escape(w.obs_date)}</span></div> </div>`;
  })}</div>` : ``} ${groupedWarnings.orange.length > 0 ? `<div class="warning-group svelte-f592h6"><div class="warning-group-title orange svelte-f592h6">🟠 橙色预警 (${escape(groupedWarnings.orange.length)})</div> ${each(groupedWarnings.orange, (w) => {
    return `<div class="warning-item svelte-f592h6"><div class="warning-item-header svelte-f592h6"><span class="warning-hole svelte-f592h6">${escape(w.hole_id)}</span> <span class="warning-exceed svelte-f592h6">超出 +${escape(w.exceed_amount.toFixed(2))}m</span></div> <div class="warning-item-details svelte-f592h6"><span>水位: ${escape(w.latest_water_level.toFixed(2))}m</span> <span>日期: ${escape(w.obs_date)}</span></div> </div>`;
  })}</div>` : ``} ${groupedWarnings.blue.length > 0 ? `<div class="warning-group svelte-f592h6"><div class="warning-group-title blue svelte-f592h6">🔵 蓝色预警 (${escape(groupedWarnings.blue.length)})</div> ${each(groupedWarnings.blue, (w) => {
    return `<div class="warning-item svelte-f592h6"><div class="warning-item-header svelte-f592h6"><span class="warning-hole svelte-f592h6">${escape(w.hole_id)}</span> <span class="warning-exceed svelte-f592h6">超出 +${escape(w.exceed_amount.toFixed(2))}m</span></div> <div class="warning-item-details svelte-f592h6"><span>水位: ${escape(w.latest_water_level.toFixed(2))}m</span> <span>日期: ${escape(w.obs_date)}</span></div> </div>`;
  })}</div>` : ``}</div></div>` : ``}</div>` : ``}</div></header> <div class="app-body svelte-f592h6"><aside class="left-panel panel svelte-f592h6">${$activeTab === "boreholes" ? `${validate_component(BoreholeManager, "BoreholeManager").$$render($$result, {}, {}, {})}` : `${$activeTab === "profiles" ? `${validate_component(ProfileEditor, "ProfileEditor").$$render($$result, {}, {}, {})}` : `${$activeTab === "modeling" ? `${validate_component(ModelingPanel, "ModelingPanel").$$render($$result, {}, {}, {})}` : `${$activeTab === "waterlevel" ? `${validate_component(WaterLevelPanel, "WaterLevelPanel").$$render($$result, {}, {}, {})}` : `${$activeTab === "attributes" ? `${validate_component(AttributePanel, "AttributePanel").$$render($$result, {}, {}, {})}` : `${$activeTab === "export" ? `${validate_component(ExportPanel, "ExportPanel").$$render($$result, {}, {}, {})}` : ``}`}`}`}`}`} <div class="divider svelte-f592h6"></div> ${$activeTab === "waterlevel" ? `${validate_component(WaterLevelAnalysis, "WaterLevelAnalysis").$$render($$result, {}, {}, {})} <div class="divider svelte-f592h6"></div> ${validate_component(WaterLevelContour, "WaterLevelContour").$$render($$result, {}, {}, {})} <div class="divider svelte-f592h6"></div> ${validate_component(WaterLevelPlayback, "WaterLevelPlayback").$$render($$result, {}, {}, {})}` : `${validate_component(SurfaceOverlay, "SurfaceOverlay").$$render($$result, {}, {}, {})}`}</aside> <main class="main-content svelte-f592h6">${$activeTab === "profiles" && ($activeProfileData || $comparisonMode && $comparisonLeftData && $comparisonRightData) ? `${validate_component(ProfileCanvas, "ProfileCanvas").$$render($$result, {}, {}, {})}` : `${validate_component(Viewer3D, "Viewer3D").$$render($$result, {}, {}, {})}`}</main></div></div> ${``} <div class="toast-container">${each($toasts, (toast) => {
    return `${validate_component(Toast, "Toast").$$render($$result, { toast }, {}, {})}`;
  })} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(App, "App").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
