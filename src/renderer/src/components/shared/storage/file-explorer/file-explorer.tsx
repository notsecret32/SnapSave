import { DataTable } from '@/components/ui/data-table'
import { FC } from 'react'
import { columns } from './columns'

export const FileExplorer: FC = () => {
  return <DataTable columns={columns} data={[{ id: '0', name: 'Core Keepers' }]} />
}
