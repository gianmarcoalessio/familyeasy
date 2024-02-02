import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from "path";

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$svg: path.resolve("./src/inc/svg"),
			$daisi: path.resolve("./src/inc/daisi"),
			$lib: path.resolve("./src/lib"),
			$prj: path.resolve("./src/prj"),
		}
	},

});


