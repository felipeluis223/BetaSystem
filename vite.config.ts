import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    proxy: {
      '/login': 'http://127.0.0.1:3000',
    }
  },
  plugins: [
    tailwindcss(),
  ],
})
