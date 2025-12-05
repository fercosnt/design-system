import type { Meta, StoryObj } from '@storybook/react'
import { ColorSwatch } from './ColorSwatch'

const meta: Meta<typeof ColorSwatch> = {
  title: 'Brand Book/Components/ColorSwatch',
  component: ColorSwatch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Color name',
    },
    hex: {
      control: 'color',
      description: 'HEX color value',
    },
    cssVariable: {
      control: 'text',
      description: 'CSS variable name',
    },
    tailwindClass: {
      control: 'text',
      description: 'Tailwind class name',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Swatch size',
    },
    showCopy: {
      control: 'boolean',
      description: 'Show copy buttons',
    },
  },
}

export default meta
type Story = StoryObj<typeof ColorSwatch>

export const Default: Story = {
  args: {
    name: 'Primary',
    hex: '#00109E',
    cssVariable: '--color-primary',
    tailwindClass: 'bg-primary',
  },
}

export const Small: Story = {
  args: {
    name: 'Accent',
    hex: '#35BFAD',
    cssVariable: '--color-accent',
    tailwindClass: 'bg-accent',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    name: 'Secondary',
    hex: '#BB965B',
    cssVariable: '--color-secondary',
    tailwindClass: 'bg-secondary',
    size: 'lg',
  },
}

export const WithoutCopyButtons: Story = {
  args: {
    name: 'Neutral 500',
    hex: '#A5A7A9',
    cssVariable: '--color-neutral-500',
    tailwindClass: 'bg-neutral-500',
    showCopy: false,
  },
}

export const BrandColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <ColorSwatch
        name="Primary"
        hex="#00109E"
        cssVariable="--color-primary"
        tailwindClass="bg-primary"
      />
      <ColorSwatch
        name="Accent"
        hex="#35BFAD"
        cssVariable="--color-accent"
        tailwindClass="bg-accent"
      />
      <ColorSwatch
        name="Secondary"
        hex="#BB965B"
        cssVariable="--color-secondary"
        tailwindClass="bg-secondary"
      />
    </div>
  ),
}

export const NeutralScale: Story = {
  render: () => (
    <div className="flex gap-2">
      <ColorSwatch name="50" hex="#F8F9F9" cssVariable="--neutral-50" tailwindClass="bg-neutral-50" size="sm" />
      <ColorSwatch name="100" hex="#F1F2F2" cssVariable="--neutral-100" tailwindClass="bg-neutral-100" size="sm" />
      <ColorSwatch name="200" hex="#E8E9E8" cssVariable="--neutral-200" tailwindClass="bg-neutral-200" size="sm" />
      <ColorSwatch name="300" hex="#D6D7D5" cssVariable="--neutral-300" tailwindClass="bg-neutral-300" size="sm" />
      <ColorSwatch name="400" hex="#BFC0BE" cssVariable="--neutral-400" tailwindClass="bg-neutral-400" size="sm" />
      <ColorSwatch name="500" hex="#A5A7A9" cssVariable="--neutral-500" tailwindClass="bg-neutral-500" size="sm" />
      <ColorSwatch name="600" hex="#86898C" cssVariable="--neutral-600" tailwindClass="bg-neutral-600" size="sm" />
      <ColorSwatch name="700" hex="#6B6D70" cssVariable="--neutral-700" tailwindClass="bg-neutral-700" size="sm" />
      <ColorSwatch name="800" hex="#4A4C4E" cssVariable="--neutral-800" tailwindClass="bg-neutral-800" size="sm" />
      <ColorSwatch name="900" hex="#2D2E30" cssVariable="--neutral-900" tailwindClass="bg-neutral-900" size="sm" />
    </div>
  ),
}

export const SemanticColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <ColorSwatch
        name="Success"
        hex="#10B981"
        cssVariable="--color-success"
        tailwindClass="bg-success"
      />
      <ColorSwatch
        name="Warning"
        hex="#F59E0B"
        cssVariable="--color-warning"
        tailwindClass="bg-warning"
      />
      <ColorSwatch
        name="Error"
        hex="#EF4444"
        cssVariable="--color-error"
        tailwindClass="bg-error"
      />
      <ColorSwatch
        name="Info"
        hex="#35BFAD"
        cssVariable="--color-info"
        tailwindClass="bg-info"
      />
    </div>
  ),
}
