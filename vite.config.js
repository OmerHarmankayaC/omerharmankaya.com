import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: './',
    plugins: [react()],
    server: {
      proxy: {
        '/api/vera-qa': {
          target: env.VERA_QA_BACKEND_URL || 'https://rag.omerharmankaya.com/api/external/vera-qa',
          changeOrigin: true,
          rewrite: (path) => '',
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              if (env.VERA_QA_SHARED_SECRET) {
                proxyReq.setHeader('X-Vera-QA-Secret', env.VERA_QA_SHARED_SECRET);
              }
            });
          }
        }
      }
    },
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
  }
})
