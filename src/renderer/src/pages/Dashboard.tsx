import { Content } from '@/components/shared'
import { RootLayout } from '@/components/shared/layout'
import { DashboardSidebar, NavigationSidebar } from '@/components/shared/sidebar'
import { FC } from 'react'

export const Dashboard: FC = () => {
  return (
    <RootLayout>
      <NavigationSidebar />
      <DashboardSidebar />
      <Content>
        <h1>Dashboard</h1>
      </Content>
    </RootLayout>
  )
}
