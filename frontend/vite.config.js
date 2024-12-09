import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
/*
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({
      lintOnStart: true,
      failOnError: mode === "production"
    })
  ],
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:5005'
    },
  }
}));



*/








// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({
      lintOnStart: true,
      failOnError: mode === "production"
    })
  ],
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

