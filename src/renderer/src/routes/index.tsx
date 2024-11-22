import { ProtectedRoute } from '@/components/shared/common'
import { AppOutlet } from '@/components/shared/sidebar'
import { SignInPage, SignUpPage, StoragePage } from '@/pages'
import { createBrowserRouter, Navigate } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <SignInPage />
  },
  {
    path: '/sign-up',
    element: <SignUpPage />
  },
  {
    path: '/',
    element: <AppOutlet />,
    children: [
      {
        index: true,
        element: <Navigate to="/storage" replace />
      },
      {
        path: 'storage',
        element: (
          <ProtectedRoute>
            <StoragePage />
          </ProtectedRoute>
        )
      },
      {
        path: 'shared-storage',
        element: <ProtectedRoute>Shared Storage Page</ProtectedRoute>
      },
      {
        path: 'community',
        element: <ProtectedRoute>Community Page</ProtectedRoute>
      },
      {
        path: 'settings',
        element: <ProtectedRoute>Settings Page</ProtectedRoute>
      }
    ]
  },
  {
    path: '*',
    element: <>404 Not found</>
  }
])
