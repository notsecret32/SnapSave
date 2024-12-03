import { ElectronAPI } from '@electron-toolkit/preload'
import { SnapSaveApi } from '@shared/types'

declare global {
  interface Window {
    electron: ElectronAPI
    snapsave: SnapSaveApi
  }
}
