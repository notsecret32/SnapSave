import { appDirectoryName } from '@shared/constants'
import { homedir } from 'os'

export const GetRootDir = async () => {
  return `${homedir()}\\${appDirectoryName}`
}
