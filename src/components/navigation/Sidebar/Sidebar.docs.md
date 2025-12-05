# Sidebar

Navigation sidebar with logo, menu items, and user section. Supports dark and light variants, collapsed state, and custom footer.

## Overview

The Sidebar component provides a consistent navigation experience for admin dashboards and applications. It features a logo area, navigation items with icons, and an optional user section.

## Properties

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `logo` | `ReactNode` | No | - | Logo component or element to display at the top |
| `navItems` | `SidebarNavItem[]` | No | `[]` | Array of navigation items |
| `userName` | `string` | No | - | User name to display in user section |
| `userAvatar` | `string` | No | - | User avatar URL |
| `onProfileClick` | `() => void` | No | - | Callback when profile link is clicked |
| `onLogout` | `() => void` | No | - | Callback when logout button is clicked |
| `footer` | `ReactNode` | No | - | Custom footer content (replaces user section) |
| `collapsed` | `boolean` | No | `false` | Whether sidebar is collapsed |
| `variant` | `'dark' \| 'light'` | No | `'dark'` | Sidebar color variant |
| `className` | `string` | No | - | Additional CSS class |

### SidebarNavItem

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `label` | `string` | Yes | - | Navigation item label |
| `icon` | `ReactNode` | No | - | Navigation item icon |
| `isActive` | `boolean` | No | `false` | Whether item is active |
| `onClick` | `() => void` | No | - | Click handler |
| `href` | `string` | No | - | Optional href for link items |

## Design Specifications

| Property | Dark Variant | Light Variant |
|----------|--------------|---------------|
| Width | 256px (w-64) | 256px (w-64) |
| Width (collapsed) | 64px (w-16) | 64px (w-16) |
| Background | `bg-primary-900` | `bg-white` |
| Text Color | `text-white` | `text-neutral-900` |
| Border | None | `border-r border-neutral-200` |
| Active Item BG | `bg-primary-700` | `bg-primary-50` |
| Hover Item BG | `bg-white/5` | `bg-neutral-100` |

## Variants

### Dark (Default)
Deep blue sidebar ideal for admin dashboards. Provides high contrast and professional appearance.

### Light
White sidebar with subtle borders. Better for public-facing applications or lighter themes.

### Collapsed
Compact mode showing only icons. Useful for maximizing content area while maintaining navigation access.

## States

| State | Description |
|-------|-------------|
| Default | Normal navigation state |
| Hover | Item background changes on hover |
| Active | Current page highlighted with distinct background |
| Collapsed | Shows only icons with tooltips |

## Usage Examples

### Basic Usage

```tsx
import { Sidebar } from '@/components/navigation/Sidebar'
import { Home, Users, Settings } from 'lucide-react'

<Sidebar
  logo={<Logo />}
  navItems={[
    { label: 'Dashboard', icon: <Home size={20} />, isActive: true },
    { label: 'Users', icon: <Users size={20} /> },
    { label: 'Settings', icon: <Settings size={20} /> },
  ]}
  userName="Dr. João Silva"
  onLogout={() => handleLogout()}
/>
```

### Light Variant

```tsx
<Sidebar
  variant="light"
  logo={<Logo />}
  navItems={navItems}
  userName="Maria Santos"
/>
```

### Collapsed State

```tsx
<Sidebar
  collapsed={true}
  logo={<CompactLogo />}
  navItems={navItems}
/>
```

### With Custom Footer

```tsx
<Sidebar
  logo={<Logo />}
  navItems={navItems}
  footer={
    <div className="p-4">
      <p>Plan: Professional</p>
      <button>Upgrade</button>
    </div>
  }
/>
```

## Do's and Don'ts

### Do's
- Use consistent icons from Lucide React
- Keep navigation items to 8 or fewer for usability
- Use the active state to indicate current page
- Include a logo for brand recognition
- Provide logout functionality for authenticated users

### Don'ts
- Don't nest navigation more than 2 levels deep
- Don't use different icon sizes within the same sidebar
- Don't hide critical navigation in collapsed mode without tooltips
- Don't mix dark and light variants in the same layout

## Accessibility

- Navigation items support keyboard navigation
- Active state is visually distinct
- Collapsed mode includes title attributes for screen readers
- Focus states are clearly visible

## Related Components

- [GlassNavbar](/docs/components-glass-glassnavbar--docs) - Glass morphism navigation bar
- [MetricCard](/docs/components-data-display-metriccard--docs) - Dashboard metric display
