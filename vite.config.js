import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures proper base URL for the project
  server: {
    port: 3000, // Optional: Set a custom development server port
    open: true, // Automatically open the browser on `npm run dev`
  },
  define: {
    __DEBUG__: true, // Enable debugging during development
  },
  build: {
    outDir: 'dist', // Specify the output directory for production builds
    sourcemap: true, // Generate sourcemap files for easier debugging
  },
});