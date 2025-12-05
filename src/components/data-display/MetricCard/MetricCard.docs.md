# MetricCard

Card component for displaying key metrics with value, trend indicator, and icon. Ideal for dashboards and analytics views.

## Overview

MetricCard provides a consistent way to display important business metrics. It supports multiple sizes, color variants, and optional trend indicators to show positive or negative changes.

## Properties

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `title` | `string` | Yes | - | Metric title/label |
| `value` | `string \| number` | Yes | - | Metric value (formatted) |
| `subtitle` | `string` | No | - | Optional description text |
| `icon` | `ReactNode` | No | - | Optional icon element |
| `trend` | `TrendProps` | No | - | Trend indicator object |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'md'` | Card size variant |
| `variant` | `VariantType` | No | `'default'` | Color variant |
| `onClick` | `() => void` | No | - | Click handler (makes card interactive) |
| `className` | `string` | No | - | Additional CSS class |

### TrendProps

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `value` | `number` | Yes | Trend percentage value |
| `isPositive` | `boolean` | Yes | Whether trend is positive |
| `label` | `string` | No | Custom trend label |

### VariantType

`'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error'`

## Design Specifications

### Size Specifications

| Size | Padding | Title Size | Value Size | Icon Size |
|------|---------|------------|------------|-----------|
| `sm` | 16px | 12px (xs) | 20px (xl) | 14px |
| `md` | 24px | 14px (sm) | 24px (2xl) | 16px |
| `lg` | 32px | 16px (base) | 36px (4xl) | 20px |

### Variant Colors

| Variant | Background | Title | Value |
|---------|------------|-------|-------|
| `default` | `bg-white` | `text-neutral-600` | `text-neutral-900` |
| `primary` | `bg-primary-50` | `text-primary-700` | `text-primary-900` |
| `accent` | `bg-accent-50` | `text-accent-700` | `text-accent-900` |
| `success` | `bg-success-50` | `text-success-700` | `text-success-900` |
| `warning` | `bg-warning-50` | `text-warning-700` | `text-warning-900` |
| `error` | `bg-error-50` | `text-error-700` | `text-error-900` |

## Trend Indicator

| State | Color | Symbol |
|-------|-------|--------|
| Positive | `text-success-600` | ↑ |
| Negative | `text-error-600` | ↓ |

## Usage Examples

### Basic Usage

```tsx
import { MetricCard } from '@/components/data-display/MetricCard'
import { Users } from 'lucide-react'

<MetricCard
  title="Total de Pacientes"
  value="1,234"
  icon={<Users size={20} />}
/>
```

### With Trend Indicator

```tsx
<MetricCard
  title="Faturamento Mensal"
  value="R$ 45.678"
  subtitle="Dezembro 2025"
  icon={<DollarSign size={20} />}
  trend={{ value: 12, isPositive: true }}
/>
```

### Different Sizes

```tsx
<MetricCard title="Small" value="123" size="sm" />
<MetricCard title="Medium" value="456" size="md" />
<MetricCard title="Large" value="789" size="lg" />
```

### Color Variants

```tsx
<MetricCard title="Success" value="98%" variant="success" />
<MetricCard title="Warning" value="5 items" variant="warning" />
<MetricCard title="Error" value="3 issues" variant="error" />
```

### Clickable Card

```tsx
<MetricCard
  title="Agendamentos"
  value="42"
  onClick={() => navigate('/appointments')}
/>
```

### Dashboard Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <MetricCard title="Pacientes" value="1,234" icon={<Users />} />
  <MetricCard title="Faturamento" value="R$ 45k" icon={<DollarSign />} />
  <MetricCard title="Agendamentos" value="89" icon={<Calendar />} />
  <MetricCard title="Taxa de Retorno" value="67%" icon={<TrendingUp />} />
</div>
```

## Do's and Don'ts

### Do's
- Use consistent icon sizes within a grid
- Format numbers appropriately (1,234 not 1234)
- Include trend indicators for time-based metrics
- Use semantic variants for status-related metrics
- Keep titles concise and clear

### Don'ts
- Don't use more than 4-6 metrics in a single row
- Don't mix sizes in the same grid
- Don't use error variant for non-critical information
- Don't omit units for currency or percentage values

## Accessibility

- Interactive cards have `cursor-pointer` and hover states
- Trend indicators include appropriate color contrast
- Card structure uses semantic HTML elements
- Focus states are visible for keyboard navigation

## Related Components

- [Card](/docs/components-ui-card--docs) - Base card component
- [ProgressBar](/docs/components-ui-progressbar--docs) - Progress indicator
- [Sidebar](/docs/components-navigation-sidebar--docs) - Navigation sidebar
