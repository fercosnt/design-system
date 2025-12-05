/**
 * SectionHeader Component
 * Beauty Smile Design System
 *
 * Header component for page sections with title, subtitle, and optional actions
 */

import * as React from 'react'
import { cn } from '@/utils/cn'

export interface SectionHeaderProps {
  /**
   * Section title
   */
  title: string
  /**
   * Optional subtitle or description
   */
  subtitle?: string
  /**
   * Optional icon (displayed before title)
   */
  icon?: React.ReactNode
  /**
   * Action buttons or elements (displayed on the right)
   */
  actions?: React.ReactNode
  /**
   * Size variant
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether to show a bottom border
   * @default false
   */
  bordered?: boolean
  /**
   * Alignment of content
   * @default 'left'
   */
  align?: 'left' | 'center'
  /**
   * Additional class name
   */
  className?: string
}

/**
 * SectionHeader Component
 *
 * Header for page sections with title, subtitle, icon, and action buttons.
 * Use to create visual hierarchy and organize content sections.
 *
 * @example
 * ```tsx
 * <SectionHeader
 *   title="Configurações"
 *   subtitle="Gerencie suas preferências"
 *   icon={<Settings />}
 *   actions={<Button>Salvar</Button>}
 * />
 * ```
 */
export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      title,
      subtitle,
      icon,
      actions,
      size = 'md',
      bordered = false,
      align = 'left',
      className,
    },
    ref
  ) => {
    const sizeClasses = {
      sm: {
        container: 'py-3',
        title: 'text-lg',
        subtitle: 'text-xs',
        icon: 'text-lg',
        gap: 'gap-2',
      },
      md: {
        container: 'py-4',
        title: 'text-xl',
        subtitle: 'text-sm',
        icon: 'text-xl',
        gap: 'gap-3',
      },
      lg: {
        container: 'py-6',
        title: 'text-2xl',
        subtitle: 'text-base',
        icon: 'text-2xl',
        gap: 'gap-4',
      },
    }

    const sizes = sizeClasses[size]

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-start justify-between',
          sizes.container,
          bordered && 'border-b border-neutral-200 mb-4',
          align === 'center' && 'flex-col items-center text-center',
          className
        )}
      >
        <div
          className={cn(
            'flex items-start',
            sizes.gap,
            align === 'center' && 'flex-col items-center'
          )}
        >
          {icon && (
            <span className={cn('text-primary-500 flex-shrink-0 mt-0.5', sizes.icon)}>
              {icon}
            </span>
          )}
          <div className={align === 'center' ? 'text-center' : ''}>
            <h2 className={cn('font-heading font-semibold text-neutral-900', sizes.title)}>
              {title}
            </h2>
            {subtitle && (
              <p className={cn('text-neutral-500 mt-1', sizes.subtitle)}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {actions && (
          <div
            className={cn(
              'flex items-center gap-2 flex-shrink-0',
              align === 'center' && 'mt-4'
            )}
          >
            {actions}
          </div>
        )}
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'
