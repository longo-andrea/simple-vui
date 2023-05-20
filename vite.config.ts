import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	build: {
		lib: {
			name: 'simple-vui',
			entry: {
				core: 'packages/core/index.ts',
			},
		},
	},
	resolve: {
		alias: {
			'@core': fileURLToPath(
				new URL('./src/packages/core', import.meta.url)
			),
		},
	},
})
