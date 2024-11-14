import { ProtectedRoute } from '@/components/shared/common'
import { DashboardPage, SignInPage, SignUpPage } from '@/pages'
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
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        )
      }
    ]
  }
])
