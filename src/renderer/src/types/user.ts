import { User as SupabaseUser } from '@supabase/supabase-js'

export interface UserMetadata {
  email?: string
  username?: string
  avatar_path?: string
  email_verified?: boolean
  phone_verified?: boolean
  sub?: string
}

export interface User extends Omit<SupabaseUser, 'user_metadata'> {
  user_metadata: UserMetadata
}
