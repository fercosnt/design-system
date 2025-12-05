'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { CopyButton } from './CopyButton'
import { Download, RotateCcw } from 'lucide-react'

export interface Logo3DVariant {
  /** Logo name */
  name: string
  /** PNG source */
  srcPng?: string
  /** WebP source (preferred) */
  srcWebp?: string
  /** Metallic type */
  metallic?: 'ouro' | 'prata' | 'gold' | 'silver'
  /** Logo type */
  type?: 'horizontal' | 'vertical' | 'isotipo' | 'tipografico'
}

export interface Logo3DShowcaseProps {
  /** 3D logo variants to display */
  logos: Logo3DVariant[]
  /** Showcase title */
  title?: string
  /** Description */
  description?: string
  /** Number of columns */
  columns?: 2 | 3 | 4
  /** Enable rotation animation on hover */
  animateOnHover?: boolean
  /** Background style */
  background?: 'gradient' | 'dark' | 'light'
  /** Additional CSS classes */
  className?: string
}

/**
 * Logo3DShowcase - Display 3D metallic logos with special effects
 *
 * @example
 * <Logo3DShowcase
 *   title="Metallic Logos"
 *   logos={[
 *     { name: 'Gold Horizontal', srcWebp: '/logos/3d/gold-horizontal.webp', metallic: 'gold' },
 *     { name: 'Silver Vertical', srcWebp: '/logos/3d/silver-vertical.webp', metallic: 'silver' },
 *   ]}
 *   animateOnHover
 * />
 */
export function Logo3DShowcase({
  logos,
  title,
  description,
  columns = 3,
  animateOnHover = true,
  background = 'gradient',
  className,
}: Logo3DShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  const columnClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }

  const backgroundClasses = {
    gradient: 'bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900',
    dark: 'bg-neutral-900',
    light: 'bg-neutral-100',
  }

  const handleDownload = (logo: Logo3DVariant, format: 'webp' | 'png') => {
    const src = format === 'webp' ? logo.srcWebp : logo.srcPng
    if (!src) return

    const link = document.createElement('a')
    link.href = src
    link.download = `${logo.name}.${format}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getMetallicGradient = (metallic?: string) => {
    switch (metallic) {
      case 'ouro':
      case 'gold':
        return 'from-amber-200 via-yellow-400 to-amber-600'
      case 'prata':
      case 'silver':
        return 'from-slate-200 via-slate-400 to-slate-600'
      default:
        return 'from-neutral-200 via-neutral-400 to-neutral-600'
    }
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
        {logos.map((logo, index) => {
          const src = logo.srcWebp || logo.srcPng
          const isHovered = hoveredIndex === index

          return (
            <div
              key={`${logo.name}-${index}`}
              className="rounded-xl border border-neutral-700 overflow-hidden shadow-2xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Preview Area with 3D effect */}
              <div
                className={cn(
                  'relative p-8 flex items-center justify-center min-h-[160px]',
                  backgroundClasses[background]
                )}
              >
                {/* Glow effect */}
                <div
                  className={cn(
                    'absolute inset-0 opacity-30 blur-3xl transition-opacity duration-500',
                    `bg-gradient-to-r ${getMetallicGradient(logo.metallic)}`,
                    isHovered ? 'opacity-50' : 'opacity-20'
                  )}
                />

                {/* Logo with 3D transform */}
                <div
                  className={cn(
                    'relative transition-transform duration-500 ease-out',
                    animateOnHover && isHovered && 'scale-110'
                  )}
                  style={{
                    transform: animateOnHover && isHovered
                      ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg)'
                      : 'perspective(1000px)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {src && (
                    <img
                      src={src}
                      alt={`${logo.name} 3D logo`}
                      className="max-w-full max-h-28 object-contain drop-shadow-2xl"
                      style={{
                        filter: isHovered
                          ? 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))'
                          : 'drop-shadow(0 10px 25px rgba(0,0,0,0.3))',
                      }}
                    />
                  )}
                </div>

                {/* Metallic badge */}
                {logo.metallic && (
                  <div
                    className={cn(
                      'absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider',
                      logo.metallic === 'ouro' || logo.metallic === 'gold'
                        ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900'
                        : 'bg-gradient-to-r from-slate-300 to-slate-400 text-slate-800'
                    )}
                  >
                    {logo.metallic}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4 bg-neutral-800 border-t border-neutral-700">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-sm text-white">
                      {logo.name}
                    </h4>
                    {logo.type && (
                      <span className="text-xs text-neutral-400 capitalize">
                        {logo.type}
                      </span>
                    )}
                  </div>

                  {animateOnHover && (
                    <div className="text-neutral-500">
                      <RotateCcw size={14} />
                    </div>
                  )}
                </div>

                <div className="flex gap-1.5">
                  {logo.srcWebp && (
                    <CopyButton
                      value={logo.srcWebp}
                      label="Path"
                      size="sm"
                    />
                  )}
                  {logo.srcWebp && (
                    <button
                      onClick={() => handleDownload(logo, 'webp')}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded bg-neutral-700 hover:bg-neutral-600 text-neutral-200 transition-colors"
                    >
                      <Download size={12} />
                      WebP
                    </button>
                  )}
                  {logo.srcPng && (
                    <button
                      onClick={() => handleDownload(logo, 'png')}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded bg-neutral-700 hover:bg-neutral-600 text-neutral-200 transition-colors"
                    >
                      <Download size={12} />
                      PNG
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Logo3DShowcase
