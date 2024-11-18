import { AddFilesModal } from '@/components/shared/modals/add-files-modal'
import { useUser } from '@/hooks'
import { FC } from 'react'

export const DashboardPage: FC = () => {
  const user = useUser()

  return (
    <main className="flex h-screen flex-col p-4">
      <div>{user?.user_metadata.username}</div>
      <div className="mt-auto">
        <AddFilesModal />
      </div>
    </main>
  )
}
