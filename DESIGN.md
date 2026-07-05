# Padel Zenter — Design System

## Identidad Visual

| Atributo     | Valor                                                      |
| ------------ | ---------------------------------------------------------- |
| Industria    | Deporte / Pádel / Wellness                                |
| Personalidad | Energético, profesional, premium, tecnológico, confiable   |
| Referencias  | Apple, Linear, Stripe, Vercel, Nike                       |
| Estilo       | Limpio, espacioso, glassmorphism sutil, sombras suaves     |

---

## Logo

- Archivo: `public/logo.png`
- Dimensiones: 1780×603px
- Fondo: Transparente (PNG RGBA)
- El logo combina azul, verde y negro
- **Regla**: Siempre usar el logo original. No modificar colores ni proporciones.

---

## Paleta de Colores

| Token             | Hex       | Uso                                |
| ----------------- | --------- | ---------------------------------- |
| `primary`         | `#2563B4` | Botones principales, links, acentos|
| `primary-hover`   | `#1D4ED8` | Hover de botones primary           |
| `primary-light`   | `#DBEAFE` | Fondos suaves, badges, highlights  |
| `accent`          | `#98D430` | Acentos, badges success, CTAs      |
| `accent-hover`    | `#7CB828` | Hover de acentos                   |
| `accent-light`    | `#ECFCCB` | Fondos suaves de acento            |
| `white`           | `#FFFFFF` | Fondos, texto sobre oscuro         |
| `background`      | `#F5F7FA` | Fondo general del sitio            |
| `foreground`      | `#111111` | Texto principal                    |
| `muted`           | `#6B7280` | Texto secundario, labels           |
| `muted-light`     | `#9CA3AF` | Placeholders, borders              |
| `border`          | `#E5E7EB` | Bordes sutiles                     |
| `glass-bg`        | `rgba(255,255,255,0.7)` | Glassmorphism              |
| `glass-border`    | `rgba(255,255,255,0.3)` | Borde glass              |
| `overlay`         | `rgba(0,0,0,0.5)` | Overlay sobre imágenes        |
| `overlay-dark`    | `rgba(0,0,0,0.7)` | Overlay más oscuro           |

---

## Tipografía

| Token          | Font       | Uso                          |
| -------------- | ---------- | ---------------------------- |
| `font-sans`    | Inter      | Texto general, UI            |
| `font-display` | Inter      | Headings, títulos            |
| `font-mono`    | JetBrains Mono | Código, datos            |

### Escala Tipográfica

| Nivel  | Size / Line Height | Uso                        |
| ------ | ------------------ | -------------------------- |
| `xs`   | 12px / 16px       | Labels, badges pequeños    |
| `sm`   | 14px / 20px       | Texto secundario, captions |
| `base` | 16px / 24px       | Body text                  |
| `lg`   | 18px / 28px       | Texto destacado            |
| `xl`   | 20px / 28px       | Subtítulos                 |
| `2xl`  | 24px / 32px       | Títulos de sección         |
| `3xl`  | 30px / 36px       | Títulos grandes            |
| `4xl`  | 36px / 40px       | Hero subtitle              |
| `5xl`  | 48px / 1          | Hero title                 |
| `6xl`  | 60px / 1          | Mega headings              |

### Pesos

| Peso      | Valor | Uso                        |
| --------- | ----- | -------------------------- |
| `regular` | 400   | Body text                  |
| `medium`  | 500   | Subtítulos, UI labels      |
| `semibold`| 600   | Headings, botones          |
| `bold`    | 700   | Hero titles, números KPIs  |

---

## Espaciados

| Token  | Valor  | Uso                                |
| ------ | ------ | ---------------------------------- |
| `0`    | 0      | Sin espacio                        |
| `1`    | 4px    | Gap mínimo entre iconos y texto    |
| `2`    | 8px    | Padding interno pequeño            |
| `3`    | 12px   | Gap entre elementos relacionados   |
| `4`    | 16px   | Padding estándar de componentes    |
| `5`    | 20px   | Padding de cards                   |
| `6`    | 24px   | Gap entre secciones internas       |
| `8`    | 32px   | Margin entre elementos grandes     |
| `10`   | 40px   | Padding de secciones               |
| `12`   | 48px   | Separación entre secciones         |
| `16`   | 64px   | Padding de secciones grandes       |
| `20`   | 80px   | Hero padding / mega espacios       |
| `24`   | 96px   | Separación máxima                  |
| `32`   | 128px  | Secciones hero                     |

### Section Padding

Cada `<section>` usa:

```
py-20 md:py-28 lg:py-32
```

---

## Bordes y Sombras

### Border Radius

