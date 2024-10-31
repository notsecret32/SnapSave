import { cn } from '@/utils'
import { ComponentProps, FC } from 'react'

type DashboardSidebarProps = Omit<ComponentProps<'aside'>, 'children'>

export const DashboardSidebar: FC<DashboardSidebarProps> = ({ className, ...rest }) => {
  return (
    <aside
      className={cn('flex w-72 h-screen bg-white border-r-2 border-l-gray-500', className)}
      {...rest}
    ></aside>
  )
}
