# PRD: Brand Book & Design System - Beauty Smile

## 1. Introduction/Overview

O Beauty Smile Design System precisa evoluir de uma biblioteca de componentes para um **Design System completo e documentado**, servindo como:

- **Brand Book visual** para designers, stakeholders e fornecedores externos
- **Documentação técnica** com props, specs e exemplos para desenvolvedores
- **Base de design** reutilizável para criar novos projetos rapidamente com Cursor/Claude Code
- **Single Source of Truth** para tokens, componentes e padrões

### Problema Atual
- Sistema difícil de implementar em novos projetos
- Documentação dispersa e incompleta
- Falta de especificações detalhadas por componente (props, design specs)
- Ausência de sistema de ícones documentado
- Brand assets não organizados
- Componentes existem nos templates mas não estão extraídos

### Solução
Criar um Brand Book completo no Storybook com:
- Páginas MDX interativas com copy-to-clipboard
- Documentação detalhada por componente (props, specs, examples)
- Sistema de ícones completo
- Brand Voice integrado
- Galeria de logos com todas as variações
- Workflow otimizado para criar novos projetos

---

## 2. Goals

1. **Criar Brand Book visual completo** com 10+ páginas MDX no Storybook
2. **Documentar cada componente** com Properties Table, Design Specs e Usage Examples
3. **Implementar sistema de ícones** com tamanhos, pesos e categorias
4. **Integrar Brand Voice** (arquétipos, tom de voz, vocabulário)
5. **Organizar todos os brand assets** (43 SVGs de logo + 3D + elementos)
6. **Extrair componentes dos templates** (MetricCard, Sidebar, etc.)
7. **Criar workflow reproduzível** para novos projetos

---

## 3. User Stories

### Como Designer
- Quero visualizar todas as cores, tipografia e espaçamentos em um só lugar
- Quero ver todas as variações de logo para escolher a correta
- Quero entender as regras de área de proteção e tamanho mínimo
- Quero consultar o tom de voz da marca ao criar conteúdo

### Como Desenvolvedor
- Quero copiar valores de tokens com um clique
- Quero ver a tabela de props de cada componente (nome, tipo, required, descrição)
- Quero ver exemplos de código funcionais
- Quero saber quais ícones usar para cada tipo de ação

### Como Líder de Projeto
- Quero criar novos projetos seguindo o padrão estabelecido
- Quero que a IA (Cursor/Claude) siga as especificações automaticamente
- Quero compartilhar o brand book com fornecedores externos

---

## 4. Functional Requirements

### 4.1 Páginas MDX do Brand Book

| # | Página | Conteúdo |
|---|--------|----------|
| 1 | **Introduction** | Visão geral, como usar, arquitetura |
| 2 | **Brand Voice** | Arquétipos, tom de voz, vocabulário, emoções |
| 3 | **Logo System** | Versões, cores, 3D, área de proteção, tamanhos mínimos |
| 4 | **Typography** | Famílias, escalas, headings, estilos |
| 5 | **Colors** | Brand, neutral, semantic, themes, glass |
| 6 | **Spacing** | Escala, semântico, border radius, z-index |
| 7 | **Effects & Shadows** | Box shadows, glass, focus states, elevation |
| 8 | **Iconography** | Tamanhos, pesos, categorias, guidelines |
| 9 | **Textures & Backgrounds** | Gradientes, elementos decorativos |
| 10 | **Components** | Documentação detalhada por componente |
| 11 | **Templates Gallery** | Galeria de templates de página |

### 4.2 Estrutura de Documentação por Componente

Cada componente deve ter:

```markdown
## Component Name

### Overview
Breve descrição e quando usar.

### Properties
| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| variant  | string | No | "primary" | Visual style |
| size     | string | No | "md" | Component size |
| ...      | ...    | ... | ... | ... |

### Design Specifications
| Property | Value |
|----------|-------|
| Padding | 16px 24px |
| Border Radius | 8px |
| Font Size | 14px |
| Font Weight | 500 |

### Variants
[Visual examples of all variants]

### States
- Default
- Hover
- Active
- Disabled
- Focus

### Usage Examples
[Code snippets with live preview]

### Do's and Don'ts
✅ Use para...
❌ Não use para...
```

