# ProgressBar

Progress indicator for tasks, loading states, and completion tracking. Supports multiple sizes, colors, and animation styles.

## Overview

ProgressBar displays the completion status of a task or process. It can show determinate progress (specific percentage) or indeterminate loading states.

## Properties

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `value` | `number` | Yes | - | Progress value (0-100) |
| `max` | `number` | No | `100` | Maximum value |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | No | `'md'` | Bar height |
| `variant` | `VariantType` | No | `'primary'` | Color variant |
| `showLabel` | `boolean` | No | `false` | Show percentage label |
| `labelPosition` | `'left' \| 'right' \| 'inside' \| 'top'` | No | `'right'` | Label position |
| `label` | `string` | No | - | Custom label text |
| `animated` | `boolean` | No | `true` | Animate progress changes |
| `striped` | `boolean` | No | `false` | Show striped pattern |
| `stripedAnimated` | `boolean` | No | `false` | Animate stripes |
| `indeterminate` | `boolean` | No | `false` | Indeterminate loading state |
| `className` | `string` | No | - | Container class |
| `trackClassName` | `string` | No | - | Track class |
| `fillClassName` | `string` | No | - | Fill class |

### VariantType

`'primary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral'`

## Design Specifications

### Size Specifications

| Size | Height | Label Size |
|------|--------|------------|
| `xs` | 4px (h-1) | 12px (xs) |
| `sm` | 8px (h-2) | 12px (xs) |
| `md` | 12px (h-3) | 14px (sm) |
| `lg` | 16px (h-4) | 16px (base) |

### Variant Colors

| Variant | Fill Color | CSS Variable |
|---------|------------|--------------|
| `primary` | `bg-primary-500` | `--color-primary` |
| `accent` | `bg-accent-500` | `--color-accent` |
| `success` | `bg-success-500` | `--color-success` |
| `warning` | `bg-warning-500` | `--color-warning` |
| `error` | `bg-error-500` | `--color-error` |
| `neutral` | `bg-neutral-500` | `--color-neutral-500` |

### Track

| Property | Value |
|----------|-------|
| Background | `bg-neutral-200` |
| Border Radius | `rounded-full` |
| Overflow | `hidden` |

## Animation Types

| Type | Description | Duration |
|------|-------------|----------|
| `animated` | Smooth width transitions | 500ms |
| `striped` | Diagonal stripe pattern | Static |
| `stripedAnimated` | Moving stripe animation | 1s loop |
| `indeterminate` | Left-right loading animation | 1.5s loop |

## Usage Examples

### Basic Usage

```tsx
import { ProgressBar } from '@/components/ui/ProgressBar'

<ProgressBar value={65} />
```

### With Label

```tsx
<ProgressBar value={75} showLabel />
<ProgressBar value={50} showLabel labelPosition="top" />
<ProgressBar value={80} showLabel labelPosition="inside" size="lg" />
```

### Different Sizes

```tsx
<ProgressBar value={60} size="xs" />
<ProgressBar value={60} size="sm" />
<ProgressBar value={60} size="md" />
<ProgressBar value={60} size="lg" />
```

### Color Variants

```tsx
<ProgressBar value={60} variant="primary" />
<ProgressBar value={60} variant="success" />
<ProgressBar value={60} variant="warning" />
<ProgressBar value={60} variant="error" />
```

### Striped Pattern

```tsx
<ProgressBar value={70} striped size="lg" />
<ProgressBar value={70} striped stripedAnimated size="lg" />
```

### Indeterminate Loading

```tsx
<ProgressBar indeterminate />
<ProgressBar indeterminate variant="accent" />
```

### Custom Label

```tsx
<ProgressBar
  value={3}
  max={10}
  showLabel
  label="3 de 10 etapas"
  labelPosition="top"
/>
```

### Use Cases

```tsx
{/* Upload Progress */}
<div>
  <span>Enviando arquivo...</span>
  <ProgressBar value={48} variant="accent" size="sm" />
</div>

{/* Goal Progress */}
<div>
  <span>Meta de Atendimentos: 85%</span>
  <ProgressBar value={85} variant="success" />
</div>

{/* Loading State */}
<div>
  <span>Carregando...</span>
  <ProgressBar indeterminate />
</div>
```

## Do's and Don'ts

### Do's
- Use appropriate colors for context (success for goals, error for limits)
- Show labels for user-facing progress indicators
- Use indeterminate mode when progress is unknown
- Keep progress bars visible during async operations
- Use consistent sizes within the same context

### Don'ts
- Don't use striped animation for critical/error states
- Don't hide progress during long-running operations
- Don't use multiple progress bars for the same task
- Don't animate completed progress bars

## Accessibility

- Uses `role="progressbar"` for screen readers
- Includes `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Indeterminate mode omits `aria-valuenow`
- Label provides additional context for assistive technology

## CSS Classes

The component adds the following CSS utilities:

```css
/* Striped Pattern */
.bg-stripes {
  background-image: linear-gradient(...);
  background-size: 1rem 1rem;
}

/* Striped Animation */
.animate-stripes {
  animation: stripes 1s linear infinite;
}

/* Indeterminate Animation */
.animate-indeterminate {
  animation: indeterminate 1.5s ease-in-out infinite;
}
```

## Related Components

- [MetricCard](/docs/components-data-display-metriccard--docs) - Dashboard metrics
- [Badge](/docs/components-ui-badge--docs) - Status indicators
- [Button](/docs/components-ui-button--docs) - Loading states
