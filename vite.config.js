import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Absolute asset paths so deep links like /labs/agents still load /assets/*.
  // The host must serve index.html for unknown paths (CloudFront error responses do this).
  base: '/',
  plugins: [react()],
  // Own port so it doesn't collide with other local Vite apps on 5173; fail instead of silently hopping.
  server: { port: 5180, strictPort: true },
});
