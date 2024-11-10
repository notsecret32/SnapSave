export interface FileSystem {
  GetRootDir: () => Promise<string>
}

export interface SnapSaveApi {
  locale: string
  fs: FileSystem
}
