'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { CopyButton } from './CopyButton'

export interface CodeSnippetProps {
  /** Code content */
  code: string
  /** Programming language */
  language?: 'tsx' | 'css' | 'bash' | 'json' | 'typescript'
  /** Optional title */
  title?: string
  /** Show line numbers */
  showLineNumbers?: boolean
  /** Additional CSS classes */
  className?: string
}

/**
 * CodeSnippet - Display code with copy functionality
 *
 * @example
 * <CodeSnippet
 *   title="Usage"
 *   language="tsx"
 *   code={`<Button variant="primary">Click me</Button>`}
 * />
 */
export function CodeSnippet({
  code,
  language = 'tsx',
  title,
  showLineNumbers = false,
  className,
}: CodeSnippetProps) {
  const lines = code.trim().split('\n')

  return (
    <div className={cn('rounded-lg border border-neutral-200 overflow-hidden', className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 border-b border-neutral-700">
        <div className="flex items-center gap-2">
          {/* Fake window buttons */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {title && (
            <span className="ml-3 text-xs text-neutral-400">{title}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500">{language}</span>
          <CopyButton
            value={code}
            iconOnly
            size="sm"
            className="border-neutral-600 bg-neutral-700 text-neutral-300 hover:bg-neutral-600 hover:text-white"
          />
        </div>
      </div>

      {/* Code */}
      <div className="bg-neutral-900 p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="w-8 text-right pr-4 text-neutral-600 select-none">
                  {index + 1}
                </span>
              )}
              <code className="text-neutral-100">{line || ' '}</code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}

export default CodeSnippet
