import { useFileSystem } from '@/hooks'
import { FC } from 'react'

export const Dashboard: FC = () => {
  const { homeDir } = useFileSystem()

  return <div>{homeDir}</div>
}
