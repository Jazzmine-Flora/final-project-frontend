import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Relative base so assets load correctly on GitHub Pages (works for any subpath)
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? './' : '/',
  server: {
    port: 5173,
    host: true,
    strictPort: false,
  },
}))
