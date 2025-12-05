import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'
import { useEffect, useState } from 'react'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/UI/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Progress value (0-100)',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size variant',
    },
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'success', 'warning', 'error', 'neutral'],
      description: 'Color variant',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right', 'inside', 'top'],
      description: 'Label position',
    },
    striped: {
      control: 'boolean',
      description: 'Show striped pattern',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate loading state',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    value: 65,
  },
}

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
}

export const LabelPositions: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <p className="text-sm text-neutral-500 mb-2">Right (default)</p>
        <ProgressBar value={60} showLabel labelPosition="right" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Left</p>
        <ProgressBar value={60} showLabel labelPosition="left" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Top</p>
        <ProgressBar value={60} showLabel labelPosition="top" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Inside</p>
        <ProgressBar value={60} showLabel labelPosition="inside" size="lg" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <p className="text-sm text-neutral-500 mb-2">Extra Small (xs)</p>
        <ProgressBar value={60} size="xs" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Small (sm)</p>
        <ProgressBar value={60} size="sm" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Medium (md) - default</p>
        <ProgressBar value={60} size="md" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Large (lg)</p>
        <ProgressBar value={60} size="lg" />
      </div>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <p className="text-sm text-neutral-500 mb-2">Primary</p>
        <ProgressBar value={60} variant="primary" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Accent</p>
        <ProgressBar value={60} variant="accent" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Success</p>
        <ProgressBar value={60} variant="success" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Warning</p>
        <ProgressBar value={60} variant="warning" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Error</p>
        <ProgressBar value={60} variant="error" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Neutral</p>
        <ProgressBar value={60} variant="neutral" />
      </div>
    </div>
  ),
}

export const Striped: Story = {
  args: {
    value: 70,
    striped: true,
    size: 'lg',
  },
}

export const StripedAnimated: Story = {
  args: {
    value: 70,
    striped: true,
    stripedAnimated: true,
    size: 'lg',
  },
}

export const Indeterminate: Story = {
  args: {
    value: 0,
    indeterminate: true,
  },
}

export const IndeterminateVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <ProgressBar value={0} indeterminate variant="primary" />
      <ProgressBar value={0} indeterminate variant="accent" />
      <ProgressBar value={0} indeterminate variant="success" />
    </div>
  ),
}

export const CustomLabel: Story = {
  args: {
    value: 3,
    max: 10,
    showLabel: true,
    label: '3 de 10 etapas',
    labelPosition: 'top',
  },
}

export const Animated: Story = {
  render: function AnimatedProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0
          return prev + 10
        })
      }, 500)

      return () => clearInterval(timer)
    }, [])

    return (
      <div className="space-y-4 w-80">
        <ProgressBar value={progress} showLabel />
        <p className="text-sm text-neutral-500 text-center">
          Animação automática de progresso
        </p>
      </div>
    )
  },
}

export const UseCases: Story = {
  render: () => (
    <div className="space-y-8 w-96">
      {/* Upload Progress */}
      <div className="p-4 border border-neutral-200 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Enviando arquivo...</span>
          <span className="text-sm text-neutral-500">2.4 MB / 5 MB</span>
        </div>
        <ProgressBar value={48} variant="accent" size="sm" />
      </div>

      {/* Goal Progress */}
      <div className="p-4 border border-neutral-200 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Meta de Atendimentos</span>
          <span className="text-sm text-success-600 font-medium">85%</span>
        </div>
        <ProgressBar value={85} variant="success" />
        <p className="text-xs text-neutral-500 mt-2">170 de 200 atendimentos realizados</p>
      </div>

      {/* Profile Completion */}
      <div className="p-4 border border-neutral-200 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Perfil</span>
          <span className="text-sm text-warning-600 font-medium">60% completo</span>
        </div>
        <ProgressBar value={60} variant="warning" />
        <p className="text-xs text-neutral-500 mt-2">Adicione foto e telefone para completar</p>
      </div>

      {/* Loading State */}
      <div className="p-4 border border-neutral-200 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium">Carregando dados...</span>
        </div>
        <ProgressBar value={0} indeterminate variant="primary" />
      </div>

      {/* Step Progress */}
      <div className="p-4 border border-neutral-200 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Etapa 2 de 4</span>
        </div>
        <ProgressBar value={50} showLabel labelPosition="inside" size="lg" label="50%" />
      </div>
    </div>
  ),
}
