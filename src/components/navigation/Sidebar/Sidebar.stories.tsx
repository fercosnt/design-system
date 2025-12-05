import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { Home, Users, Settings, Calendar, FileText, BarChart3, Bell, HelpCircle } from 'lucide-react'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['dark', 'light'],
      description: 'Sidebar color variant',
    },
    collapsed: {
      control: 'boolean',
      description: 'Whether sidebar is collapsed',
    },
    userName: {
      control: 'text',
      description: 'User name to display',
    },
    userAvatar: {
      control: 'text',
      description: 'User avatar URL',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Sidebar>

const defaultNavItems = [
  { label: 'Dashboard', icon: <Home size={20} />, isActive: true },
  { label: 'Usuários', icon: <Users size={20} /> },
  { label: 'Agendamentos', icon: <Calendar size={20} /> },
  { label: 'Relatórios', icon: <BarChart3 size={20} /> },
  { label: 'Documentos', icon: <FileText size={20} /> },
  { label: 'Notificações', icon: <Bell size={20} /> },
  { label: 'Configurações', icon: <Settings size={20} /> },
  { label: 'Ajuda', icon: <HelpCircle size={20} /> },
]

const SimpleLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-lg bg-accent-500 flex items-center justify-center">
      <span className="text-white font-bold text-sm">BS</span>
    </div>
    <span className="font-heading font-bold text-lg">Beauty Smile</span>
  </div>
)

export const Dark: Story = {
  args: {
    logo: <SimpleLogo />,
    navItems: defaultNavItems,
    userName: 'Dr. João Silva',
    variant: 'dark',
    onProfileClick: () => console.log('Profile clicked'),
    onLogout: () => console.log('Logout clicked'),
  },
}

export const Light: Story = {
  args: {
    logo: <SimpleLogo />,
    navItems: defaultNavItems,
    userName: 'Dr. Maria Santos',
    variant: 'light',
    onProfileClick: () => console.log('Profile clicked'),
    onLogout: () => console.log('Logout clicked'),
  },
}

export const WithAvatar: Story = {
  args: {
    logo: <SimpleLogo />,
    navItems: defaultNavItems,
    userName: 'Dr. Ana Costa',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    variant: 'dark',
    onProfileClick: () => console.log('Profile clicked'),
    onLogout: () => console.log('Logout clicked'),
  },
}

export const Collapsed: Story = {
  args: {
    logo: (
      <div className="w-8 h-8 rounded-lg bg-accent-500 flex items-center justify-center">
        <span className="text-white font-bold text-sm">BS</span>
      </div>
    ),
    navItems: defaultNavItems,
    userName: 'Dr. João Silva',
    variant: 'dark',
    collapsed: true,
    onLogout: () => console.log('Logout clicked'),
  },
}

export const CollapsedLight: Story = {
  args: {
    logo: (
      <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
        <span className="text-white font-bold text-sm">BS</span>
      </div>
    ),
    navItems: defaultNavItems,
    userName: 'Dr. Maria Santos',
    variant: 'light',
    collapsed: true,
    onLogout: () => console.log('Logout clicked'),
  },
}

export const WithoutUser: Story = {
  args: {
    logo: <SimpleLogo />,
    navItems: defaultNavItems,
    variant: 'dark',
  },
}

export const WithCustomFooter: Story = {
  args: {
    logo: <SimpleLogo />,
    navItems: defaultNavItems.slice(0, 5),
    variant: 'dark',
    footer: (
      <div className="p-4">
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <p className="text-xs text-white/60 mb-2">Plano atual</p>
          <p className="font-semibold text-white">Professional</p>
          <button className="mt-2 text-xs text-accent-400 hover:text-accent-300 transition-colors">
            Fazer upgrade
          </button>
        </div>
      </div>
    ),
  },
}

export const MinimalNavigation: Story = {
  args: {
    logo: <SimpleLogo />,
    navItems: [
      { label: 'Dashboard', icon: <Home size={20} />, isActive: true },
      { label: 'Configurações', icon: <Settings size={20} /> },
    ],
    userName: 'Admin',
    variant: 'dark',
    onLogout: () => console.log('Logout clicked'),
  },
}

export const SideBySideComparison: Story = {
  render: () => (
    <div className="flex h-screen">
      <Sidebar
        logo={<SimpleLogo />}
        navItems={defaultNavItems}
        userName="Dr. João Silva"
        variant="dark"
        onProfileClick={() => {}}
        onLogout={() => {}}
      />
      <Sidebar
        logo={<SimpleLogo />}
        navItems={defaultNavItems}
        userName="Dr. Maria Santos"
        variant="light"
        onProfileClick={() => {}}
        onLogout={() => {}}
      />
    </div>
  ),
}
