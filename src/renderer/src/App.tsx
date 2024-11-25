import { ThemeProvider } from '@/components/shared/theme'
import { SidebarProvider } from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { router } from '@/routes'
import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { AppBar } from './components/shared/common'

export const App: FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="snapsave-theme">
      <SidebarProvider open={false}>
        <TooltipProvider>
          <AppBar />
          <RouterProvider router={router} />
        </TooltipProvider>
      </SidebarProvider>
    </ThemeProvider>
  )
}
