import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@shared': resolve('src/shared/')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@shared': resolve('src/shared/'),
        '@/': resolve('src/renderer/src/'),
        '@/components': resolve('src/renderer/src/components/'),
        '@/pages': resolve('src/renderer/src/pages/'),
        '@/routes': resolve('src/renderer/src/routes/'),
        '@/utils': resolve('src/renderer/src/utils/')
      }
    },
    plugins: [react()]
  }
})
