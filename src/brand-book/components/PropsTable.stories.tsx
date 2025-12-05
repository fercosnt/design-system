import type { Meta, StoryObj } from '@storybook/react'
import { PropsTable } from './PropsTable'

const meta: Meta<typeof PropsTable> = {
  title: 'Brand Book/Components/PropsTable',
  component: PropsTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PropsTable>

export const Default: Story = {
  args: {
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'outline' | 'ghost'",
        required: false,
        default: "'primary'",
        description: 'Visual style variant of the button',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        required: false,
        default: "'md'",
        description: 'Size of the button',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the button is disabled',
      },
      {
        name: 'loading',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Shows loading spinner and disables button',
      },
      {
        name: 'onClick',
        type: '() => void',
        required: false,
        description: 'Click handler function',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Button content',
      },
    ],
  },
}

export const InputProps: Story = {
  args: {
    props: [
      {
        name: 'type',
        type: "'text' | 'email' | 'password' | 'number'",
        required: false,
        default: "'text'",
        description: 'Input type',
      },
      {
        name: 'placeholder',
        type: 'string',
        required: false,
        description: 'Placeholder text',
      },
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'Controlled input value',
      },
      {
        name: 'onChange',
        type: '(e: ChangeEvent) => void',
        required: false,
        description: 'Change handler',
      },
      {
        name: 'error',
        type: 'string',
        required: false,
        description: 'Error message to display',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the input is disabled',
      },
    ],
  },
}

export const CardProps: Story = {
  args: {
    props: [
      {
        name: 'variant',
        type: "'default' | 'outlined' | 'elevated'",
        required: false,
        default: "'default'",
        description: 'Card visual style',
      },
      {
        name: 'padding',
        type: "'none' | 'sm' | 'md' | 'lg'",
        required: false,
        default: "'md'",
        description: 'Internal padding',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Additional CSS classes',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Card content',
      },
    ],
  },
}

export const MinimalProps: Story = {
  args: {
    props: [
      {
        name: 'value',
        type: 'number',
        required: true,
        description: 'Current progress value',
      },
      {
        name: 'max',
        type: 'number',
        required: false,
        default: '100',
        description: 'Maximum value',
      },
    ],
  },
}
