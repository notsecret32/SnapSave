import { electronAPI } from '@electron-toolkit/preload'
import { SnapSaveApi } from '@shared/SnapSaveApi'
import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  const snapSaveApi: SnapSaveApi = {
    locale: navigator.language
  }

  contextBridge.exposeInMainWorld('electron', electronAPI)
  contextBridge.exposeInMainWorld('snapsave', snapSaveApi)
} catch (error) {
  console.error(error)
}
