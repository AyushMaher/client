import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Change this to match your GitHub repo name (the part after github.io/)
export default defineConfig({
  plugins: [react()],
  base: '/client/'
});
