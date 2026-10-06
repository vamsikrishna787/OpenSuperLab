import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Browsers block `<script type="module">` and `crossorigin` assets on file:// URLs,
// so emit a classic deferred script. The built site then works when dist/index.html
// is opened directly, as well as on S3 or any static host.
const classicScript = () => ({
  name: 'classic-script',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler: (html) =>
      html
        .replace(/<script type="module" crossorigin/g, '<script defer')
        .replace(/ crossorigin(?=[ >])/g, ''),
  },
});

export default defineConfig({
  // Relative asset paths so the build works from S3, any sub-path, or opened directly from disk.
  base: './',
  plugins: [react(), classicScript()],
  build: {
    modulePreload: false,
    rollupOptions: { output: { format: 'iife' } },
  },
});
