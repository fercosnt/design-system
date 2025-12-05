'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { CopyButton } from './CopyButton'

export interface TypographyDisplayProps {
  /** Font family name */
  fontFamily: string
  /** CSS font-family value */
  fontFamilyValue: string
  /** Font weight (optional for weight showcase) */
  fontWeight?: string | number
  /** Font size (optional) */
  fontSize?: string
  /** Line height (optional) */
  lineHeight?: string
  /** Sample text to display */
  sampleText?: string
  /** Show full character set */
  showCharset?: boolean
  /** Show all weights preview */
  showAllWeights?: boolean
  /** Additional CSS classes */
  className?: string
}

const CHARSET_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const CHARSET_LOWER = 'abcdefghijklmnopqrstuvwxyz'
const CHARSET_NUMBERS = '0123456789'
const CHARSET_SPECIAL = '!@#$%^&*()_+-=[]{}|;:,.<>?'

const WEIGHTS = [
  { name: 'Thin', value: 100 },
  { name: 'ExtraLight', value: 200 },
  { name: 'Light', value: 300 },
  { name: 'Regular', value: 400 },
  { name: 'Medium', value: 500 },
  { name: 'SemiBold', value: 600 },
  { name: 'Bold', value: 700 },
  { name: 'ExtraBold', value: 800 },
  { name: 'Black', value: 900 },
]

/**
 * TypographyDisplay - Display font specimens
 *
 * @example
 * <TypographyDisplay
 *   fontFamily="Inter"
 *   fontFamilyValue="'Inter', system-ui, sans-serif"
 *   showCharset
 * />
 */
export function TypographyDisplay({
  fontFamily,
  fontFamilyValue,
  fontWeight,
  fontSize = '24px',
  lineHeight,
  sampleText = 'The quick brown fox jumps over the lazy dog',
  showCharset = false,
  showAllWeights = false,
  className,
}: TypographyDisplayProps) {
  const fontStyle = {
    fontFamily: fontFamilyValue,
    fontWeight: fontWeight,
    fontSize: showAllWeights ? '18px' : fontSize,
    lineHeight: lineHeight,
  }

  return (
    <div className={cn('rounded-lg border border-neutral-200 overflow-hidden', className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-50 border-b border-neutral-200">
        <div>
          <h3 className="font-medium text-sm text-neutral-900">{fontFamily}</h3>
          <code className="font-mono text-xs text-neutral-500">{fontFamilyValue}</code>
        </div>
        <CopyButton value={fontFamilyValue} label="Copy" size="sm" />
      </div>

      {/* Sample */}
      <div className="p-6 space-y-4">
        {showAllWeights ? (
          <div className="space-y-3">
            {WEIGHTS.map((weight) => (
              <div key={weight.value} className="flex items-center gap-4">
                <span className="text-xs text-neutral-500 w-20">
                  {weight.name} ({weight.value})
                </span>
                <span style={{ ...fontStyle, fontWeight: weight.value }}>
                  {sampleText}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p style={fontStyle} className="text-neutral-900">
            {sampleText}
          </p>
        )}

        {showCharset && (
          <div className="pt-4 border-t border-neutral-100 space-y-2">
            <p style={{ ...fontStyle, fontSize: '16px' }} className="text-neutral-700">
              {CHARSET_UPPER}
            </p>
            <p style={{ ...fontStyle, fontSize: '16px' }} className="text-neutral-700">
              {CHARSET_LOWER}
            </p>
            <p style={{ ...fontStyle, fontSize: '16px' }} className="text-neutral-700">
              {CHARSET_NUMBERS}
            </p>
            <p style={{ ...fontStyle, fontSize: '14px' }} className="text-neutral-500">
              {CHARSET_SPECIAL}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TypographyDisplay
