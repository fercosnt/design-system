'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { CopyButton } from './CopyButton'

export interface PropDefinition {
  /** Property name */
  name: string
  /** TypeScript type */
  type: string
  /** Is required */
  required: boolean
  /** Default value */
  default?: string
  /** Description */
  description: string
}

export interface PropsTableProps {
  /** Array of prop definitions */
  props: PropDefinition[]
  /** Table title */
  title?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * PropsTable - Display component properties in a table format
 *
 * @example
 * <PropsTable
 *   title="Button Props"
 *   props={[
 *     { name: 'variant', type: 'string', required: false, default: '"primary"', description: 'Visual style' },
 *     { name: 'size', type: 'string', required: false, default: '"md"', description: 'Button size' },
 *   ]}
 * />
 */
export function PropsTable({ props, title, className }: PropsTableProps) {
  return (
    <div className={cn('rounded-lg border border-neutral-200 overflow-hidden', className)}>
      {title && (
        <div className="px-4 py-3 bg-neutral-50 border-b border-neutral-200">
          <h3 className="font-medium text-sm text-neutral-900">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-200">
              <th className="px-4 py-2 text-left font-medium text-neutral-600">Property</th>
              <th className="px-4 py-2 text-left font-medium text-neutral-600">Type</th>
              <th className="px-4 py-2 text-left font-medium text-neutral-600">Required</th>
              <th className="px-4 py-2 text-left font-medium text-neutral-600">Default</th>
              <th className="px-4 py-2 text-left font-medium text-neutral-600">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, index) => (
              <tr
                key={prop.name}
                className={cn(
                  'border-b border-neutral-100 hover:bg-neutral-50/50',
                  index === props.length - 1 && 'border-b-0'
                )}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <code className="font-mono text-sm font-medium text-primary">
                      {prop.name}
                    </code>
                    <CopyButton value={prop.name} iconOnly size="sm" />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <code className="font-mono text-xs text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                    {prop.type}
                  </code>
                </td>
                <td className="px-4 py-3">
                  {prop.required ? (
                    <span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded">
                      Yes
                    </span>
                  ) : (
                    <span className="text-xs text-neutral-400">No</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {prop.default ? (
                    <code className="font-mono text-xs text-neutral-600">
                      {prop.default}
                    </code>
                  ) : (
                    <span className="text-xs text-neutral-400">-</span>
                  )}
                </td>
                <td className="px-4 py-3 text-neutral-600">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PropsTable
