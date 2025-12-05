/**
 * TemplateCard Component
 * Beauty Smile Design System
 *
 * Card for displaying template previews in the Brand Book
 */

import * as React from 'react'
import { cn } from '@/utils/cn'
import { ExternalLink, Layout } from 'lucide-react'

export interface TemplateCardProps {
  /**
   * Template name
   */
  name: string
  /**
   * Template description
   */
  description: string
  /**
   * Category (admin, public)
   */
  category: 'admin' | 'public'
  /**
   * Storybook story path
   */
  storyPath?: string
  /**
   * Preview image URL (optional)
   */
  previewImage?: string
  /**
   * Key features list
   */
  features?: string[]
  /**
   * Template status
   */
  status?: 'stable' | 'beta' | 'deprecated'
}

/**
 * TemplateCard Component
 *
 * Displays a template preview with name, description, features, and link to Storybook story.
 */
export const TemplateCard: React.FC<TemplateCardProps> = ({
  name,
  description,
  category,
  storyPath,
  previewImage,
  features = [],
  status = 'stable',
}) => {
  const categoryColors = {
    admin: {
      bg: 'bg-primary-50',
      text: 'text-primary-700',
      border: 'border-primary-200',
      badge: 'bg-primary-100 text-primary-800',
    },
    public: {
      bg: 'bg-accent-50',
      text: 'text-accent-700',
      border: 'border-accent-200',
      badge: 'bg-accent-100 text-accent-800',
    },
  }

  const statusColors = {
    stable: 'bg-success-100 text-success-800',
    beta: 'bg-warning-100 text-warning-800',
    deprecated: 'bg-neutral-100 text-neutral-600',
  }

  const colors = categoryColors[category]

  return (
    <div
      className={cn(
        'rounded-lg border overflow-hidden transition-all hover:shadow-md',
        colors.border
      )}
    >
      {/* Preview Area */}
      <div
        className={cn(
          'h-40 flex items-center justify-center relative',
          colors.bg
        )}
      >
        {previewImage ? (
          <img
            src={previewImage}
            alt={`${name} preview`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Layout className={cn('w-12 h-12', colors.text)} />
            <span className={cn('text-sm font-medium', colors.text)}>
              {name}
            </span>
          </div>
        )}

        {/* Status Badge */}
        {status !== 'stable' && (
          <span
            className={cn(
              'absolute top-2 right-2 px-2 py-0.5 text-xs font-medium rounded',
              statusColors[status]
            )}
          >
            {status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 bg-white">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-neutral-900">{name}</h3>
          <span
            className={cn(
              'px-2 py-0.5 text-xs font-medium rounded capitalize',
              colors.badge
            )}
          >
            {category}
          </span>
        </div>

        <p className="text-sm text-neutral-600 mb-3">{description}</p>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-3">
            <ul className="text-xs text-neutral-500 space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-neutral-400" />
                  {feature}
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-neutral-400">
                  +{features.length - 3} more
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Story Link */}
        {storyPath && (
          <a
            href={`/?path=/docs/${storyPath}`}
            className={cn(
              'inline-flex items-center gap-1 text-sm font-medium transition-colors',
              colors.text,
              'hover:underline'
            )}
          >
            Ver no Storybook
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  )
}

TemplateCard.displayName = 'TemplateCard'
