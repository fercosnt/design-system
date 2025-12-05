# Tasks: Brand Book & Design System - Beauty Smile

> Gerado a partir de: [prd-brand-book-style-guide.md](./prd-brand-book-style-guide.md)

## Relevant Files

### Estrutura Brand Book
- `src/brand-book/` - Diretório principal do Brand Book
- `src/brand-book/components/` - Componentes de display (CopyButton, TokenCard, etc.)
- `src/brand-book/*.mdx` - Páginas MDX do Brand Book

### Assets
- `src/assets/logos/svg/horizontal/` - Logos horizontais SVG
- `src/assets/logos/svg/vertical/` - Logos verticais SVG
- `src/assets/logos/svg/isotipo/` - Logos isotipo SVG
- `src/assets/logos/svg/tipografico/` - Logos tipográficos SVG
- `src/assets/logos/3d/png/` - Logos 3D PNG
- `src/assets/logos/3d/webp/` - Logos 3D WebP
- `src/assets/decorative/` - Elementos decorativos SVG

### Configuração
- `.storybook/main.ts` - Configuração principal Storybook
- `.storybook/preview.ts` - Configuração de preview e ordenação
- `project-context.md` - Contexto do projeto para IA

### Componentes
- `src/components/ui/Button/Button.docs.md` - Documentação Button
- `src/components/ui/Sidebar/` - Componente Sidebar (extrair)
- `src/components/ui/MetricCard/` - Componente MetricCard (extrair)
- `src/components/ui/ProgressBar/` - Componente ProgressBar (criar)

### Tokens
- `src/tokens/colors.ts` - Tokens de cores
- `src/tokens/typography.ts` - Tokens de tipografia
- `src/tokens/spacing.ts` - Tokens de espaçamento
- `src/tokens/shadows.ts` - Tokens de sombras
- `src/tokens/animations.ts` - Tokens de animação

### Notes

- As páginas MDX devem ser criadas em `src/brand-book/`
- Componentes de display devem usar Tailwind CSS e tokens existentes
- Usar Lucide React para ícones
- Copy-to-clipboard usa Navigator Clipboard API nativa

---

## Instructions for Completing Tasks

**IMPORTANT:** As you complete each task, you must check it off in this markdown file by changing `- [ ]` to `- [x]`. This helps track progress and ensures you don't skip any steps.

Example:
- `- [ ] 1.1 Read file` → `- [x] 1.1 Read file` (after completing)

Update the file after completing each sub-task, not just after completing an entire parent task.

---

## Tasks

### Fase 0: Setup

- [x] 0.0 Create feature branch
  - [x] 0.1 Create and checkout a new branch: `git checkout -b feature/brand-book-design-system`

### Fase 1: Foundation

- [x] 1.0 Criar estrutura de diretórios do Brand Book
  - [x] 1.1 Criar diretório `src/brand-book/`
  - [x] 1.2 Criar diretório `src/brand-book/components/`
  - [x] 1.3 Criar arquivo barrel `src/brand-book/components/index.ts`
  - [x] 1.4 Criar arquivo barrel `src/brand-book/index.ts`

- [x] 2.0 Organizar assets de logos SVG
  - [x] 2.1 Criar estrutura de pastas `src/assets/logos/svg/{horizontal,vertical,isotipo,tipografico}/`
  - [x] 2.2 Mover logos horizontais de `Artes/Logos SVG/BS_Horizontal_*.svg` para `src/assets/logos/svg/horizontal/`
  - [x] 2.3 Mover logos verticais de `Artes/Logos SVG/BS_Vertical_*.svg` e `BeautySmile_Vertical_*.svg` para `src/assets/logos/svg/vertical/`
  - [x] 2.4 Mover logos isotipo de `Artes/Logos SVG/BS_Isotipo_*.svg` para `src/assets/logos/svg/isotipo/`
  - [x] 2.5 Mover logos tipográficos de `Artes/Logos SVG/BS_Tipografico_*.svg` para `src/assets/logos/svg/tipografico/`
  - [x] 2.6 Mover 3D PNGs de `Artes/3D png/` para `src/assets/logos/3d/png/`
  - [x] 2.7 Mover 3D WebPs de `Artes/3D Webp/` para `src/assets/logos/3d/webp/`
  - [x] 2.8 Mover elementos decorativos de `Artes/Elementos Diversos/` para `src/assets/decorative/`
  - [x] 2.9 Criar arquivo `src/assets/logos/index.ts` com exports tipados
  - [x] 2.10 Criar arquivo `src/assets/decorative/index.ts` com exports

- [x] 3.0 Criar componentes utilitários do Brand Book
  - [x] 3.1 Criar `src/brand-book/components/CopyButton.tsx` - botão copy-to-clipboard com feedback
  - [x] 3.2 Criar `src/brand-book/components/CopyButton.stories.tsx`
  - [x] 3.3 Criar `src/brand-book/components/TokenCard.tsx` - card para exibir token individual
  - [x] 3.4 Criar `src/brand-book/components/TokenCard.stories.tsx`
  - [x] 3.5 Criar `src/brand-book/components/ColorSwatch.tsx` - exibição de cor com HEX, RGB, CSS var
  - [x] 3.6 Criar `src/brand-book/components/ColorSwatch.stories.tsx`
  - [x] 3.7 Criar `src/brand-book/components/PropsTable.tsx` - tabela de propriedades de componente
  - [x] 3.8 Criar `src/brand-book/components/PropsTable.stories.tsx`
  - [x] 3.9 Criar `src/brand-book/components/DesignSpecsTable.tsx` - tabela de specs de design
  - [x] 3.10 Criar `src/brand-book/components/CodeSnippet.tsx` - bloco de código com copy
  - [x] 3.11 Atualizar barrel exports em `src/brand-book/components/index.ts`

- [x] 4.0 Atualizar configuração do Storybook
  - [x] 4.1 Atualizar `.storybook/main.ts` para incluir `src/brand-book/**/*.mdx`
  - [x] 4.2 Atualizar `.storybook/main.ts` staticDirs para novos assets
  - [x] 4.3 Atualizar `.storybook/preview.ts` com ordenação de stories (Brand Book primeiro)
  - [x] 4.4 Atualizar `.storybook/theme.ts` com logo da marca

- [x] 5.0 Criar project-context.md
  - [x] 5.1 Criar arquivo `project-context.md` na raiz com estrutura do projeto
  - [x] 5.2 Documentar localização de tokens, componentes e templates
  - [x] 5.3 Adicionar log de sessões

### Fase 2: Brand Book Pages

- [x] 6.0 Criar página Introduction.mdx
  - [x] 6.1 Criar `src/brand-book/Introduction.mdx`
  - [x] 6.2 Adicionar visão geral do Design System
  - [x] 6.3 Adicionar arquitetura e estrutura
  - [x] 6.4 Adicionar instruções de instalação e uso
  - [x] 6.5 Adicionar links para outras seções

- [x] 7.0 Criar página BrandVoice.mdx
  - [x] 7.1 Criar `src/brand-book/BrandVoice.mdx`
  - [x] 7.2 Adicionar seção Arquétipos (O Mago + O Prestativo)
  - [x] 7.3 Adicionar seção Tom de Voz (5 adjetivos)
  - [x] 7.4 Adicionar seção Vocabulário (usar/evitar)
  - [x] 7.5 Adicionar seção Emoções a Despertar
  - [x] 7.6 Adicionar seção Metáfora Central (Alquimia do Sorriso)
  - [x] 7.7 Adicionar frases que capturam a essência

- [x] 8.0 Criar página LogoSystem.mdx
  - [x] 8.1 Criar `src/brand-book/LogoSystem.mdx`
  - [x] 8.2 Criar componente `LogoGrid.tsx` para exibir variações
  - [x] 8.3 Criar componente `Logo3DShowcase.tsx` para logos 3D
  - [x] 8.4 Adicionar seção versões (horizontal, vertical, isotipo, tipográfico)
  - [x] 8.5 Adicionar seção cores (azul, branco, cinza, dourado, preto, turquesa)
  - [x] 8.6 Adicionar seção 3D metálicos (ouro, prata)
  - [x] 8.7 Adicionar seção área de proteção (1x altura do símbolo)
  - [x] 8.8 Adicionar seção tamanhos mínimos (120px/80px/32px)
  - [x] 8.9 Adicionar seção guidelines de uso (Do's and Don'ts)
  - [x] 8.10 Adicionar botões de download para cada logo

- [x] 9.0 Criar página Typography.mdx
  - [x] 9.1 Criar `src/brand-book/Typography.mdx`
  - [x] 9.2 Criar componente `TypographyDisplay.tsx` para specimens
  - [x] 9.3 Adicionar seção Font Families (Inter, Montserrat, JetBrains Mono)
  - [x] 9.4 Adicionar seção Heading Styles (h1-h6) com preview
  - [x] 9.5 Adicionar seção Font Sizes (xs a 7xl) com copy
  - [x] 9.6 Adicionar seção Font Weights (thin a black)
  - [x] 9.7 Adicionar seção Line Heights
  - [x] 9.8 Adicionar seção Letter Spacing

- [x] 10.0 Criar página Colors.mdx
  - [x] 10.1 Criar `src/brand-book/Colors.mdx`
  - [x] 10.2 Adicionar seção Brand Colors (Primary, Secondary, Accent) com swatches
  - [x] 10.3 Adicionar seção Neutral Scale (white a black)
  - [x] 10.4 Adicionar seção Semantic Colors (success, warning, error, info)
  - [x] 10.5 Adicionar seção Theme Colors (Admin, Public)
  - [x] 10.6 Adicionar seção Glass Morphism Colors
  - [x] 10.7 Adicionar seção Chart Colors
  - [x] 10.8 Cada cor deve ter HEX, RGB, CSS var, Tailwind class com copy

- [x] 11.0 Criar página Spacing.mdx
  - [x] 11.1 Criar `src/brand-book/Spacing.mdx`
  - [x] 11.2 Criar componente `SpacingVisualizer.tsx` para escala visual
  - [x] 11.3 Adicionar seção Base Unit (4px)
  - [x] 11.4 Adicionar seção Spacing Scale (0-32) com visualização
  - [x] 11.5 Adicionar seção Semantic Spacing (xs a 5xl)
  - [x] 11.6 Adicionar seção Border Radius Scale
  - [x] 11.7 Adicionar seção Z-Index System
  - [x] 11.8 Adicionar seção Container Widths

- [x] 12.0 Criar página Effects.mdx
  - [x] 12.1 Criar `src/brand-book/Effects.mdx`
  - [x] 12.2 Criar componente `ShadowBox.tsx` para preview de sombras
  - [x] 12.3 Adicionar seção Box Shadows (sm a 2xl)
  - [x] 12.4 Adicionar seção Glass Shadows
  - [x] 12.5 Adicionar seção Drop Shadows
  - [x] 12.6 Adicionar seção Focus States
  - [x] 12.7 Adicionar seção Elevation System (level0 a level4)
  - [x] 12.8 Adicionar seção Colored Shadows

- [x] 13.0 Criar página Iconography.mdx
  - [x] 13.1 Criar `src/brand-book/Iconography.mdx`
  - [x] 13.2 Criar componente `IconGrid.tsx` para exibir ícones por categoria
  - [x] 13.3 Adicionar seção Icon Sizes (xs:12px, sm:16px, md:20px, lg:24px, xl:32px)
  - [x] 13.4 Adicionar seção Icon Weights/Stroke (light:1px, regular:1.5px, bold:2px)
  - [x] 13.5 Adicionar seção Navigation Icons (Menu, Chevron, Home, Arrow)
  - [x] 13.6 Adicionar seção Action Icons (Edit, Trash, Download, Save, Plus)
  - [x] 13.7 Adicionar seção Status Icons (Check, X, AlertTriangle, Info, Loader)
  - [x] 13.8 Adicionar seção User Icons (User, Mail, Phone, Message)
  - [x] 13.9 Adicionar seção Data Icons (BarChart, PieChart, TrendingUp)
  - [x] 13.10 Adicionar seção Usage Guidelines

### Fase 3: Component Documentation

- [ ] 14.0 Documentar Button
  - [ ] 14.1 Criar `src/components/ui/Button/Button.docs.md`
  - [ ] 14.2 Documentar Properties (variant, size, disabled, loading, leftIcon, rightIcon)
  - [ ] 14.3 Documentar Design Specs (padding, border-radius, font-size)
  - [ ] 14.4 Documentar States (default, hover, active, disabled, focus)
  - [ ] 14.5 Adicionar Usage Examples com código
  - [ ] 14.6 Adicionar Do's and Don'ts

- [ ] 15.0 Documentar Form Components (Input, Textarea, Checkbox)
  - [ ] 15.1 Criar `src/components/ui/Input/Input.docs.md`
  - [ ] 15.2 Criar `src/components/ui/Textarea/Textarea.docs.md`
  - [ ] 15.3 Criar `src/components/ui/Checkbox/Checkbox.docs.md`
  - [ ] 15.4 Documentar Properties de cada componente
  - [ ] 15.5 Documentar Design Specs de cada componente
  - [ ] 15.6 Adicionar Usage Examples

- [ ] 16.0 Documentar Card e GlassCard
  - [ ] 16.1 Criar `src/components/ui/Card/Card.docs.md`
  - [ ] 16.2 Criar `src/components/glass/GlassCard/GlassCard.docs.md`
  - [ ] 16.3 Documentar compound components (Header, Title, Content, Footer)
  - [ ] 16.4 Documentar Properties
  - [ ] 16.5 Adicionar Usage Examples

- [ ] 17.0 Documentar Feedback Components (Alert, Badge, Dialog)
  - [ ] 17.1 Criar `src/components/ui/Alert/Alert.docs.md`
  - [ ] 17.2 Criar `src/components/ui/Badge/Badge.docs.md`
  - [ ] 17.3 Criar `src/components/ui/Dialog/Dialog.docs.md`
  - [ ] 17.4 Documentar variantes de cada componente
  - [ ] 17.5 Adicionar Usage Examples

- [ ] 18.0 Documentar Table
  - [ ] 18.1 Criar `src/components/ui/Table/Table.docs.md`
  - [ ] 18.2 Documentar compound components (Header, Body, Row, Cell)
  - [ ] 18.3 Documentar Properties
  - [ ] 18.4 Adicionar Usage Examples com dados

- [ ] 19.0 Documentar Glass Components
  - [ ] 19.1 Criar `src/components/glass/GlassButton/GlassButton.docs.md`
  - [ ] 19.2 Criar `src/components/glass/GlassNavbar/GlassNavbar.docs.md`
  - [ ] 19.3 Criar `src/components/glass/GlassPanel/GlassPanel.docs.md`
  - [ ] 19.4 Documentar variantes (light, dark, accent)
  - [ ] 19.5 Adicionar Usage Examples

- [x] 20.0 Extrair e documentar Sidebar (PRIORIDADE 1)
  - [x] 20.1 Analisar Sidebar existente nos templates Admin
  - [x] 20.2 Criar `src/components/navigation/Sidebar/Sidebar.tsx`
  - [x] 20.3 Criar `src/components/navigation/Sidebar/Sidebar.stories.tsx`
  - [x] 20.4 Criar `src/components/navigation/Sidebar/Sidebar.docs.md`
  - [x] 20.5 Implementar variantes (collapsed, expanded)
  - [x] 20.6 Implementar suporte a items e subitems
  - [x] 20.7 Aplicar design tokens
  - [x] 20.8 Adicionar ao barrel export

- [x] 21.0 Extrair e documentar MetricCard (PRIORIDADE 2)
  - [x] 21.1 Analisar MetricCard existente nos templates Dashboard
  - [x] 21.2 Criar `src/components/data-display/MetricCard/MetricCard.tsx`
  - [x] 21.3 Criar `src/components/data-display/MetricCard/MetricCard.stories.tsx`
  - [x] 21.4 Criar `src/components/data-display/MetricCard/MetricCard.docs.md`
  - [x] 21.5 Implementar props (title, value, change, trend, icon)
  - [x] 21.6 Implementar variantes visuais
  - [x] 21.7 Aplicar design tokens
  - [x] 21.8 Adicionar ao barrel export

- [x] 22.0 Criar e documentar ProgressBar (PRIORIDADE 3)
  - [x] 22.1 Criar `src/components/ui/ProgressBar/ProgressBar.tsx`
  - [x] 22.2 Criar `src/components/ui/ProgressBar/ProgressBar.stories.tsx`
  - [x] 22.3 Criar `src/components/ui/ProgressBar/ProgressBar.docs.md`
  - [x] 22.4 Implementar props (value, max, showLabel, variant, size)
  - [x] 22.5 Implementar animação de progresso
  - [x] 22.6 Aplicar design tokens
  - [x] 22.7 Adicionar ao barrel export

- [x] 23.0 Criar e documentar SectionHeader
  - [x] 23.1 Criar `src/components/ui/SectionHeader/SectionHeader.tsx`
  - [x] 23.2 Criar `src/components/ui/SectionHeader/SectionHeader.stories.tsx`
  - [x] 23.3 Criar `src/components/ui/SectionHeader/SectionHeader.docs.md`
  - [x] 23.4 Implementar props (title, subtitle, action, icon)
  - [x] 23.5 Aplicar design tokens
  - [x] 23.6 Adicionar ao barrel export

### Fase 4: Templates & Polish

- [ ] 24.0 Criar página TemplatesGallery.mdx
  - [ ] 24.1 Criar `src/brand-book/TemplatesGallery.mdx`
  - [ ] 24.2 Criar componente `TemplateCard.tsx` para exibir preview
  - [ ] 24.3 Configurar geração automática de screenshots via Storybook
  - [ ] 24.4 Adicionar seção Admin Templates (Login, Dashboard, CRUD, etc.)
  - [ ] 24.5 Adicionar seção Public Templates (Landing, Login, Dashboard, etc.)
  - [ ] 24.6 Adicionar links para stories de cada template

- [ ] 25.0 Criar página Textures.mdx
  - [ ] 25.1 Criar `src/brand-book/Textures.mdx`
  - [ ] 25.2 Adicionar seção Brand Gradients
  - [ ] 25.3 Adicionar seção Background Images
  - [ ] 25.4 Adicionar seção Decorative Elements (6 SVGs)
  - [ ] 25.5 Adicionar seção Glass Morphism Effects
  - [ ] 25.6 Adicionar Usage Examples

- [ ] 26.0 Atualizar documentação existente
  - [ ] 26.1 Atualizar `README.md` com link para Storybook Brand Book
  - [ ] 26.2 Atualizar `docs/getting-started.md` com novas instruções
  - [ ] 26.3 Atualizar `docs/design-principles.md` com referências ao Brand Book
  - [ ] 26.4 Atualizar `docs/quick-start.md`

- [ ] 27.0 QA e testes finais
  - [ ] 27.1 Testar build do Storybook: `npm run build-storybook`
  - [ ] 27.2 Verificar todas as páginas MDX renderizam sem erros
  - [ ] 27.3 Testar todos os botões copy-to-clipboard
  - [ ] 27.4 Testar responsividade (mobile, tablet, desktop)
  - [ ] 27.5 Verificar acessibilidade (navegação por teclado)
  - [ ] 27.6 Testar links entre páginas
  - [ ] 27.7 Verificar ordenação correta no sidebar

### Fase 5: Finalização

- [ ] 28.0 Commit e merge
  - [ ] 28.1 Revisar todas as mudanças: `git status`
  - [ ] 28.2 Adicionar arquivos: `git add .`
  - [ ] 28.3 Criar commit: `git commit -m "feat: add Brand Book & Design System documentation"`
  - [ ] 28.4 Push da branch: `git push -u origin feature/brand-book-design-system`
  - [ ] 28.5 Criar Pull Request
  - [ ] 28.6 Merge após aprovação
