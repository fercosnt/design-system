# Project Context - Beauty Smile Design System

Este arquivo mantém o contexto do projeto para sessões de desenvolvimento com IA.

## Overview

Design System completo para Beauty Smile - clínica odontológica premium especializada em harmonização orofacial e estética dental.

## Brand Identity

### Arquétipos
- **Primário:** O Mago (transformação, resultados surpreendentes)
- **Secundário:** O Prestativo (cuidado, acolhimento)

### Cores Principais
- **Primary (Azul):** #00109E - Confiança, expertise
- **Accent (Turquesa):** #35BFAD - Modernidade, inovação
- **Dourado:** Para versões premium/luxo

### Tom de Voz
- Confiante e acolhedor
- Profissional mas acessível
- Focado em transformação e resultados

## Estrutura de Arquivos

```
src/
├── assets/
│   ├── logos/
│   │   ├── svg/              # 43 logos SVG
│   │   │   ├── horizontal/   # 8 variantes
│   │   │   ├── vertical/     # 13 variantes
│   │   │   ├── isotipo/      # 12 variantes
│   │   │   └── tipografico/  # 8 variantes
│   │   ├── 3d-png/           # Logos 3D em PNG
│   │   ├── 3d-webp/          # Logos 3D em WebP
│   │   └── index.ts          # Exports tipados
│   └── decorative/
│       ├── *.svg             # Elementos decorativos
│       └── index.ts          # Exports tipados
├── brand-book/
│   ├── components/           # Componentes do Brand Book
│   │   ├── CopyButton.tsx
│   │   ├── TokenCard.tsx
│   │   ├── ColorSwatch.tsx
│   │   ├── PropsTable.tsx
│   │   ├── DesignSpecsTable.tsx
│   │   ├── CodeSnippet.tsx
│   │   ├── SpacingVisualizer.tsx
│   │   ├── ShadowBox.tsx
│   │   ├── TypographyDisplay.tsx
│   │   ├── IconGrid.tsx
│   │   ├── LogoGrid.tsx
│   │   ├── Logo3DShowcase.tsx
│   │   └── index.ts
│   ├── Introduction.mdx      # [DONE]
│   ├── BrandVoice.mdx        # [DONE]
│   ├── LogoSystem.mdx        # [DONE]
│   ├── Typography.mdx        # [DONE]
│   ├── Colors.mdx            # [DONE]
│   ├── Spacing.mdx           # [DONE]
│   ├── Effects.mdx           # [DONE]
│   ├── Iconography.mdx       # [DONE]
│   └── index.ts
├── components/ui/            # Componentes do Design System
├── tokens/                   # Design tokens
└── styles/                   # Estilos globais
```

## Design Tokens

### Cores
```typescript
// Importar de src/tokens/colors.ts
primary: '#00109E'
accent: '#35BFAD'
neutral: { 50-950 }
success: '#22C55E'
warning: '#F59E0B'
error: '#EF4444'
```

### Typography
```typescript
// Importar de src/tokens/typography.ts
fontFamily: {
  sans: 'Inter, system-ui, sans-serif',
  display: 'Montserrat, Inter, sans-serif'
}
fontSize: { xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl }
fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700 }
```

### Spacing
```typescript
// Importar de src/tokens/spacing.ts
spacing: { 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24 }
```

### Shadows
```typescript
// Importar de src/tokens/shadows.ts
shadow: { sm, DEFAULT, md, lg, xl, 2xl, inner }
```

## Componentes Existentes

### Atoms
- Button, Input, Textarea, Checkbox, Label
- Badge, Avatar, Separator

### Molecules
- Card, GlassCard, GlassButton
- Alert, Dialog, Select
- Table, Tabs

### Organisms
- GlassNavbar, GlassPanel, GlassSidebar

### Glass Components
Componentes com efeito glassmorphism característico da marca.

## Templates

- Admin Dashboard
- Public Platform
- Landing Page
- Hybrid Layout

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev           # Storybook dev server
npm run build         # Build do projeto
npm run build:storybook  # Build do Storybook

# Testes
npm test              # Jest tests
npm run lint          # ESLint
npm run typecheck     # TypeScript check
```

## Tarefas Pendentes

### Fase 1: Foundation - COMPLETA
- [x] Estrutura de diretorios
- [x] Assets de logos organizados
- [x] Componentes utilitarios (12)
- [x] Configuracao Storybook
- [x] Stories dos componentes

### Fase 2: Brand Book Pages - COMPLETA
- [x] Introduction.mdx
- [x] BrandVoice.mdx
- [x] LogoSystem.mdx
- [x] Typography.mdx
- [x] Colors.mdx
- [x] Spacing.mdx
- [x] Effects.mdx
- [x] Iconography.mdx

### Fase 3: Component Documentation - PENDENTE
- [ ] Documentar todos os componentes com PropsTable e DesignSpecs
- [ ] Extrair Sidebar do template (PRIORIDADE 1)
- [ ] Extrair MetricCard do template (PRIORIDADE 2)
- [ ] Criar ProgressBar (PRIORIDADE 3)

### Fase 4: Polish - PENDENTE
- [ ] TemplatesGallery.mdx
- [ ] Textures.mdx
- [ ] QA e testes

## Convenções

### Nomenclatura
- Componentes: PascalCase
- Arquivos: PascalCase.tsx para componentes, camelCase.ts para utils
- CSS Classes: Tailwind utilities + custom classes com prefixo `bs-`

### Documentação
Cada componente deve ter:
1. Props Interface documentada com JSDoc
2. Story com todas as variantes
3. Arquivo .docs.md (opcional) para documentação extensa

### Icons
Usar Lucide React para todos os ícones. Importar individualmente:
```tsx
import { Menu, ChevronLeft, Check } from 'lucide-react'
```

## Referências

- PRD: `tasks/prd-brand-book-style-guide.md`
- Task List: `tasks/tasks-brand-book-design-system.md`
- Brand Voice: `Beauty Smile/02-Beauty-Smile-Brand-DNA-Communication.md`
- Logos SVG: `Artes/Logos SVG/`
- 3D Logos: `Artes/3D png/`, `Artes/3D Webp/`

---

## Session Log

### 2025-12-05 - Sessao 1: Setup Inicial e Brand Book

**Objetivo:** Criar Brand Book completo no Storybook

**Concluido:**
- [x] Feature branch: `feature/brand-book-design-system`
- [x] Estrutura de diretorios `src/brand-book/`
- [x] Organizacao de 43 logos SVG em categorias
- [x] Copia de logos 3D (PNG/WebP) e elementos decorativos
- [x] Criacao de 12 componentes utilitarios:
  - CopyButton, TokenCard, ColorSwatch, PropsTable
  - DesignSpecsTable, CodeSnippet, SpacingVisualizer
  - ShadowBox, TypographyDisplay, IconGrid
  - LogoGrid, Logo3DShowcase
- [x] Stories para componentes principais
- [x] Configuracao Storybook (preview.ts com ordenacao)
- [x] Theme.ts com logo da marca
- [x] 8 paginas MDX do Brand Book:
  - Introduction, BrandVoice, LogoSystem
  - Typography, Colors, Spacing
  - Effects, Iconography
- [x] project-context.md

**Proximos passos:**
- Fase 3: Documentar componentes existentes
- Fase 3: Extrair Sidebar, MetricCard, criar ProgressBar
- Fase 4: TemplatesGallery.mdx, Textures.mdx
- Fase 5: QA, commit e merge
