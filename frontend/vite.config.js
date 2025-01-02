import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:8000'
            : 'https://faded-bnb.onrender.com/',
        changeOrigin: true,
      },
    },
  },
});
