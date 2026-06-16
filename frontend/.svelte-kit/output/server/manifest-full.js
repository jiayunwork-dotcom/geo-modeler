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
		client: {"start":"_app/immutable/entry/start.CA5rA3Cv.js","app":"_app/immutable/entry/app.VMm4WpnO.js","imports":["_app/immutable/entry/start.CA5rA3Cv.js","_app/immutable/chunks/entry.CivJuHy0.js","_app/immutable/chunks/scheduler.CFrTkFHZ.js","_app/immutable/chunks/index.D9njJScM.js","_app/immutable/entry/app.VMm4WpnO.js","_app/immutable/chunks/scheduler.CFrTkFHZ.js","_app/immutable/chunks/index.aK-vytiY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
