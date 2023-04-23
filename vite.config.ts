import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@service': path.resolve(__dirname, './src/services'),
			'@store': path.resolve(__dirname, './src/store'),
			'@config': path.resolve(__dirname, './src/config'),
		},
	},
});
