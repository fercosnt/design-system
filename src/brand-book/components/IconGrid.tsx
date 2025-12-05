'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { CopyButton } from './CopyButton'
import * as LucideIcons from 'lucide-react'

export interface IconGridProps {
  /** List of icon names to display */
  icons: string[]
  /** Category name */
  category?: string
  /** Icon size in pixels */
  size?: number
  /** Stroke width */
  strokeWidth?: number
  /** Number of columns */
  columns?: 4 | 5 | 6 | 8
  /** Additional CSS classes */
  className?: string
}

/**
 * IconGrid - Display icons from Lucide in a grid
 *
 * @example
 * <IconGrid
 *   category="Navigation"
 *   icons={['Menu', 'ChevronLeft', 'ChevronRight', 'Home']}
 *   size={24}
 * />
 */
export function IconGrid({
  icons,
  category,
  size = 24,
  strokeWidth = 1.5,
  columns = 6,
  className,
}: IconGridProps) {
  const columnClasses = {
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    8: 'grid-cols-8',
  }

  return (
    <div className={cn('space-y-3', className)}>
      {category && (
        <h4 className="font-medium text-sm text-neutral-700">{category}</h4>
      )}
      <div className={cn('grid gap-2', columnClasses[columns])}>
        {icons.map((iconName) => {
          const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>>)[iconName]

          if (!IconComponent) {
            return (
              <div
                key={iconName}
                className="flex flex-col items-center justify-center p-3 rounded-lg border border-red-200 bg-red-50"
              >
                <span className="text-xs text-red-500">Not found</span>
                <span className="text-xs text-red-400 truncate w-full text-center">
                  {iconName}
                </span>
              </div>
            )
          }

          return (
            <div
              key={iconName}
              className="group flex flex-col items-center justify-center p-3 rounded-lg border border-neutral-200 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer"
            >
              <IconComponent size={size} strokeWidth={strokeWidth} className="text-neutral-700 group-hover:text-primary" />
              <span className="mt-2 text-xs text-neutral-500 truncate w-full text-center">
                {iconName}
              </span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                <CopyButton
                  value={`<${iconName} />`}
                  iconOnly
                  size="sm"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IconGrid
