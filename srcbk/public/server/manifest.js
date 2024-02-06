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
		client: {"start":"_app/immutable/entry/start.sPC345-C.js","app":"_app/immutable/entry/app.Q7V4cZOs.js","imports":["_app/immutable/entry/start.sPC345-C.js","_app/immutable/chunks/entry.UL_xJ6rH.js","_app/immutable/chunks/scheduler.335M-m3f.js","_app/immutable/entry/app.Q7V4cZOs.js","_app/immutable/chunks/scheduler.335M-m3f.js","_app/immutable/chunks/index.K2G5X1vL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-1EqNTmV5.js')),
			__memo(() => import('./chunks/1-ldMqK6eG.js')),
			__memo(() => import('./chunks/2-Gz3u6aej.js')),
			__memo(() => import('./chunks/3-we_RvUw2.js')),
			__memo(() => import('./chunks/4-jtPsnqJ3.js')),
			__memo(() => import('./chunks/5-m1cpLsjd.js')),
			__memo(() => import('./chunks/6-DOgP8B2_.js')),
			__memo(() => import('./chunks/7-p-ipZfkH.js'))
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
