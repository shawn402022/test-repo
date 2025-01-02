import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For API Endpoints
const domain = process.env.VITE_APP_API_DOMAIN || 'localhost';
const port = process.env.VITE_APP_API_PORT || '8000';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/api': {
        target: `http://${domain}:${port}`,
        changeOrigin: true,
      },
    },
  },
});