### 4.3 Sistema de Iconografia

**Biblioteca:** Lucide React (já instalada)

#### Icon Sizes
| Size | Pixels | Uso |
|------|--------|-----|
| xs | 12px | Badges, inline text |
| sm | 16px | Buttons small, inputs |
| md | 20px | Default, navigation |
| lg | 24px | Headers, emphasis |
| xl | 32px | Heroes, empty states |

#### Icon Weights (Stroke)
| Weight | Stroke | Uso |
|--------|--------|-----|
| light | 1px | Decorativo |
| regular | 1.5px | Default |
| bold | 2px | Emphasis, CTAs |

#### Categorias de Ícones
| Categoria | Exemplos |
|-----------|----------|
| **Navigation** | Menu, ChevronLeft/Right, Home, ArrowLeft |
| **Action** | Edit, Trash, Download, Upload, Save, Plus |
| **Status & Feedback** | Check, X, AlertTriangle, Info, Loader |
| **User & Communication** | User, Mail, Phone, MessageCircle |
| **Data & Charts** | BarChart, PieChart, TrendingUp/Down |
| **Time & Calendar** | Calendar, Clock, Timer |
| **Files & Media** | File, Image, Camera, Folder |
| **Settings** | Settings, Sliders, Filter |

### 4.4 Componentes a Documentar

#### Existentes (precisam documentação detalhada)
| Componente | Status | Ação |
|------------|--------|------|
| Button | ✅ Existe | Documentar props/specs |
| Input | ✅ Existe | Documentar props/specs |
| Textarea | ✅ Existe | Documentar props/specs |
| Checkbox | ✅ Existe | Documentar props/specs |
| Label | ✅ Existe | Documentar props/specs |
| Card | ✅ Existe | Documentar props/specs |
| GlassCard | ✅ Existe | Documentar props/specs |
| Alert | ✅ Existe | Documentar props/specs |
| Badge | ✅ Existe | Documentar props/specs |
| Dialog | ✅ Existe | Documentar props/specs |
| Table | ✅ Existe | Documentar props/specs |
| GlassButton | ✅ Existe | Documentar props/specs |
| GlassNavbar | ✅ Existe | Documentar props/specs |
| GlassPanel | ✅ Existe | Documentar props/specs |

#### Novos (extrair dos templates ou criar)
| Componente | Origem | Descrição |
|------------|--------|-----------|
| MetricCard | DashboardAdminTemplate | Card com KPI/métrica |
| PerformanceCard | DashboardAdminTemplate | Card com gráfico pequeno |
| SectionHeader | Templates | Cabeçalho de seção |
| Sidebar | Templates Admin | Navegação lateral |
| TopBar | Templates | Barra superior |
| ProgressBar | Criar novo | Barra de progresso |
| StatusPill | Badge variant | Indicador de status |
| List | Criar novo | Lista estilizada |
| ChartCard | Templates | Wrapper para Recharts |

### 4.5 Brand Voice (Nova Seção)

Baseado em `Beauty Smile/02-Beauty-Smile-Brand-DNA-Communication.md`:

#### Arquétipos
- **O Mago**: Transformador, visionário, conhecimento profundo
- **O Prestativo**: Cuidador genuíno, acolhedor, humanizado

#### Tom de Voz (5 Adjetivos)
1. **Transformador** - Mudamos realidades
2. **Acolhedor** - Cuidado genuíno
3. **Vanguardista** - Pioneiros, não seguidores
4. **Sofisticado** - Elegante sem ser pretensioso
5. **Confiável** - Baseado em ciência e resultados

#### Vocabulário

**Usar:**
- Transformar, revolucionar, pioneiro
- Indolor, confortável, sem trauma
- Personalizado, humanizado, acolhimento
- Comprovado cientificamente

**Evitar:**
- Jargões técnicos sem contexto
- Superlativos vazios ("o melhor", "milagroso")
- Linguagem que cria medo
- Diminutivos ("dentinho", "rapidinho")
- Gírias informais

#### Emoções a Despertar
Esperança → Alívio → Confiança → Dignidade → Empoderamento → Liberdade

#### Metáfora Central
**"Alquimia do Sorriso"** - Transformar chumbo em ouro, trauma em liberdade

### 4.6 Sistema de Logos

#### Inventário Completo (43 SVGs)

**Horizontal (8 arquivos)**
| Cor | Arquivo | Uso |
|-----|---------|-----|
| Azul | BS_Horizontal_Azul.svg | Fundos claros |
| Branco | BS_Horizontal_Branco.svg | Fundos escuros |
| Cinza | BS_Horizontal_Cinza.svg | Monocromático |
| Dourado | BS_Horizontal_Dourado.svg | Premium |
| Preto | BS_Horizontal_Preto.svg | Impressão P&B |
| Turquesa | BS_Horizontal_Turquesa.svg | Tema público |
| Ouro 3D | BS_Horizontal_Ouro3D.svg | Destaque premium |
| Prata 3D | BS_Horizontal_Prata3D.svg | Destaque elegante |

**Vertical (13 arquivos)**
- Azul, Branco, Cinza, Dourado, Preto, Turquesa
- 3D: Azul, Cinza, Dourado, Ouro, Prata, Turquesa

**Isotipo/Símbolo (12 arquivos)**
- Azul, Branco, Cinza, Dourado, Preto, Turquesa
- 3D: Azul, Branco, Cinza, Ouro, Prata, Turquesa

**Tipográfico (8 arquivos)**
- Azul, Branco, Cinza, Dourado, Preto, Turquesa
- 3D: Ouro, Prata

#### Especificações

**Tamanhos Mínimos:**
| Versão | Digital | Impressão |
|--------|---------|-----------|
| Horizontal | 120px largura | 30mm |
| Vertical | 80px largura | 20mm |
| Isotipo | 32px | 8mm |

**Área de Proteção:** 1x altura do símbolo em todos os lados

### 4.7 Organização de Assets

```
src/assets/
├── logos/
│   ├── svg/
│   │   ├── horizontal/     # 8 arquivos
│   │   ├── vertical/       # 13 arquivos
│   │   ├── isotipo/        # 12 arquivos
│   │   └── tipografico/    # 8 arquivos
│   ├── 3d/
│   │   ├── png/            # Manter existentes
│   │   └── webp/           # Manter existentes
│   └── index.ts            # Exports tipados
├── decorative/             # 6 SVGs de elementos
├── backgrounds/            # Gradientes
└── components/             # React components
```

---

## 5. Non-Goals (Out of Scope)

- ❌ Site de documentação separado (usar Storybook)
- ❌ Exportação para PDF
- ❌ Editor visual de tokens
- ❌ Criação de novos assets gráficos
- ❌ Integração com Figma MCP (futuro)

---

## 6. Design Considerations

### Navegação do Storybook
```
├── Introduction
├── Brand Book
│   ├── Brand Voice
│   ├── Logo System
│   ├── Typography
│   ├── Colors
│   ├── Spacing
│   ├── Effects & Shadows
│   ├── Iconography
│   └── Textures
├── Components
│   ├── UI
│   │   ├── Button
│   │   ├── Input
│   │   ├── Card
│   │   └── ...
│   ├── Glass
│   ├── Data Display
│   │   ├── MetricCard
│   │   ├── ChartCard
│   │   └── Table
│   └── Navigation
│       ├── Sidebar
│       └── TopBar
├── Templates
│   ├── Admin
│   └── Public
└── Assets
```

### Workflow para Criar Componentes (do vídeo)

1. **Initialize & Setup** - Analisar requisitos
2. **Analyze & Extract** - Extrair dados do componente
3. **Visual Specifications** - Definir specs visuais
4. **Behavioral Specifications** - Definir interações
5. **Implementation** - Criar componente
6. **TypeScript** - Tipar completamente
7. **All Variants** - Implementar variantes
8. **Preview** - Criar preview interativo
9. **Design Tokens** - Aplicar tokens
10. **Documentation** - Gerar docs (props, specs, examples)

### Arquivo de Documentação por Componente

Cada componente terá um arquivo `.docs.md`:
```
src/components/ui/Button/
├── Button.tsx
├── Button.stories.tsx
└── Button.docs.md       # Documentação detalhada
```

---

## 7. Technical Considerations

### Dependências
Nenhuma nova. Usa:
- Storybook 8.4.7 + MDX
- Lucide React (ícones)
- Tailwind CSS
- Native Clipboard API

