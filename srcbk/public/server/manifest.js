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
		client: {"start":"_app/immutable/entry/start.0LRqa5WY.js","app":"_app/immutable/entry/app._z97oAiC.js","imports":["_app/immutable/entry/start.0LRqa5WY.js","_app/immutable/chunks/entry.ehxY7oKu.js","_app/immutable/chunks/scheduler.335M-m3f.js","_app/immutable/entry/app._z97oAiC.js","_app/immutable/chunks/scheduler.335M-m3f.js","_app/immutable/chunks/index.K2G5X1vL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-rRsZjSjf.js')),
			__memo(() => import('./chunks/1-SttSreDF.js')),
			__memo(() => import('./chunks/2-82dPvabU.js')),
			__memo(() => import('./chunks/3-NrdOBTaN.js')),
			__memo(() => import('./chunks/4-B70OowuN.js')),
			__memo(() => import('./chunks/5-akR_vTQb.js')),
			__memo(() => import('./chunks/6-c5BnUAl0.js')),
			__memo(() => import('./chunks/7-EX99m9Ni.js'))
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
