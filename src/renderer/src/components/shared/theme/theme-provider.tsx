import { LucideIcon, MonitorCog, Moon, Sun } from 'lucide-react'
import { createContext, useContext, useEffect, useState } from 'react'

interface Theme {
  name: string
  variant: ThemeVariant
  Icon?: LucideIcon
}

export type ThemeVariant = 'dark' | 'light' | 'system'

const themes: Record<ThemeVariant, Theme> = {
  dark: {
    name: 'Dark',
    variant: 'dark',
    Icon: Moon
  },
  light: {
    name: 'Light',
    variant: 'light',
    Icon: Sun
  },
  system: {
    name: 'System',
    variant: 'system',
    Icon: MonitorCog
  }
} as const

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  themes: Theme[]
  setTheme: (variant: ThemeVariant) => void
}

const initialState: ThemeProviderState = {
  theme: themes['system'],
  themes: [],
  setTheme: () => null
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = themes['system'],
  storageKey = 'snapsave-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(storageKey) as ThemeVariant
    return storedTheme in themes ? themes[storedTheme] : defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement

    const updateTheme = (variant: ThemeVariant) => {
      root.classList.remove('light', 'dark')
      if (variant === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        root.classList.add(systemTheme)
      } else {
        root.classList.add(variant)
      }
    }

    updateTheme(theme.variant)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme.variant === 'system') {
        updateTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  const value = {
    theme,
    themes: Object.values(themes),
    setTheme: (variant: ThemeVariant) => {
      localStorage.setItem(storageKey, variant)
      setTheme(themes[variant])
    }
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
