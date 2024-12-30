import { defineConfig } from 'vite';
import { resolve } from "path";
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({
      lintOnStart: true,
      failOnError: mode === "production"
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    target: ['es2015', 'chrome87', 'edge88', 'firefox78', 'safari14','esnext'],
    outDir: 'dist'
  },
  esbuild: {
    target: 'esnext'
  },
  // To automatically open the app in the browser whenever the server starts,
  // uncomment the following lines:
  server: {
    open: true,
    proxy: {
      '/api':{
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    },
  }
}));
