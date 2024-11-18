import { useAuthStore } from '@/store'

export const useUser = () => {
  return useAuthStore((state) => state.user)
}
