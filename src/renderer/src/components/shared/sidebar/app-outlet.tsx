import { AppSidebar } from '@/components/shared/sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const AppOutlet: FC = () => {
  return (
    <>
      <AppSidebar />
      <main className="flex h-screen flex-col p-4">
        <SidebarTrigger />
        <Outlet />
      </main>
    </>
  )
}
