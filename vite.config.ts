import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'CommonNav',
      fileName: 'common-nav',
      formats: ['es', 'umd'],
    },
  },
  define: {
    'process.env': {} // Fix for potential env issues in browser
  }
})
