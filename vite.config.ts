import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@Components': fileURLToPath(new URL('./src/components', import.meta.url)),

      '@Atoms': fileURLToPath(new URL('./src/components/atoms', import.meta.url)),
      '@Molecules': fileURLToPath(new URL('./src/components/molecules', import.meta.url)),
      '@Organisms': fileURLToPath(new URL('./src/components/organisms', import.meta.url)),
      '@Templates': fileURLToPath(new URL('./src/components/templates', import.meta.url)),
    },
  },
})
