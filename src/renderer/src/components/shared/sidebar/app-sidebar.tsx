import { NavStorage } from '@/components/shared/sidebar'
import { Sidebar, SidebarContent } from '@/components/ui/sidebar'
import { FC } from 'react'

type AppSidebarProps = React.ComponentProps<typeof Sidebar>

export const AppSidebar: FC<AppSidebarProps> = ({ ...props }) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavStorage sharedStorages={null} />
      </SidebarContent>
    </Sidebar>
  )
}
