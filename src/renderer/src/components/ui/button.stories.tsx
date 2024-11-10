import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const DefaultStory: Story = {
  name: 'Default',
  args: {
    children: 'Button',
    variant: 'default'
  }
}

export const SecondaryStory: Story = {
  name: 'Secondary',
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}

export const OutlinedStory: Story = {
  name: 'Outlined',
  args: {
    children: 'Button',
    variant: 'outlined'
  }
}
