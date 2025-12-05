'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { CopyButton } from './CopyButton'

export interface DesignSpec {
  /** Property name */
  property: string
  /** Property value */
  value: string
}

export interface DesignSpecsTableProps {
  /** Array of design specifications */
  specs: DesignSpec[]
  /** Table title */
  title?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * DesignSpecsTable - Display design specifications in a compact table
 *
 * @example
 * <DesignSpecsTable
 *   title="Button Specs"
 *   specs={[
 *     { property: 'Padding', value: '16px 24px' },
 *     { property: 'Border Radius', value: '8px' },
 *   ]}
 * />
 */
export function DesignSpecsTable({ specs, title, className }: DesignSpecsTableProps) {
  return (
    <div className={cn('rounded-lg border border-neutral-200 overflow-hidden', className)}>
      {title && (
        <div className="px-4 py-3 bg-neutral-50 border-b border-neutral-200">
          <h3 className="font-medium text-sm text-neutral-900">{title}</h3>
        </div>
      )}
      <div className="divide-y divide-neutral-100">
        {specs.map((spec) => (
          <div
            key={spec.property}
            className="flex items-center justify-between px-4 py-2.5 hover:bg-neutral-50/50"
          >
            <span className="text-sm text-neutral-600">{spec.property}</span>
            <div className="flex items-center gap-2">
              <code className="font-mono text-sm text-neutral-900">{spec.value}</code>
              <CopyButton value={spec.value} iconOnly size="sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesignSpecsTable
