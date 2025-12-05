'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { CopyButton } from './CopyButton'

export interface TokenCardProps {
  /** Token name */
  name: string
  /** Token value */
  value: string
  /** CSS variable name */
  cssVariable?: string
  /** Tailwind class name */
  tailwindClass?: string
  /** Visual preview of the token */
  preview?: React.ReactNode
  /** Description of the token */
  description?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * TokenCard - Display a design token with copy functionality
 *
 * @example
 * <TokenCard
 *   name="spacing-4"
 *   value="16px"
 *   cssVariable="--spacing-4"
 *   tailwindClass="p-4"
 *   preview={<div className="w-4 h-4 bg-primary" />}
 * />
 */
export function TokenCard({
  name,
  value,
  cssVariable,
  tailwindClass,
  preview,
  description,
  className,
}: TokenCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-lg border border-neutral-200 bg-white p-4',
        'hover:border-neutral-300 hover:shadow-sm transition-all duration-150',
        className
      )}
    >
      {/* Preview Area */}
      {preview && (
        <div className="mb-3 flex items-center justify-center rounded-md bg-neutral-50 p-4 min-h-[60px]">
          {preview}
        </div>
      )}

      {/* Token Info */}
      <div className="space-y-2">
        {/* Name */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm font-medium text-neutral-900">
            {name}
          </span>
          <CopyButton value={value} iconOnly size="sm" />
        </div>

        {/* Value */}
        <div className="font-mono text-xs text-neutral-500">{value}</div>

        {/* Description */}
        {description && (
          <p className="text-xs text-neutral-400">{description}</p>
        )}

        {/* Copy Options */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100">
          {cssVariable && (
            <CopyButton value={cssVariable} label="CSS" size="sm" />
          )}
          {tailwindClass && (
            <CopyButton value={tailwindClass} label="Tailwind" size="sm" />
          )}
        </div>
      </div>
    </div>
  )
}

export default TokenCard
