import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        works: resolve(__dirname, 'works.html'),
        epias: resolve(__dirname, 'project-epias.html'),
        rag: resolve(__dirname, 'project-rag.html'),
        vera: resolve(__dirname, 'project-vera.html'),
        ieee: resolve(__dirname, 'project-ieee.html'),
        roomerang: resolve(__dirname, 'project-roomerang.html'),
        hospital: resolve(__dirname, 'project-hospital.html'),
      }
    }
  }
})
