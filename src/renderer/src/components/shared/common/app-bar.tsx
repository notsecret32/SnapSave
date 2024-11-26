import { useTheme } from '@/components/shared/theme'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import clsx from 'clsx'
import { LayoutPanelLeftIcon, Minimize, Minus, X } from 'lucide-react'
import { FC } from 'react'

const actions = [
  {
    id: 'minimize',
    Icon: Minus
  },
  {
    id: 'something',
    Icon: Minimize
  },
  {
    id: 'close',
    Icon: X
  }
]

const ThemeSwitcher = () => {
  const { theme: currentTheme, themes, setTheme } = useTheme()

  return (
    <Popover>
      <PopoverTrigger>
        <div className="mr-1 rounded-md p-1 hover:bg-accent/90">
          <LayoutPanelLeftIcon size={18} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-1">
        <div className="flex flex-col gap-1">
          {themes.map(({ name, variant, Icon }) => (
            <div
              key={name}
              className={clsx('flex cursor-pointer items-center gap-1 rounded-md p-1', {
                ['bg-accent/90']: variant === currentTheme.variant
              })}
              onClick={() => setTheme(variant)}
            >
              {Icon && <Icon width={18} />}
              <p>{name}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
ThemeSwitcher.displayName = 'ThemeSwitcher'

export const AppBar: FC = () => {
  return (
    <div className="app-bar absolute inset-0 z-50 flex h-min items-center justify-end bg-transparent">
      <ThemeSwitcher />

      {actions.map(({ id, Icon }) => (
        <div key={id} className="px-4 py-2 hover:bg-accent/90">
          <Icon size={18} />
        </div>
      ))}
    </div>
  )
}
