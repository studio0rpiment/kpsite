import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@fontsource/space-grotesk'],
  },
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.mp4', '**/*.pdf'],
  publicDir: 'public',
  base: '/',
  server: {
    watch: {
      usePolling: true,
    },
  }
});