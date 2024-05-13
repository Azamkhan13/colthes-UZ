import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: "@pages", replacement: '/src/pages' },
      { find: "@ui", replacement: '/src/components/ui' },
      { find: "@components", replacement: '/src/components'},
    ]
  }
})
