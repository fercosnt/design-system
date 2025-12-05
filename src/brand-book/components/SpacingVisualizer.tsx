'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { CopyButton } from './CopyButton'

export interface SpacingValue {
  /** Token name */
  name: string
  /** Pixel value */
  value: string
  /** CSS variable */
  cssVariable: string
  /** Tailwind class */
  tailwindClass: string
}

export interface SpacingVisualizerProps {
  /** Array of spacing values */
  values: SpacingValue[]
  /** Display orientation */
  orientation?: 'horizontal' | 'vertical'
  /** Show labels */
  showLabels?: boolean
  /** Additional CSS classes */
  className?: string
}

/**
 * SpacingVisualizer - Visual representation of spacing scale
 *
 * @example
 * <SpacingVisualizer
 *   values={[
 *     { name: '1', value: '4px', cssVariable: '--spacing-1', tailwindClass: 'p-1' },
 *     { name: '2', value: '8px', cssVariable: '--spacing-2', tailwindClass: 'p-2' },
 *   ]}
 * />
 */
export function SpacingVisualizer({
  values,
  orientation = 'horizontal',
  showLabels = true,
  className,
}: SpacingVisualizerProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {values.map((spacing) => (
        <div
          key={spacing.name}
          className={cn(
            'flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-50 transition-colors',
            orientation === 'vertical' && 'flex-col items-start'
          )}
        >
          {/* Visual Bar */}
          <div className="flex items-center gap-3 min-w-[200px]">
            {showLabels && (
              <span className="font-mono text-xs text-neutral-500 w-8">
                {spacing.name}
              </span>
            )}
            <div
              className="h-4 bg-primary rounded"
              style={{ width: spacing.value }}
            />
          </div>

          {/* Info */}
          <div className="flex items-center gap-4">
            <code className="font-mono text-sm text-neutral-700 min-w-[50px]">
              {spacing.value}
            </code>
            <div className="flex gap-1.5">
              <CopyButton value={spacing.value} label="px" size="sm" />
              <CopyButton value={spacing.cssVariable} label="CSS" size="sm" />
              <CopyButton value={spacing.tailwindClass} label="TW" size="sm" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SpacingVisualizer
