import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import clsx from 'clsx'
import { Plus, type LucideIcon } from 'lucide-react'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavStorageProps {
  sharedStorages:
    | {
        url: string
        Icon: LucideIcon
      }[]
    | null
}

export const NavStorage: FC<NavStorageProps> = ({ sharedStorages }) => {
  const { pathname } = useLocation()

  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link
              to="/storage"
              className={clsx('w-full', {
                ['bg-accent/90']: pathname === '/storage'
              })}
            >
              <Avatar>
                <AvatarImage src="https://github.com/notsecret32.png" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <Separator />
        {sharedStorages &&
          sharedStorages.map(({ url, Icon }) => (
            <SidebarMenuItem key={url} className="">
              <SidebarMenuButton asChild>
                <Link
                  to={url}
                  className={clsx('w-full', {
                    ['bg-accent/90']: pathname === url
                  })}
                >
                  <Icon />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        <SidebarMenuItem>
          <SidebarMenuButton>
            <Plus />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
