/**
 * ProgressBar Component
 * Beauty Smile Design System
 *
 * Progress indicator for tasks, loading states, and completion tracking
 */

import * as React from 'react'
import { cn } from '@/utils/cn'

export interface ProgressBarProps {
  /**
   * Progress value (0-100)
   */
  value: number
  /**
   * Maximum value
   * @default 100
   */
  max?: number
  /**
   * Size variant
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /**
   * Color variant
   * @default 'primary'
   */
  variant?: 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral'
  /**
   * Whether to show percentage label
   * @default false
   */
  showLabel?: boolean
  /**
   * Label position (when showLabel is true)
   * @default 'right'
   */
  labelPosition?: 'left' | 'right' | 'inside' | 'top'
  /**
   * Custom label text (overrides percentage)
   */
  label?: string
  /**
   * Whether to animate the progress bar
   * @default true
   */
  animated?: boolean
  /**
   * Whether to show striped pattern
   * @default false
   */
  striped?: boolean
  /**
   * Whether the stripes should animate
   * @default false
   */
  stripedAnimated?: boolean
  /**
   * Whether to show indeterminate loading state
   * @default false
   */
  indeterminate?: boolean
  /**
   * Additional class name for container
   */
  className?: string
  /**
   * Additional class name for the progress bar track
   */
  trackClassName?: string
  /**
   * Additional class name for the progress bar fill
   */
  fillClassName?: string
}

/**
 * ProgressBar Component
 *
 * Display progress for tasks, uploads, goals, or loading states.
 * Supports multiple sizes, colors, and animation styles.
 *
 * @example
 * ```tsx
 * <ProgressBar value={75} showLabel />
 * <ProgressBar value={50} variant="success" striped />
 * <ProgressBar indeterminate variant="accent" />
 * ```
 */
export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      max = 100,
      size = 'md',
      variant = 'primary',
      showLabel = false,
      labelPosition = 'right',
      label,
      animated = true,
      striped = false,
      stripedAnimated = false,
      indeterminate = false,
      className,
      trackClassName,
      fillClassName,
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    const displayLabel = label ?? `${Math.round(percentage)}%`

    const sizeClasses = {
      xs: 'h-1',
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4',
    }

    const variantClasses = {
      primary: 'bg-primary-500',
      accent: 'bg-accent-500',
      success: 'bg-success-500',
      warning: 'bg-warning-500',
      error: 'bg-error-500',
      neutral: 'bg-neutral-500',
    }

    const labelSizeClasses = {
      xs: 'text-xs',
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    }

    const trackBase = cn(
      'w-full rounded-full bg-neutral-200 overflow-hidden',
      sizeClasses[size],
      trackClassName
    )

    const fillBase = cn(
      'h-full rounded-full',
      variantClasses[variant],
      animated && !indeterminate && 'transition-all duration-500 ease-out',
      striped && 'bg-stripes',
      stripedAnimated && 'animate-stripes',
      indeterminate && 'animate-indeterminate',
      fillClassName
    )

    const renderLabel = () => {
      if (!showLabel) return null

      return (
        <span
          className={cn(
            'font-medium text-neutral-700',
            labelSizeClasses[size],
            labelPosition === 'inside' && 'absolute inset-0 flex items-center justify-center text-white text-xs'
          )}
        >
          {displayLabel}
        </span>
      )
    }

    // Top label layout
    if (showLabel && labelPosition === 'top') {
      return (
        <div ref={ref} className={cn('w-full', className)}>
          <div className="flex justify-between mb-1">
            {renderLabel()}
          </div>
          <div className={trackBase}>
            <div
              className={fillBase}
              style={{ width: indeterminate ? '40%' : `${percentage}%` }}
              role="progressbar"
              aria-valuenow={indeterminate ? undefined : value}
              aria-valuemin={0}
              aria-valuemax={max}
            />
          </div>
        </div>
      )
    }

    // Left/Right label layout
    if (showLabel && (labelPosition === 'left' || labelPosition === 'right')) {
      return (
        <div
          ref={ref}
          className={cn('flex items-center gap-3 w-full', className)}
        >
          {labelPosition === 'left' && renderLabel()}
          <div className={cn(trackBase, 'flex-1')}>
            <div
              className={fillBase}
              style={{ width: indeterminate ? '40%' : `${percentage}%` }}
              role="progressbar"
              aria-valuenow={indeterminate ? undefined : value}
              aria-valuemin={0}
              aria-valuemax={max}
            />
          </div>
          {labelPosition === 'right' && renderLabel()}
        </div>
      )
    }

    // Inside label layout
    if (showLabel && labelPosition === 'inside') {
      return (
        <div ref={ref} className={cn('w-full', className)}>
          <div className={cn(trackBase, 'relative', size === 'xs' && 'h-4', size === 'sm' && 'h-5')}>
            <div
              className={fillBase}
              style={{ width: indeterminate ? '40%' : `${percentage}%` }}
              role="progressbar"
              aria-valuenow={indeterminate ? undefined : value}
              aria-valuemin={0}
              aria-valuemax={max}
            />
            {renderLabel()}
          </div>
        </div>
      )
    }

    // Default (no label)
    return (
      <div ref={ref} className={cn('w-full', className)}>
        <div className={trackBase}>
          <div
            className={fillBase}
            style={{ width: indeterminate ? '40%' : `${percentage}%` }}
            role="progressbar"
            aria-valuenow={indeterminate ? undefined : value}
            aria-valuemin={0}
            aria-valuemax={max}
          />
        </div>
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'
