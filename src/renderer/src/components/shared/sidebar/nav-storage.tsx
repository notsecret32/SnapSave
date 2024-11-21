import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import clsx from 'clsx'
import { type LucideIcon } from 'lucide-react'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavStorageProps {
  items: {
    name: string
    tooltip: string
    url: string
    Icon: LucideIcon
  }[]
}

export const NavStorage: FC<NavStorageProps> = ({ items }) => {
  const { pathname } = useLocation()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Storage</SidebarGroupLabel>
      <SidebarMenu>
        {items.map(({ name, tooltip, url, Icon }) => (
          <SidebarMenuItem key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <SidebarMenuButton asChild>
                  <Link
                    to={url}
                    className={clsx({
                      ['bg-accent/90']: pathname === url
                    })}
                  >
                    <Icon />
                    <span>{name}</span>
                  </Link>
                </SidebarMenuButton>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
