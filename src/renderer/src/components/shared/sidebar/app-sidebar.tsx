import { AppSidebarMenu } from '@/components/shared/sidebar'
import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent,
  SidebarGroupLabel
} from '@/components/ui/sidebar'
import { FC } from 'react'

export const AppSidebar: FC = () => {
  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <SidebarGroupLabel>Storage</SidebarGroupLabel>
        <SidebarGroupContent>
          <AppSidebarMenu />
        </SidebarGroupContent>
      </SidebarContent>
    </Sidebar>
  )
}
