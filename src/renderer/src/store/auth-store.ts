import { supabase } from '@/config'
import { User } from '@/types'
import {
  AuthError,
  Session,
  SignInWithPasswordCredentials,
  SignOut,
  SignUpWithPasswordCredentials
} from '@supabase/supabase-js'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface AuthStore {
  user: User | null
  session: Session | null
  error: AuthError | null
  signIn: (credentials: SignInWithPasswordCredentials) => Promise<void>
  signUp: (credentials: SignUpWithPasswordCredentials) => Promise<void>
  signOut: (options?: SignOut) => Promise<void>
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        session: null,
        error: null,
        signIn: async (credentials) => {
          const {
            data: { user, session },
            error
          } = await supabase.auth.signInWithPassword(credentials)

          if (error) {
            set({ error })
            return
          }

          if (!user || !session) {
            set({ error: new AuthError('Something went wrong') })
            return
          }

          set({ user, session })
        },
        signUp: async (credentials) => {
          const {
            data: { user, session },
            error
          } = await supabase.auth.signUp(credentials)

          if (error) {
            set({ error })
            return
          }

          if (!user || !session) {
            set({ error: new AuthError('Something went wrong') })
            return
          }

          set({ user, session })
        },
        signOut: async (options) => {
          const { error } = await supabase.auth.signOut(options)

          if (error) {
            set({ error })
            return
          }

          set({
            user: null,
            session: null,
            error: null
          })
        }
      }),
      { name: 'auth-storage' }
    ),
    { enabled: false }
  )
)
