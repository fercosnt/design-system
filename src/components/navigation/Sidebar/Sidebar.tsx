/**
 * Sidebar Component
 * Beauty Smile Design System
 *
 * Navigation sidebar with logo, menu items, and user section
 */

import * as React from 'react'
import { cn } from '@/utils/cn'

export interface SidebarNavItem {
  /**
   * Navigation item label
   */
  label: string
  /**
   * Navigation item icon
   */
  icon?: React.ReactNode
  /**
   * Whether this item is active
   */
  isActive?: boolean
  /**
   * Click handler
   */
  onClick?: () => void
  /**
   * Optional href for link items
   */
  href?: string
}

export interface SidebarProps {
  /**
   * Logo component or element to display at the top
   */
  logo?: React.ReactNode
  /**
   * Navigation items
   */
  navItems?: SidebarNavItem[]
  /**
   * User name to display in user section
   */
  userName?: string
  /**
   * User avatar URL
   */
  userAvatar?: string
  /**
   * Callback when profile is clicked
   */
  onProfileClick?: () => void
  /**
   * Callback when logout is clicked
   */
  onLogout?: () => void
  /**
   * Footer content (replaces default user section)
   */
  footer?: React.ReactNode
  /**
   * Whether sidebar is collapsed
   * @default false
   */
  collapsed?: boolean
  /**
   * Sidebar variant
   * @default 'dark'
   */
  variant?: 'dark' | 'light'
  /**
   * Additional class name
   */
  className?: string
}

/**
 * Sidebar Component
 *
 * Navigation sidebar with logo, menu items, and user section.
 * Supports dark and light variants, collapsed state, and custom footer.
 *
 * @example
 * ```tsx
 * <Sidebar
 *   logo={<BeautySmileLogo type="horizontal" size="md" />}
 *   navItems={[
 *     { label: 'Dashboard', icon: <Home />, isActive: true },
 *     { label: 'Usuários', icon: <Users /> },
 *     { label: 'Configurações', icon: <Settings /> },
 *   ]}
 *   userName="João Silva"
 *   onLogout={() => console.log('logout')}
 * />
 * ```
 */
export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      logo,
      navItems = [],
      userName,
      userAvatar,
      onProfileClick,
      onLogout,
      footer,
      collapsed = false,
      variant = 'dark',
      className,
    },
    ref
  ) => {
    const isDark = variant === 'dark'

    return (
      <aside
        ref={ref}
        className={cn(
          'flex flex-col transition-all duration-300',
          collapsed ? 'w-16' : 'w-64',
          isDark ? 'bg-primary-900 text-white' : 'bg-white text-neutral-900 border-r border-neutral-200',
          className
        )}
      >
        {/* Logo Section */}
        {logo && (
          <div
            className={cn(
              'p-6 border-b',
              isDark ? 'border-white/10' : 'border-neutral-200',
              collapsed && 'p-4 flex justify-center'
            )}
          >
            {logo}
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item, index) => {
            const Component = item.href ? 'a' : 'button'
            return (
              <Component
                key={index}
                href={item.href}
                onClick={item.onClick}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left',
                  collapsed && 'justify-center px-2',
                  item.isActive
                    ? isDark
                      ? 'bg-primary-700 text-white'
                      : 'bg-primary-50 text-primary-900'
                    : isDark
                      ? 'text-white/70 hover:bg-white/5 hover:text-white'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                )}
                title={collapsed ? item.label : undefined}
              >
                {item.icon && <span className="text-lg flex-shrink-0">{item.icon}</span>}
                {!collapsed && <span className="font-medium truncate">{item.label}</span>}
              </Component>
            )
          })}
        </nav>

        {/* Footer / User Section */}
        {footer ? (
          <div className={cn('border-t', isDark ? 'border-white/10' : 'border-neutral-200')}>
            {footer}
          </div>
        ) : userName ? (
          <div
            className={cn(
              'p-4 border-t',
              isDark ? 'border-white/10' : 'border-neutral-200'
            )}
          >
            <div className={cn('flex items-center gap-3', collapsed && 'justify-center')}>
              {userAvatar ? (
                <img
                  src={userAvatar}
                  alt={userName}
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
              ) : (
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0',
                    isDark ? 'bg-primary-700' : 'bg-primary-100'
                  )}
                >
                  <span
                    className={cn(
                      'text-lg font-semibold',
                      isDark ? 'text-white' : 'text-primary-900'
                    )}
                  >
                    {userName.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      'text-sm font-medium truncate',
                      isDark ? 'text-white' : 'text-neutral-900'
                    )}
                  >
                    {userName}
                  </p>
                  {onProfileClick && (
                    <button
                      onClick={onProfileClick}
                      className={cn(
                        'text-xs transition-colors',
                        isDark
                          ? 'text-white/60 hover:text-white'
                          : 'text-neutral-500 hover:text-neutral-900'
                      )}
                    >
                      Ver perfil
                    </button>
                  )}
                </div>
              )}
            </div>
            {!collapsed && onLogout && (
              <button
                onClick={onLogout}
                className={cn(
                  'mt-3 w-full px-4 py-2 text-sm rounded-lg transition-colors',
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                )}
              >
                Sair
              </button>
            )}
          </div>
        ) : null}
      </aside>
    )
  }
)

Sidebar.displayName = 'Sidebar'