### Componentes de Display (Brand Book)

```typescript
// Copy-to-clipboard
const CopyButton: React.FC<{ value: string }>

// Token displays
const ColorSwatch: React.FC<{
  name: string;
  hex: string;
  cssVar: string;
  tailwind: string;
}>

const TokenCard: React.FC<{
  name: string;
  value: string;
  preview?: React.ReactNode;
}>

const PropsTable: React.FC<{
  props: Array<{
    name: string;
    type: string;
    required: boolean;
    default?: string;
    description: string;
  }>;
}>

const DesignSpecsTable: React.FC<{
  specs: Array<{ property: string; value: string }>;
}>
```

### Project Context (do vídeo)

Criar arquivo `project-context.md` para manter contexto:
```markdown
# Beauty Smile Design System - Project Context

## Session Log
- [Date]: What was done

## Design Tokens
- Location: src/tokens/

## Components
- Location: src/components/
- Documented: [list]

## Templates
- Location: src/templates/
```

---

## 8. Success Metrics

| Métrica | Target |
|---------|--------|
| Páginas MDX funcionando | 11/11 |
| Componentes documentados | 100% |
| Props tables completas | 100% |
| Tokens com copy-to-clipboard | 100% |
| Ícones categorizados | 100% |
| Build sem erros | ✓ |
| Acessibilidade | ✓ |

---

## 9. Open Questions

1. ~~Área de proteção dos logos~~ → **Definido: 1x altura do símbolo**
2. ~~Tamanhos mínimos~~ → **Definido: 120px/80px/32px**
3. **Screenshots dos templates:** Gerar automaticamente ou criar?
4. **Prioridade de componentes novos:** Qual criar primeiro?

---

## 10. Implementation Phases

### Fase 1: Foundation (5 tasks)
1. Criar estrutura de diretórios brand-book
2. Mover e organizar assets (logos SVG, 3D, decorativos)
3. Criar componentes utilitários (CopyButton, TokenCard, PropsTable)
4. Atualizar configuração Storybook
5. Criar project-context.md

### Fase 2: Brand Book Pages (8 tasks)
6. Introduction.mdx
7. BrandVoice.mdx
8. LogoSystem.mdx
9. Typography.mdx
10. Colors.mdx
11. Spacing.mdx
12. Effects.mdx
13. Iconography.mdx

### Fase 3: Component Documentation (10 tasks)
14. Documentar Button (props, specs, examples)
15. Documentar Input/Textarea/Checkbox
16. Documentar Card/GlassCard
17. Documentar Alert/Badge/Dialog
18. Documentar Table
19. Documentar Glass components
20. Extrair e documentar MetricCard
21. Extrair e documentar Sidebar
22. Criar e documentar ProgressBar
23. Criar e documentar SectionHeader

### Fase 4: Templates & Polish (4 tasks)
24. TemplatesGallery.mdx
25. Textures.mdx
26. Atualizar docs existentes
27. QA e testes finais

---

## 11. Appendix

### A. Brand Voice - Frases que Capturam a Essência

1. **Transformação:**
   > "Transformamos o que todos dizem ser impossível em algo que muda vidas — um sorriso de cada vez."

2. **Método:**
   > "Alquimia moderna: onde 40 anos de tradição encontram a tecnologia mais avançada do mundo."

3. **Legado:**
   > "Não construímos apenas sorrisos. Construímos gerações inteiras livres do trauma."

### B. Paleta de Cores da Marca

| Nome | Hex | Uso |
|------|-----|-----|
| Primary (Deep Blue) | #00109E | Admin theme, CTAs principais |
| Secondary (Gold) | #BB965B | Premium, destaque |
| Accent (Turquoise) | #35BFAD | Public theme, ações |

### C. Fontes

| Uso | Família | Fallback |
|-----|---------|----------|
| Headings | Montserrat | system-ui |
| Body | Inter | system-ui |
| Code | JetBrains Mono | monospace |

### D. Elementos Decorativos

6 SVGs disponíveis em `Artes/Elementos Diversos/`:
- Elementos-02.svg até Elementos-07.svg
- Usar como: divisores, cantos decorativos, fundos
