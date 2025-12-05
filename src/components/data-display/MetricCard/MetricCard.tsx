/**
 * MetricCard Component
 * Beauty Smile Design System
 *
 * Card for displaying metrics with value, trend, and icon
 */

import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { cn } from '@/utils/cn'

export interface MetricCardProps {
  /**
   * Metric title
   */
  title: string
  /**
   * Metric value (number or formatted string)
   */
  value: string | number
  /**
   * Optional subtitle or description
   */
  subtitle?: string
  /**
   * Optional icon (React element)
   */
  icon?: React.ReactNode
  /**
   * Optional trend indicator
   */
  trend?: {
    /**
     * Trend value (percentage)
     */
    value: number
    /**
     * Whether trend is positive
     */
    isPositive: boolean
    /**
     * Custom label (e.g., "vs last month")
     */
    label?: string
  }
  /**
   * Card size variant
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Card variant
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error'
  /**
   * Click handler
   */
  onClick?: () => void
  /**
   * Additional class name
   */
  className?: string
}

/**
 * MetricCard Component
 *
 * Display key metrics with optional trend indicators and icons.
 * Supports multiple sizes and color variants.
 *
 * @example
 * ```tsx
 * <MetricCard
 *   title="Total de Pacientes"
 *   value="1,234"
 *   subtitle="Últimos 30 dias"
 *   icon={<Users />}
 *   trend={{ value: 12, isPositive: true }}
 * />
 * ```
 */
export const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  (
    {
      title,
      value,
      subtitle,
      icon,
      trend,
      size = 'md',
      variant = 'default',
      onClick,
      className,
    },
    ref
  ) => {
    const sizeClasses = {
      sm: {
        card: '',
        header: 'p-4 pb-2',
        content: 'p-4 pt-0',
        title: 'text-xs',
        value: 'text-xl',
        subtitle: 'text-xs',
        icon: 'text-sm',
      },
      md: {
        card: '',
        header: 'p-6 pb-2',
        content: 'p-6 pt-0',
        title: 'text-sm',
        value: 'text-2xl',
        subtitle: 'text-xs',
        icon: 'text-base',
      },
      lg: {
        card: '',
        header: 'p-8 pb-3',
        content: 'p-8 pt-0',
        title: 'text-base',
        value: 'text-4xl',
        subtitle: 'text-sm',
        icon: 'text-lg',
      },
    }

    const variantClasses = {
      default: {
        card: 'bg-white',
        title: 'text-neutral-600',
        value: 'text-neutral-900',
        icon: 'text-neutral-400',
      },
      primary: {
        card: 'bg-primary-50 border-primary-200',
        title: 'text-primary-700',
        value: 'text-primary-900',
        icon: 'text-primary-500',
      },
      accent: {
        card: 'bg-accent-50 border-accent-200',
        title: 'text-accent-700',
        value: 'text-accent-900',
        icon: 'text-accent-500',
      },
      success: {
        card: 'bg-success-50 border-success-200',
        title: 'text-success-700',
        value: 'text-success-900',
        icon: 'text-success-500',
      },
      warning: {
        card: 'bg-warning-50 border-warning-200',
        title: 'text-warning-700',
        value: 'text-warning-900',
        icon: 'text-warning-500',
      },
      error: {
        card: 'bg-error-50 border-error-200',
        title: 'text-error-700',
        value: 'text-error-900',
        icon: 'text-error-500',
      },
    }

    const sizes = sizeClasses[size]
    const variants = variantClasses[variant]

    return (
      <Card
        ref={ref}
        className={cn(
          variants.card,
          onClick && 'cursor-pointer hover:shadow-md transition-shadow',
          className
        )}
        onClick={onClick}
      >
        <CardHeader className={sizes.header}>
          <div className="flex items-center justify-between">
            <CardTitle className={cn(sizes.title, 'font-medium', variants.title)}>
              {title}
            </CardTitle>
            {icon && (
              <span className={cn(sizes.icon, variants.icon)}>{icon}</span>
            )}
          </div>
        </CardHeader>
        <CardContent className={sizes.content}>
          <div className="flex items-baseline justify-between gap-2">
            <p className={cn(sizes.value, 'font-bold', variants.value)}>
              {value}
            </p>
            {trend && (
              <span
                className={cn(
                  'text-sm font-medium flex items-center gap-1',
                  trend.isPositive ? 'text-success-600' : 'text-error-600'
                )}
              >
                <span aria-hidden="true">
                  {trend.isPositive ? '↑' : '↓'}
                </span>
                {Math.abs(trend.value)}%
              </span>
            )}
          </div>
          {(subtitle || trend?.label) && (
            <p className={cn(sizes.subtitle, 'text-neutral-500 mt-1')}>
              {subtitle || trend?.label}
            </p>
          )}
        </CardContent>
      </Card>
    )
  }
)

MetricCard.displayName = 'MetricCard'
