import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/final-project-frontend/' : '/',
  server: {
    port: 5173,
    host: true, // listen on 0.0.0.0 so localhost is reachable (helps on Windows)
    strictPort: false, // try next port if 5173 is in use
  },
})
