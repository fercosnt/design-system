'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { CopyButton } from './CopyButton'

export interface ShadowBoxProps {
  /** Shadow name */
  name: string
  /** CSS shadow value */
  value: string
  /** CSS variable */
  cssVariable: string
  /** Tailwind class */
  tailwindClass: string
  /** Preview background */
  background?: 'light' | 'dark' | 'gradient'
  /** Elevation level (for reference) */
  elevation?: number
  /** Additional CSS classes */
  className?: string
}

/**
 * ShadowBox - Display shadow effects with preview
 *
 * @example
 * <ShadowBox
 *   name="Shadow MD"
 *   value="0 4px 6px -1px rgb(0 0 0 / 0.1)"
 *   cssVariable="--shadow-md"
 *   tailwindClass="shadow-md"
 * />
 */
export function ShadowBox({
  name,
  value,
  cssVariable,
  tailwindClass,
  background = 'light',
  elevation,
  className,
}: ShadowBoxProps) {
  const backgroundClasses = {
    light: 'bg-neutral-100',
    dark: 'bg-neutral-800',
    gradient: 'bg-gradient-to-br from-accent to-primary',
  }

  return (
    <div className={cn('rounded-lg border border-neutral-200 overflow-hidden', className)}>
      {/* Preview Area */}
      <div className={cn('p-8 flex items-center justify-center', backgroundClasses[background])}>
        <div
          className="w-24 h-24 bg-white rounded-lg flex items-center justify-center"
          style={{ boxShadow: value }}
        >
          {elevation !== undefined && (
            <span className="font-mono text-xs text-neutral-400">
              L{elevation}
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-3 space-y-2 bg-white">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-sm text-neutral-900">{name}</h4>
          {elevation !== undefined && (
            <span className="text-xs text-neutral-500">Elevation {elevation}</span>
          )}
        </div>

        <code className="block font-mono text-xs text-neutral-500 truncate" title={value}>
          {value}
        </code>

        <div className="flex gap-1.5 pt-2 border-t border-neutral-100">
          <CopyButton value={value} label="CSS" size="sm" />
          <CopyButton value={cssVariable} label="Var" size="sm" />
          <CopyButton value={tailwindClass} label="TW" size="sm" />
        </div>
      </div>
    </div>
  )
}

export default ShadowBox
