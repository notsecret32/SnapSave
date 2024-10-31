import { cn } from '@/utils'
import { ComponentProps, FC } from 'react'

type ContentProps = ComponentProps<'main'>

export const Content: FC<ContentProps> = ({ className, children, ...rest }) => {
  return (
    <main className={cn('border-4 p-4 border-green-500 w-full', className)} {...rest}>
      {children}
    </main>
  )
}
