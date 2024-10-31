import { ElectronAPI } from '@electron-toolkit/preload'
import { SnapSaveApi } from '@shared/SnapSaveApi'

declare global {
  interface Window {
    electron: ElectronAPI
    snapsave: SnapSaveApi
  }
}
