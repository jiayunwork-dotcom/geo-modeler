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
		client: {start:"_app/immutable/entry/start.C_AZRcRb.js",app:"_app/immutable/entry/app.Cwzc4KMj.js",imports:["_app/immutable/entry/start.C_AZRcRb.js","_app/immutable/chunks/D5VtAHyJ.js","_app/immutable/chunks/CkO2QsTZ.js","_app/immutable/chunks/DFIh0oqn.js","_app/immutable/entry/app.Cwzc4KMj.js","_app/immutable/chunks/CkO2QsTZ.js","_app/immutable/chunks/DFkIi2GE.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
