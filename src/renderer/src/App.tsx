import { ThemeProvider } from '@/components/shared'
import { router } from '@/routes'
import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { TitleBar } from './components/shared/common'

export const App: FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="snapsave-theme">
      <TitleBar />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
