export interface FileSystem {
  getRootDir: () => Promise<string>
}

export interface SnapSaveApi {
  locale: string
  fs: FileSystem
}
