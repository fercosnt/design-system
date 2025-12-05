import type { Meta, StoryObj } from '@storybook/react'
import { TokenCard } from './TokenCard'

const meta: Meta<typeof TokenCard> = {
  title: 'Brand Book/Components/TokenCard',
  component: TokenCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Token name',
    },
    value: {
      control: 'text',
      description: 'Token value',
    },
    cssVariable: {
      control: 'text',
      description: 'CSS variable name',
    },
    tailwindClass: {
      control: 'text',
      description: 'Tailwind class name',
    },
    description: {
      control: 'text',
      description: 'Token description',
    },
  },
}

export default meta
type Story = StoryObj<typeof TokenCard>

export const Default: Story = {
  args: {
    name: 'Primary',
    value: '#00109E',
    cssVariable: '--color-primary',
    tailwindClass: 'bg-primary',
    description: 'Main brand color for CTAs and headers',
  },
}

export const WithoutDescription: Story = {
  args: {
    name: 'Spacing 4',
    value: '16px',
    cssVariable: '--spacing-4',
    tailwindClass: 'p-4',
  },
}

export const Typography: Story = {
  args: {
    name: 'Font Size Base',
    value: '16px (1rem)',
    cssVariable: '--font-size-base',
    tailwindClass: 'text-base',
    description: 'Default body text size',
  },
}

export const Shadow: Story = {
  args: {
    name: 'Shadow MD',
    value: '0 4px 6px -1px rgba(45, 46, 48, 0.1)',
    cssVariable: '--shadow-md',
    tailwindClass: 'shadow-md',
    description: 'Medium elevation shadow for cards and dropdowns',
  },
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      <TokenCard
        name="Primary"
        value="#00109E"
        cssVariable="--color-primary"
        tailwindClass="bg-primary"
        description="Main brand color"
      />
      <TokenCard
        name="Accent"
        value="#35BFAD"
        cssVariable="--color-accent"
        tailwindClass="bg-accent"
        description="Secondary brand color"
      />
      <TokenCard
        name="Spacing SM"
        value="8px"
        cssVariable="--spacing-2"
        tailwindClass="p-2"
      />
      <TokenCard
        name="Spacing MD"
        value="16px"
        cssVariable="--spacing-4"
        tailwindClass="p-4"
      />
    </div>
  ),
}
