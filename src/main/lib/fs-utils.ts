import { appDirectoryName } from '@shared/constants'
import { AppDataPath, SupportedOS } from '@shared/types'
import { homedir, platform } from 'os'
import path from 'path'

/**
 * Returns the path to the folder with the application settings.
 *
 * @example Windows - C:\Users\<username>\AppData\Roaming\<appName>
 * @example MacOS - /Users/<username>/Library/Application Support/<appName>
 * @example Linux - /home/<username>/.config/<appName>
 */
export const getAppDataPath = async (): Promise<string> => {
  const appDataPaths: Record<SupportedOS, AppDataPath> = {
    win32: 'AppData/Roaming',
    darwin: 'Library/Application',
    linux: '.config'
  }

  const appDataPath = appDataPaths[platform()]

  return path.join(homedir(), appDataPath, appDirectoryName)
}
