import { GameSave } from '@/types'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<GameSave>[] = [
  {
    accessorKey: 'id',
    header: () => <div className="w-auto">#</div>
  },
  {
    accessorKey: 'name',
    header: 'Game Name'
  }
]
