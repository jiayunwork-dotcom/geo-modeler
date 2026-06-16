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
		client: {start:"_app/immutable/entry/start.DLa22o3M.js",app:"_app/immutable/entry/app.ImF9x0J3.js",imports:["_app/immutable/entry/start.DLa22o3M.js","_app/immutable/chunks/BvlnFngM.js","_app/immutable/chunks/CFrTkFHZ.js","_app/immutable/chunks/W-IK_yO4.js","_app/immutable/entry/app.ImF9x0J3.js","_app/immutable/chunks/CFrTkFHZ.js","_app/immutable/chunks/DXW_PE2e.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
