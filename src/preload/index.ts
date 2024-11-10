import { electronAPI } from '@electron-toolkit/preload'
import { ipcFsGetRootDirKey } from '@shared/constants'
import { SnapSaveApi } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('electron', electronAPI)
  contextBridge.exposeInMainWorld('snapsave', {
    locale: navigator.language,
    fs: {
      GetRootDir: () => ipcRenderer.invoke(ipcFsGetRootDirKey)
    }
  } as SnapSaveApi)
} catch (error) {
  console.error(error)
}
