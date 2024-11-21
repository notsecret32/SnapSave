import { AppSidebar } from '@/components/shared/sidebar'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const AppOutlet: FC = () => {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </>
  )
}
