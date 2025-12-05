import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeader } from './SectionHeader'
import { Button } from '../Button'
import { Settings, Users, FileText, BarChart3, Calendar, Plus, Download, Filter } from 'lucide-react'

const meta: Meta<typeof SectionHeader> = {
  title: 'Components/UI/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    bordered: {
      control: 'boolean',
      description: 'Show bottom border',
    },
    align: {
      control: 'select',
      options: ['left', 'center'],
      description: 'Content alignment',
    },
    title: {
      control: 'text',
      description: 'Section title',
    },
    subtitle: {
      control: 'text',
      description: 'Section subtitle',
    },
  },
}

export default meta
type Story = StoryObj<typeof SectionHeader>

export const Default: Story = {
  args: {
    title: 'Configurações',
    subtitle: 'Gerencie suas preferências e configurações da conta',
  },
}

export const WithIcon: Story = {
  args: {
    title: 'Configurações',
    subtitle: 'Gerencie suas preferências e configurações da conta',
    icon: <Settings size={24} />,
  },
}

export const WithActions: Story = {
  args: {
    title: 'Usuários',
    subtitle: 'Gerencie os usuários do sistema',
    icon: <Users size={24} />,
    actions: (
      <>
        <Button variant="outline" size="sm">
          <Filter size={16} className="mr-2" />
          Filtrar
        </Button>
        <Button size="sm">
          <Plus size={16} className="mr-2" />
          Novo Usuário
        </Button>
      </>
    ),
  },
}

export const Small: Story = {
  args: {
    title: 'Documentos Recentes',
    subtitle: 'Últimos arquivos acessados',
    icon: <FileText size={18} />,
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    title: 'Dashboard',
    subtitle: 'Visão geral do sistema e métricas principais',
    icon: <BarChart3 size={28} />,
    size: 'lg',
  },
}

export const Bordered: Story = {
  args: {
    title: 'Agendamentos',
    subtitle: 'Consultas e procedimentos agendados',
    icon: <Calendar size={24} />,
    bordered: true,
    actions: (
      <Button size="sm">
        <Plus size={16} className="mr-2" />
        Novo Agendamento
      </Button>
    ),
  },
}

export const Centered: Story = {
  args: {
    title: 'Relatórios',
    subtitle: 'Gere e exporte relatórios do sistema',
    icon: <BarChart3 size={24} />,
    align: 'center',
    actions: (
      <Button variant="outline" size="sm">
        <Download size={16} className="mr-2" />
        Exportar
      </Button>
    ),
  },
}

export const TitleOnly: Story = {
  args: {
    title: 'Seção Simples',
  },
}

export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <SectionHeader
        title="Small Header"
        subtitle="Tamanho pequeno para seções secundárias"
        icon={<Settings size={18} />}
        size="sm"
        bordered
      />
      <SectionHeader
        title="Medium Header"
        subtitle="Tamanho médio para seções principais"
        icon={<Settings size={24} />}
        size="md"
        bordered
      />
      <SectionHeader
        title="Large Header"
        subtitle="Tamanho grande para páginas principais"
        icon={<Settings size={28} />}
        size="lg"
        bordered
      />
    </div>
  ),
}

export const PageExample: Story = {
  render: () => (
    <div className="space-y-6">
      <SectionHeader
        title="Painel de Controle"
        subtitle="Bem-vindo de volta, Dr. João Silva"
        size="lg"
      />

      <div className="grid grid-cols-4 gap-4">
        <div className="h-24 bg-neutral-100 rounded-lg" />
        <div className="h-24 bg-neutral-100 rounded-lg" />
        <div className="h-24 bg-neutral-100 rounded-lg" />
        <div className="h-24 bg-neutral-100 rounded-lg" />
      </div>

      <SectionHeader
        title="Agendamentos de Hoje"
        subtitle="12 consultas programadas"
        icon={<Calendar size={20} />}
        bordered
        actions={
          <Button size="sm" variant="outline">
            Ver todos
          </Button>
        }
      />

      <div className="h-48 bg-neutral-100 rounded-lg" />

      <SectionHeader
        title="Últimas Atividades"
        icon={<FileText size={20} />}
        bordered
        size="sm"
      />

      <div className="h-32 bg-neutral-100 rounded-lg" />
    </div>
  ),
}
