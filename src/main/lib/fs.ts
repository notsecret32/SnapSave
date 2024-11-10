import { appDirectoryName } from '@shared/constants'
import { homedir } from 'os'

export const getRootDir = async () => {
  return `${homedir()}\\${appDirectoryName}`
}
