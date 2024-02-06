const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.kTi8tedU.js","app":"_app/immutable/entry/app.z427lM6R.js","imports":["_app/immutable/entry/start.kTi8tedU.js","_app/immutable/chunks/entry.11D1wdEp.js","_app/immutable/chunks/scheduler.335M-m3f.js","_app/immutable/entry/app.z427lM6R.js","_app/immutable/chunks/scheduler.335M-m3f.js","_app/immutable/chunks/index.K2G5X1vL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-qa6nyL7y.js')),
			__memo(() => import('./chunks/1-kjPpW7dN.js')),
			__memo(() => import('./chunks/2-2lmtbNnk.js')),
			__memo(() => import('./chunks/3-S4UGThQZ.js')),
			__memo(() => import('./chunks/4-ZpPFJyg6.js')),
			__memo(() => import('./chunks/5-WhbrQ41D.js')),
			__memo(() => import('./chunks/6-gXFfD1H8.js')),
			__memo(() => import('./chunks/7-1AS7p5l_.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/bilancio",
				pattern: /^\/bilancio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/profilo",
				pattern: /^\/profilo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/registration",
				pattern: /^\/registration\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/spese",
				pattern: /^\/spese\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
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

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
