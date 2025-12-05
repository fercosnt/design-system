import type { Meta, StoryObj } from '@storybook/react'
import { CopyButton } from './CopyButton'

const meta: Meta<typeof CopyButton> = {
  title: 'Brand Book/Components/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Value to copy to clipboard',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Button size',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Show only icon without label',
    },
  },
}

export default meta
type Story = StoryObj<typeof CopyButton>

export const Default: Story = {
  args: {
    value: '#00109E',
    label: 'Copy',
  },
}

export const Small: Story = {
  args: {
    value: 'bg-primary',
    label: 'Copy',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    value: 'font-family: Inter, sans-serif',
    label: 'Copy CSS',
    size: 'md',
  },
}

export const IconOnly: Story = {
  args: {
    value: '#35BFAD',
    iconOnly: true,
  },
}

export const WithLongValue: Story = {
  args: {
    value: '0 10px 15px -3px rgba(45, 46, 48, 0.1), 0 4px 6px -4px rgba(45, 46, 48, 0.1)',
    label: 'Copy Shadow',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm text-neutral-500 w-20">Small:</span>
        <CopyButton value="#00109E" label="HEX" size="sm" />
        <CopyButton value="bg-primary" label="Tailwind" size="sm" />
        <CopyButton value="#00109E" size="sm" iconOnly />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-neutral-500 w-20">Medium:</span>
        <CopyButton value="#00109E" label="HEX" size="md" />
        <CopyButton value="bg-primary" label="Tailwind" size="md" />
        <CopyButton value="#00109E" size="md" iconOnly />
      </div>
    </div>
  ),
}
