/// <reference types="vite/client" />
/// <reference types="electron-vite/node" />

interface ImportMetaEnv {
  readonly RENDERER_VITE_SUPABASE_URL: string
  readonly RENDERER_VITE_SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
