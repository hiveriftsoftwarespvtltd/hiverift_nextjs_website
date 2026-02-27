import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Ye line add karein:
      'figma:asset': path.resolve(__dirname, './src/assets'), 
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
