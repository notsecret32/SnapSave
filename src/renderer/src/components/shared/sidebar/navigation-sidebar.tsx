import { cn } from '@/utils'
import { ComponentProps, FC } from 'react'

type NavigationSidebarProps = Omit<ComponentProps<'aside'>, 'children'>

export const NavigationSidebar: FC<NavigationSidebarProps> = ({ className, ...rest }) => {
  return <aside className={cn('flex w-20 h-screen bg-blue-600', className)} {...rest}></aside>
}
