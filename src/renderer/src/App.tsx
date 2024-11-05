import { ThemeProvider } from '@/components/shared'
import { router } from '@/routes'
import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

export const App: FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="snapsave-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
