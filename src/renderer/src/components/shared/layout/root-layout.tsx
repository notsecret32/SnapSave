import { cn } from '@/utils'
import { ComponentProps, FC } from 'react'

type RootLayoutProps = ComponentProps<'div'>

export const RootLayout: FC<RootLayoutProps> = ({ className, children, ...rest }) => {
  return (
    <div className={cn('flex flex-row h-screen', className)} {...rest}>
      {children}
    </div>
  )
}
RootLayout.displayName = 'RootLayout'
