import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use command so base is correct during build (process.env.NODE_ENV may be unset in config)
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/final-project-frontend/' : '/',
  server: {
    port: 5173,
    host: true,
    strictPort: false,
  },
}))