| Token | Valor | Uso                        |
| ----- | ----- | -------------------------- |
| `sm`  | 6px   | Inputs, badges             |
| `md`  | 10px  | Botones, cards             |
| `lg`  | 16px  | Cards grandes, modales     |
| `xl`  | 24px  | Secciones, hero elements   |
| `2xl` | 32px  | Mega cards                 |
| `full`| 9999px| Pills, avatares            |

### Sombras

| Token       | Valor                                                   | Uso                  |
| ----------- | ------------------------------------------------------- | -------------------- |
| `sm`        | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`| Cards default     |
| `md`        | `0 4px 6px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.04)`| Hover cards       |
| `lg`        | `0 10px 15px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.04)`| Modales, dropdowns|
| `xl`        | `0 20px 25px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.04)`| Hero elements  |
| `primary`   | `0 4px 14px rgba(37,99,180,0.25)`                      | Botones primary     |
| `accent`    | `0 4px 14px rgba(152,212,48,0.25)`                     | Botones accent      |

---

## Glassmorphism

Clase utilitaria para efectos glass:

```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

**Uso**: Navbar al hacer scroll, cards premium, modales.

---

## Componentes

### Button

| Variante  | Fondo              | Texto      | Hover                     |
| --------- | ------------------ | ---------- | ------------------------- |
| `primary` | `primary`          | `white`    | `primary-hover` + shadow  |
| `accent`  | `accent`           | `foreground`| `accent-hover` + shadow  |
| `outline` | transparent        | `primary`  | `primary-light` bg        |
| `ghost`   | transparent        | `foreground`| `background` bg         |

| Tamaño | Padding           | Font  |
| ------ | ----------------- | ----- |
| `sm`   | `px-4 py-2`      | `sm`  |
| `md`   | `px-6 py-3`      | `base`|
| `lg`   | `px-8 py-4`      | `lg`  |

**Estilo**: `rounded-md font-semibold transition-all duration-200 ease-out`

### Card

```css
.card {
  background: white;
  border-radius: 16px;
  box-shadow: sm;
  transition: all 300ms ease-out;
}
.card:hover {
  box-shadow: md;
  transform: translateY(-2px);
}
```

### Container

Ancho máximo:

| Tamaño | max-width |
| ------ | --------- |
| `sm`   | 640px     |
| `md`   | 768px     |
| `lg`   | 1024px    |
| `xl`   | 1280px    |
| `full` | 100%      |

Contenedor principal: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

---

## Animaciones (Framer Motion)

### Principios

- Duración: 300-500ms
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- Stagger children: 100ms
- Nunca exagerar. Siempre sutiles.

### Variants

#### Fade In Up

```ts
fadeInUp: {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}
```

#### Fade In

```ts
fadeIn: {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
}
```

#### Scale In

```ts
scaleIn: {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
}
```

#### Stagger Container

```ts
staggerContainer: {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}
```

### Scroll Reveal

Todos los elementos debajo del fold deben aparecer con `useInView` + `motion.div` con `fadeInUp`.

### Hover

Transiciones CSS (`transition-all duration-200`) para:
- Botones (background, shadow)
- Cards (shadow, translateY)
- Links (color)
- Iconos (color, scale)

---

## Breakpoints

| Nombre   | Width   | Dispositivo          |
| -------- | ------- | -------------------- |
| `xs`     | 375px   | Celular pequeño      |
| `sm`     | 640px   | Celular              |
| `md`     | 768px   | Tablet               |
| `lg`     | 1024px  | Notebook             |
| `xl`     | 1280px  | Desktop              |
| `2xl`    | 1536px  | Desktop grande       |
| `3xl`    | 1920px  | UltraWide            |

---

## Iconografía

- Biblioteca: Lucide Icons
- Tamaños: `16`, `20`, `24`, `32`, `48`
- Stroke width: `2` (default) o `1.5` para iconos delicados
- Colores: `foreground`, `primary`, `accent`, `muted`

---

## Accesibilidad (WCAG AA)

- Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande
- Focus visible en todos los elementos interactivos (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`)
- ARIA labels en iconos sin texto, nav, botones sin texto visible
- Navegación completa por teclado
- `prefers-reduced-motion`: Desactivar animaciones
- Skip to main content link

---

## Rendimiento

- Next/Image con `priority` en above-the-fold
- `loading="lazy"` en below-the-fold
- Framer Motion con `layout` solo donde necesario
- CSS purgado con Tailwind
- Font display swap
- Preconnect a dominios externos

---

## Convenciones de Código

- TypeScript estricto (`strict: true`)
- Componentes: `PascalCase.tsx`
- Hooks: `usePascalCase.ts`
- Utilidades: `kebab-case.ts`
- Tipos: `PascalCase` interfaces, evitar `type` para objetos
- Exports: Nombrados (`export function Button`)
- Props: Interfaces con `ComponentProps` como sufijo
- Sin `any`. Sin `@ts-ignore`.
- Server Components por defecto. `"use client"` solo donde se necesite interactividad.
