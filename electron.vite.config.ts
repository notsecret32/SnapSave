import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@resources': resolve('resources/'),
        '@/lib': resolve('src/main/lib'),
        '@shared': resolve('src/shared/')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@/lib': resolve('src/main/lib'),
        '@shared': resolve('src/shared')
      }
    }
  },
  renderer: {
    resolve: {
      alias: {
        '@resources': resolve('resources/'),
        '@shared': resolve('src/shared/'),
        '@/': resolve('src/renderer/src/'),
        '@/components': resolve('src/renderer/src/components/'),
        '@/hooks': resolve('src/renderer/src/hooks/'),
        '@/pages': resolve('src/renderer/src/pages/'),
        '@/routes': resolve('src/renderer/src/routes/'),
        '@/utils': resolve('src/renderer/src/utils/')
      }
    },
    plugins: [react()]
  }
})
