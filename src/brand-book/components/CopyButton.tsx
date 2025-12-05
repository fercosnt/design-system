'use client'

import * as React from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '../../utils/cn'

export interface CopyButtonProps {
  /** Value to copy to clipboard */
  value: string
  /** Optional label to show */
  label?: string
  /** Size variant */
  size?: 'sm' | 'md'
  /** Additional CSS classes */
  className?: string
  /** Show only icon (no label) */
  iconOnly?: boolean
}

/**
 * CopyButton - Copy to clipboard with visual feedback
 *
 * @example
 * <CopyButton value="#00109E" label="Copy HEX" />
 * <CopyButton value="text-primary" iconOnly />
 */
export function CopyButton({
  value,
  label,
  size = 'sm',
  className,
  iconOnly = false,
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = value
      textArea.style.position = 'fixed'
      textArea.style.left = '-9999px'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const sizeClasses = {
    sm: 'h-7 px-2 text-xs gap-1',
    md: 'h-8 px-3 text-sm gap-1.5',
  }

  const iconSize = size === 'sm' ? 12 : 14

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        'inline-flex items-center justify-center rounded-md',
        'border border-neutral-200 bg-white',
        'text-neutral-600 hover:text-neutral-900',
        'hover:bg-neutral-50 hover:border-neutral-300',
        'transition-all duration-150',
        'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-1',
        copied && 'border-green-300 bg-green-50 text-green-600',
        sizeClasses[size],
        className
      )}
      aria-label={copied ? 'Copied!' : `Copy ${label || value}`}
    >
      {copied ? (
        <>
          <Check size={iconSize} className="text-green-500" />
          {!iconOnly && <span>Copied!</span>}
        </>
      ) : (
        <>
          <Copy size={iconSize} />
          {!iconOnly && label && <span>{label}</span>}
        </>
      )}
    </button>
  )
}

export default CopyButton
