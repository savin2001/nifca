import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      host: env.VITE_APP_HOST || 'localhost',
      port: Number(env.VITE_APP_PORT) || 5174,
      proxy: {
        '/api': {
          target: 'https://nifca-backend.onrender.com',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
