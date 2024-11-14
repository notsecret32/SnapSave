import { useAuthStore } from '@/store'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { session } = useAuthStore()
  return !session?.access_token ? <Navigate to="/sign-in" /> : <>{children}</>
}
