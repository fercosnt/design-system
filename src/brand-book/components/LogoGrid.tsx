'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { CopyButton } from './CopyButton'
import { Download } from 'lucide-react'

export interface LogoVariant {
  /** Logo name */
  name: string
  /** Path to SVG file */
  src: string
  /** Logo color variant */
  color?: string
  /** Is this a 3D/metallic version? */
  is3D?: boolean
}

export interface LogoGridProps {
  /** Logo variants to display */
  logos: LogoVariant[]
  /** Grid title */
  title?: string
  /** Description */
  description?: string
  /** Number of columns */
  columns?: 2 | 3 | 4 | 6
  /** Background style for preview */
  background?: 'light' | 'dark' | 'checkered' | 'gradient'
  /** Show download button */
  showDownload?: boolean
  /** Show copy path button */
  showCopyPath?: boolean
  /** Additional CSS classes */
  className?: string
}

/**
 * LogoGrid - Display logo variants in a grid
 *
 * @example
 * <LogoGrid
 *   title="Horizontal Logos"
 *   logos={[
 *     { name: 'Azul', src: '/logos/horizontal/azul.svg', color: 'azul' },
 *     { name: 'Branco', src: '/logos/horizontal/branco.svg', color: 'branco' },
 *   ]}
 *   columns={3}
 *   background="checkered"
 * />
 */
export function LogoGrid({
  logos,
  title,
  description,
  columns = 3,
  background = 'checkered',
  showDownload = true,
  showCopyPath = true,
  className,
}: LogoGridProps) {
  const columnClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
  }

  const backgroundClasses = {
    light: 'bg-white',
    dark: 'bg-neutral-900',
    checkered: 'bg-[length:20px_20px] bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%),linear-gradient(-45deg,#f0f0f0_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f0f0f0_75%),linear-gradient(-45deg,transparent_75%,#f0f0f0_75%)] bg-white',
    gradient: 'bg-gradient-to-br from-accent to-primary',
  }

  const handleDownload = (src: string, name: string) => {
    const link = document.createElement('a')
    link.href = src
    link.download = `${name}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={cn('space-y-4', className)}>
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h3 className="font-semibold text-lg text-neutral-900">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-neutral-600">{description}</p>
          )}
        </div>
      )}

      <div className={cn('grid gap-4', columnClasses[columns])}>
        {logos.map((logo) => (
          <div
            key={`${logo.name}-${logo.color || 'default'}`}
            className="rounded-lg border border-neutral-200 overflow-hidden"
          >
            {/* Preview Area */}
            <div
              className={cn(
                'p-6 flex items-center justify-center min-h-[120px]',
                backgroundClasses[background]
              )}
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="max-w-full max-h-20 object-contain"
              />
            </div>

            {/* Info */}
            <div className="p-3 bg-white border-t border-neutral-100">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-medium text-sm text-neutral-900">
                    {logo.name}
                  </h4>
                  {logo.color && (
                    <span className="text-xs text-neutral-500 capitalize">
                      {logo.color}
                      {logo.is3D && ' • 3D'}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-1.5">
                {showCopyPath && (
                  <CopyButton value={logo.src} label="Path" size="sm" />
                )}
                {showDownload && (
                  <button
                    onClick={() => handleDownload(logo.src, logo.name)}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                  >
                    <Download size={12} />
                    SVG
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoGrid
