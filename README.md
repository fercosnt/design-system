# Beauty Smile Design System

A comprehensive React component library and design system for Beauty Smile projects, featuring modern UI components, design tokens, and two distinct themes (Admin and Public).

## ✨ Features

- **60+ React Components** - Built with Radix UI primitives for accessibility
- **Design Tokens** - Colors, typography, spacing, shadows, and animations
- **Dual Themes** - Admin (Deep Blue #00109E) and Public (Turquoise #35BFAD)
- **Glass Morphism** - Modern frosted glass UI effects
- **TypeScript** - Full type safety and IntelliSense support
- **Storybook** - Interactive component documentation
- **Tailwind CSS 4.x** - Utility-first styling with custom tokens
- **Tree-shakeable** - Import only what you need

## 📦 Installation

### Via NPM (Recommended)

```bash
npm install @beautysmile/design-system

# Peer dependencies
npm install react react-dom tailwindcss
```

### Via Git Template

Clone this repository as a starting point for new projects:

```bash
# For Admin Dashboard projects
git clone https://github.com/beautysmile/design-system.git --branch admin-template

# For Public Platform projects
git clone https://github.com/beautysmile/design-system.git --branch public-template

# For Hybrid projects
git clone https://github.com/beautysmile/design-system.git --branch hybrid-template
```

## 🚀 Quick Start

### 1. Import Styles

In your app's entry point (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@beautysmile/design-system/styles'
```

### 2. Configure Tailwind CSS

Extend your `tailwind.config.ts`:

```typescript
import { tokens } from '@beautysmile/design-system/tokens'

export default {
  presets: [
    require('@beautysmile/design-system/tailwind.config'),
  ],
  // Your custom config...
}
```

### 3. Use Components

```tsx
import { Button, Card } from '@beautysmile/design-system/components'
import { colors } from '@beautysmile/design-system/tokens'

function App() {
  return (
    <Card>
      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  )
}
```

## 📚 Documentation

- **Storybook** - [https://beautysmile-design-system.vercel.app](https://beautysmile-design-system.vercel.app)
- **Getting Started Guide** - [docs/getting-started.md](docs/getting-started.md)
- **Component API** - See individual component stories in Storybook
- **Design Tokens** - [src/tokens/](src/tokens/)

## 🎨 Design Tokens

Access design tokens via JavaScript/TypeScript:

```typescript
import { colors, typography, spacing } from '@beautysmile/design-system/tokens'

// Colors
colors.primary.DEFAULT // '#00109E'
colors.accent.DEFAULT  // '#35BFAD'

// Typography
typography.headings.h1 // { fontSize: '3rem', fontWeight: '700', ... }

// Spacing
spacing[4] // '16px'
```

Or via CSS custom properties:

```css
.my-element {
  color: var(--color-primary);
  font-family: var(--font-heading);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-md);
}
```

## 🏗️ Project Structure

```
beautysmile-design-system/
├── src/
│   ├── tokens/           # Design tokens (colors, typography, etc.)
│   ├── components/       # React components
│   │   ├── atoms/        # Basic building blocks
│   │   ├── molecules/    # Composite components
│   │   └── organisms/    # Complex components
│   ├── templates/        # Page templates
│   │   ├── admin-dashboard/
│   │   ├── public-platform/
│   │   └── hybrid/
│   ├── assets/           # SVG logos, PNG backgrounds
│   └── styles/           # Global CSS
├── .storybook/           # Storybook configuration
├── examples/             # Usage examples
└── docs/                 # Documentation
```

## 🎯 Themes

### Admin Theme (Deep Blue)
- Primary Color: #00109E (Deep Blue)
- Use Case: HR/Admin dashboards, internal tools
- Features: Dark sidebar, professional aesthetic

### Public Theme (Turquoise)
- Primary Color: #35BFAD (Turquoise)
- Use Case: Public platforms, candidate areas, landing pages
- Features: Gradient backgrounds, glass morphism effects

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone repository
git clone https://github.com/beautysmile/design-system.git
cd design-system

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build

# Lint
npm run lint

# Format
npm run format
```

### Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build library for production
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build static Storybook
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and release notes.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🔗 Links

- **GitHub** - [https://github.com/beautysmile/design-system](https://github.com/beautysmile/design-system)
- **NPM** - [https://www.npmjs.com/package/@beautysmile/design-system](https://www.npmjs.com/package/@beautysmile/design-system)
- **Storybook** - [https://beautysmile-design-system.vercel.app](https://beautysmile-design-system.vercel.app)
- **Beauty Smile** - [https://beautysmile.com](https://beautysmile.com)

---

Made with ❤️ by the Beauty Smile team
