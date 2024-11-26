import { Minimize, Minus, SunMoon, X } from 'lucide-react'
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

export const AppBar: FC = () => {
  return (
    <div className="app-bar absolute inset-0 z-50 flex h-min items-center justify-end bg-transparent">
      <div className="mr-1 rounded-md p-1 hover:bg-accent/90">
        <SunMoon size={18} />
      </div>
      {actions.map(({ id, Icon }) => (
        <div key={id} className="px-4 py-2 hover:bg-accent/90">
          <Icon size={18} />
        </div>
      ))}
    </div>
  )
}
