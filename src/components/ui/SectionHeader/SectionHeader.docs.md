# SectionHeader

Header component for page sections with title, subtitle, icon, and optional actions.

## Overview

SectionHeader creates visual hierarchy and organizes content into clear sections. It provides consistent styling for section titles across the application.

## Properties

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `title` | `string` | Yes | - | Section title |
| `subtitle` | `string` | No | - | Optional description text |
| `icon` | `ReactNode` | No | - | Icon displayed before title |
| `actions` | `ReactNode` | No | - | Action buttons on the right |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'md'` | Size variant |
| `bordered` | `boolean` | No | `false` | Show bottom border |
| `align` | `'left' \| 'center'` | No | `'left'` | Content alignment |
| `className` | `string` | No | - | Additional CSS class |

## Design Specifications

### Size Specifications

| Size | Padding | Title Size | Subtitle Size |
|------|---------|------------|---------------|
| `sm` | 12px (py-3) | 18px (lg) | 12px (xs) |
| `md` | 16px (py-4) | 20px (xl) | 14px (sm) |
| `lg` | 24px (py-6) | 24px (2xl) | 16px (base) |

### Colors

| Element | Color |
|---------|-------|
| Title | `text-neutral-900` |
| Subtitle | `text-neutral-500` |
| Icon | `text-primary-500` |
| Border | `border-neutral-200` |

## Usage Examples

### Basic Usage

```tsx
import { SectionHeader } from '@/components/ui/SectionHeader'

<SectionHeader
  title="Configurações"
  subtitle="Gerencie suas preferências"
/>
```

### With Icon

```tsx
import { Settings } from 'lucide-react'

<SectionHeader
  title="Configurações"
  subtitle="Gerencie suas preferências"
  icon={<Settings size={24} />}
/>
```

### With Actions

```tsx
<SectionHeader
  title="Usuários"
  subtitle="Gerencie os usuários do sistema"
  icon={<Users size={24} />}
  actions={
    <>
      <Button variant="outline">Filtrar</Button>
      <Button>Novo Usuário</Button>
    </>
  }
/>
```

### Bordered

```tsx
<SectionHeader
  title="Agendamentos"
  bordered
/>
```

### Centered

```tsx
<SectionHeader
  title="Relatórios"
  subtitle="Gere e exporte relatórios"
  align="center"
/>
```

### Page Layout Example

```tsx
<div>
  <SectionHeader
    title="Dashboard"
    subtitle="Visão geral do sistema"
    size="lg"
  />

  <MetricCards />

  <SectionHeader
    title="Atividades Recentes"
    icon={<Activity />}
    bordered
    actions={<Button variant="outline">Ver todas</Button>}
  />

  <ActivityList />
</div>
```

## Do's and Don'ts

### Do's
- Use consistent sizes within the same page hierarchy
- Include subtitles for context when needed
- Use icons that match the section content
- Add action buttons for common section operations
- Use bordered variant to separate distinct sections

### Don'ts
- Don't use multiple large headers on the same page
- Don't omit titles for accessibility
- Don't use center alignment for sections with many actions
- Don't mix icon sizes within the same page

## Accessibility

- Uses semantic `<h2>` element for title
- Icon is decorative (hidden from screen readers)
- Maintains proper heading hierarchy
- Actions are keyboard accessible

## Related Components

- [Card](/docs/components-ui-card--docs) - Content containers
- [Button](/docs/components-ui-button--docs) - Action buttons
- [Sidebar](/docs/components-navigation-sidebar--docs) - Page navigation
