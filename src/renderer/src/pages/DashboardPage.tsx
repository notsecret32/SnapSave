import { AddFilesModal } from '@/components/shared/modals/add-files-modal'
import { FC } from 'react'

export const DashboardPage: FC = () => {
  return (
    <main className="flex h-screen flex-col p-4">
      <div>Content</div>
      <div className="mt-auto">
        <AddFilesModal />
      </div>
    </main>
  )
}
