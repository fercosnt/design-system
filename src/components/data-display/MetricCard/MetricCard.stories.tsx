import type { Meta, StoryObj } from '@storybook/react'
import { MetricCard } from './MetricCard'
import { Users, DollarSign, Calendar, TrendingUp, Activity, Package, ShoppingCart, Clock } from 'lucide-react'

const meta: Meta<typeof MetricCard> = {
  title: 'Components/Data Display/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Card size variant',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'accent', 'success', 'warning', 'error'],
      description: 'Card color variant',
    },
    title: {
      control: 'text',
      description: 'Metric title',
    },
    value: {
      control: 'text',
      description: 'Metric value',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle',
    },
  },
}

export default meta
type Story = StoryObj<typeof MetricCard>

export const Default: Story = {
  args: {
    title: 'Total de Pacientes',
    value: '1,234',
    subtitle: 'Últimos 30 dias',
    icon: <Users size={20} />,
    trend: { value: 12, isPositive: true },
  },
}

export const WithNegativeTrend: Story = {
  args: {
    title: 'Cancelamentos',
    value: '23',
    subtitle: 'Esta semana',
    icon: <Calendar size={20} />,
    trend: { value: 8, isPositive: false },
  },
}

export const WithoutTrend: Story = {
  args: {
    title: 'Agendamentos Hoje',
    value: '42',
    icon: <Calendar size={20} />,
  },
}

export const Small: Story = {
  args: {
    title: 'Novos',
    value: '56',
    size: 'sm',
    icon: <Users size={16} />,
    trend: { value: 5, isPositive: true },
  },
}

export const Large: Story = {
  args: {
    title: 'Faturamento Mensal',
    value: 'R$ 125.430',
    subtitle: 'Dezembro 2025',
    size: 'lg',
    icon: <DollarSign size={24} />,
    trend: { value: 18, isPositive: true },
  },
}

export const PrimaryVariant: Story = {
  args: {
    title: 'Consultas Realizadas',
    value: '892',
    variant: 'primary',
    icon: <Activity size={20} />,
    trend: { value: 15, isPositive: true },
  },
}

export const AccentVariant: Story = {
  args: {
    title: 'Taxa de Satisfação',
    value: '98%',
    variant: 'accent',
    icon: <TrendingUp size={20} />,
  },
}

export const SuccessVariant: Story = {
  args: {
    title: 'Metas Atingidas',
    value: '12/12',
    subtitle: 'Todas as metas do mês',
    variant: 'success',
    icon: <TrendingUp size={20} />,
  },
}

export const WarningVariant: Story = {
  args: {
    title: 'Estoque Baixo',
    value: '5 itens',
    subtitle: 'Necessita reposição',
    variant: 'warning',
    icon: <Package size={20} />,
  },
}

export const ErrorVariant: Story = {
  args: {
    title: 'Atrasos',
    value: '3',
    subtitle: 'Pacientes aguardando',
    variant: 'error',
    icon: <Clock size={20} />,
  },
}

export const Clickable: Story = {
  args: {
    title: 'Vendas do Dia',
    value: 'R$ 4.560',
    icon: <ShoppingCart size={20} />,
    trend: { value: 22, isPositive: true },
    onClick: () => alert('Card clicado!'),
  },
}

export const MetricsGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
      <MetricCard
        title="Total de Pacientes"
        value="1,234"
        subtitle="Ativos no sistema"
        icon={<Users size={20} />}
        trend={{ value: 12, isPositive: true }}
      />
      <MetricCard
        title="Faturamento"
        value="R$ 45.678"
        subtitle="Este mês"
        icon={<DollarSign size={20} />}
        trend={{ value: 8, isPositive: true }}
      />
      <MetricCard
        title="Agendamentos"
        value="89"
        subtitle="Próximos 7 dias"
        icon={<Calendar size={20} />}
        trend={{ value: 3, isPositive: false }}
      />
      <MetricCard
        title="Taxa de Retorno"
        value="67%"
        subtitle="Pacientes que voltaram"
        icon={<TrendingUp size={20} />}
        trend={{ value: 5, isPositive: true }}
      />
    </div>
  ),
}

export const SizeComparison: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 items-start">
      <MetricCard
        title="Small"
        value="123"
        size="sm"
        icon={<Users size={16} />}
        trend={{ value: 5, isPositive: true }}
      />
      <MetricCard
        title="Medium (default)"
        value="456"
        size="md"
        icon={<Users size={20} />}
        trend={{ value: 10, isPositive: true }}
      />
      <MetricCard
        title="Large"
        value="789"
        size="lg"
        icon={<Users size={24} />}
        trend={{ value: 15, isPositive: true }}
      />
    </div>
  ),
}

export const VariantShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
      <MetricCard title="Default" value="100" variant="default" icon={<Activity size={20} />} />
      <MetricCard title="Primary" value="200" variant="primary" icon={<Activity size={20} />} />
      <MetricCard title="Accent" value="300" variant="accent" icon={<Activity size={20} />} />
      <MetricCard title="Success" value="400" variant="success" icon={<Activity size={20} />} />
      <MetricCard title="Warning" value="500" variant="warning" icon={<Activity size={20} />} />
      <MetricCard title="Error" value="600" variant="error" icon={<Activity size={20} />} />
    </div>
  ),
}
