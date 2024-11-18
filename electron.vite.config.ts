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
        '@/config': resolve('src/renderer/src/config/'),
        '@/constants': resolve('src/renderer/src/constants/'),
        '@/hooks': resolve('src/renderer/src/hooks/'),
        '@/pages': resolve('src/renderer/src/pages/'),
        '@/routes': resolve('src/renderer/src/routes/'),
        '@/store': resolve('src/renderer/src/store/'),
        '@/types': resolve('src/renderer/src/store/'),
        '@/utils': resolve('src/renderer/src/utils/')
      }
    },
    plugins: [react()]
  }
})
