import { useEffect, useState } from 'react'
import { useSnapSave } from './use-snap-save'

export const useFileSystem = () => {
  const { fs } = useSnapSave()

  const [homeDir, setHomeDir] = useState<string | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchRootDir = async () => {
      try {
        const value = await fs.getRootDir()
        setHomeDir(value)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchRootDir()
  }, [fs])

  return {
    ...fs,
    homeDir,
    error,
    loading
  }
}
