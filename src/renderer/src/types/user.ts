import { User as SupabaseUser } from '@supabase/supabase-js'

export interface UserMetadata {
  email?: string
  email_verified?: boolean
  phone_verified?: boolean
  sub?: string
  username?: string
}

export interface User extends Omit<SupabaseUser, 'user_metadata'> {
  user_metadata: UserMetadata
}
