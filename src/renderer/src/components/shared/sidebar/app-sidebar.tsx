import { NavStorage } from '@/components/shared/sidebar'
import { Sidebar, SidebarContent, SidebarFooter } from '@/components/ui/sidebar'
import { useUser } from '@/hooks'
import { Home, Inbox, Search, Settings } from 'lucide-react'
import { FC } from 'react'
import { NavUser } from './nav-user'

const data = {
  navStorage: [
    {
      name: 'My storage',
      tooltip: 'My storage',
      url: '/storage',
      Icon: Home
    },
    {
      name: 'Shared storage',
      tooltip: 'Shared storage',
      url: '/shared-storage',
      Icon: Inbox
    },
    {
      name: 'Community',
      tooltip: 'Community',
      url: '/community',
      Icon: Search
    },
    {
      name: 'Settings',
      tooltip: 'Settings',
      url: '/settings',
      Icon: Settings
    }
  ]
}

type AppSidebarProps = React.ComponentProps<typeof Sidebar>

export const AppSidebar: FC<AppSidebarProps> = ({ ...props }) => {
  const user = useUser()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavStorage items={data.navStorage} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
