/**
 * Beauty Smile Decorative Elements
 *
 * SVG decorative elements for visual enhancement.
 * Use as dividers, corner decorations, or background accents.
 */

// Decorative Elements
export { default as DecorativeElement02 } from './Elementos Diversos-02.svg'
export { default as DecorativeElement03 } from './Elementos Diversos-03.svg'
export { default as DecorativeElement04 } from './Elementos Diversos-04.svg'
export { default as DecorativeElement05 } from './Elementos Diversos-05.svg'
export { default as DecorativeElement06 } from './Elementos Diversos-06.svg'
export { default as DecorativeElement07 } from './Elementos Diversos-07.svg'

// Paths for dynamic usage
export const decorativeElementPaths = {
  element02: '/decorative/Elementos Diversos-02.svg',
  element03: '/decorative/Elementos Diversos-03.svg',
  element04: '/decorative/Elementos Diversos-04.svg',
  element05: '/decorative/Elementos Diversos-05.svg',
  element06: '/decorative/Elementos Diversos-06.svg',
  element07: '/decorative/Elementos Diversos-07.svg',
} as const

// Usage guidelines
export const decorativeUsage = {
  element02: 'Corner decoration, top-right accent',
  element03: 'Horizontal divider, section separator',
  element04: 'Background pattern element',
  element05: 'Frame corner decoration',
  element06: 'Flowing accent line',
  element07: 'Circular flourish element',
} as const
