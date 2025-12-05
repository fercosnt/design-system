'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { CopyButton } from './CopyButton'

export interface ColorSwatchProps {
  /** Color name */
  name: string
  /** HEX color value */
  hex: string
  /** RGB color value */
  rgb?: string
  /** HSL color value */
  hsl?: string
  /** CSS variable name */
  cssVariable: string
  /** Tailwind class name */
  tailwindClass: string
  /** Size of the swatch */
  size?: 'sm' | 'md' | 'lg'
  /** Show WCAG contrast info */
  showContrast?: boolean
  /** Additional CSS classes */
  className?: string
}

/**
 * ColorSwatch - Display a color with all format options
 *
 * @example
 * <ColorSwatch
 *   name="Primary"
 *   hex="#00109E"
 *   cssVariable="--color-primary"
 *   tailwindClass="bg-primary"
 * />
 */
export function ColorSwatch({
  name,
  hex,
  rgb,
  hsl,
  cssVariable,
  tailwindClass,
  size = 'md',
  showContrast = false,
  className,
}: ColorSwatchProps) {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-20',
    lg: 'h-32',
  }

  // Determine if text should be light or dark based on color
  const isLightColor = React.useMemo(() => {
    const hexColor = hex.replace('#', '')
    const r = parseInt(hexColor.substr(0, 2), 16)
    const g = parseInt(hexColor.substr(2, 2), 16)
    const b = parseInt(hexColor.substr(4, 2), 16)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance > 0.5
  }, [hex])

  return (
    <div
      className={cn(
        'rounded-lg border border-neutral-200 overflow-hidden bg-white',
        'hover:border-neutral-300 hover:shadow-sm transition-all duration-150',
        className
      )}
    >
      {/* Color Preview */}
      <div
        className={cn(
          'w-full flex items-end justify-between p-3',
          sizeClasses[size]
        )}
        style={{ backgroundColor: hex }}
      >
        <span
          className={cn(
            'font-mono text-xs font-medium',
            isLightColor ? 'text-neutral-800' : 'text-white'
          )}
        >
          {hex.toUpperCase()}
        </span>
        {showContrast && (
          <span
            className={cn(
              'text-xs px-1.5 py-0.5 rounded',
              isLightColor ? 'bg-black/10 text-neutral-800' : 'bg-white/20 text-white'
            )}
          >
            {isLightColor ? 'Dark text' : 'Light text'}
          </span>
        )}
      </div>

      {/* Color Info */}
      <div className="p-3 space-y-2">
        {/* Name */}
        <h4 className="font-medium text-sm text-neutral-900">{name}</h4>

        {/* Values */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-500">HEX</span>
            <code className="font-mono text-xs text-neutral-700">{hex}</code>
          </div>
          {rgb && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-500">RGB</span>
              <code className="font-mono text-xs text-neutral-700">{rgb}</code>
            </div>
          )}
          {hsl && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-500">HSL</span>
              <code className="font-mono text-xs text-neutral-700">{hsl}</code>
            </div>
          )}
        </div>

        {/* Copy Options */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100">
          <CopyButton value={hex} label="HEX" size="sm" />
          <CopyButton value={cssVariable} label="CSS" size="sm" />
          <CopyButton value={tailwindClass} label="TW" size="sm" />
        </div>
      </div>
    </div>
  )
}

export default ColorSwatch
