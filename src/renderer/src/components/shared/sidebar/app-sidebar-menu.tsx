import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Home, Inbox, Search, Settings } from 'lucide-react'
import { FC } from 'react'

const items = [
  {
    title: 'My storage',
    url: '/storage',
    icon: Home
  },
  {
    title: 'Shared storage',
    url: '/shared-storage',
    icon: Inbox
  },
  {
    title: 'Community',
    url: '/community',
    icon: Search
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings
  }
]

export const AppSidebarMenu: FC = () => {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
