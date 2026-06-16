export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.72sKDAVJ.js",app:"_app/immutable/entry/app.qdkf8HVc.js",imports:["_app/immutable/entry/start.72sKDAVJ.js","_app/immutable/chunks/Cwt_Dagz.js","_app/immutable/chunks/CFrTkFHZ.js","_app/immutable/chunks/W-IK_yO4.js","_app/immutable/entry/app.qdkf8HVc.js","_app/immutable/chunks/CFrTkFHZ.js","_app/immutable/chunks/DXW_PE2e.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
