import { ThemeProvider } from '@/components/shared/theme'
import { SidebarProvider } from '@/components/ui/sidebar'
import { router } from '@/routes'
import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

export const App: FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="snapsave-theme">
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ThemeProvider>
  )
}
