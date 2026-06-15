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
		client: {start:"_app/immutable/entry/start.8mC2HLrQ.js",app:"_app/immutable/entry/app.BQCzQD0Q.js",imports:["_app/immutable/entry/start.8mC2HLrQ.js","_app/immutable/chunks/CZ441bQH.js","_app/immutable/chunks/DG1aO4bD.js","_app/immutable/chunks/AB1Lozu8.js","_app/immutable/entry/app.BQCzQD0Q.js","_app/immutable/chunks/DG1aO4bD.js","_app/immutable/chunks/B7RjJRnq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
