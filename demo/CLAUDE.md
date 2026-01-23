# Portfolio Site

Next.js 16 portfolio/marketing site template.

## Tech Stack

- **Framework**: Next.js 16 (app router)
- **UI**: React 19, TypeScript 5
- **Styling**: Tailwind CSS 4.1.18 (v4 with PostCSS integration)
- **Components**: @tailwindplus/elements for advanced UI (dialogs, etc.)
- **Utilities**: clsx for conditional classNames

## Project Structure

```
demo/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with navbar & footer
│   │   ├── page.tsx        # Home page
│   │   ├── about/page.tsx
│   │   ├── pricing/page.tsx
│   │   └── globals.css     # Tailwind config & theme
│   └── components/
│       ├── elements/       # Basic UI components
│       │   ├── button.tsx
│       │   ├── container.tsx
│       │   ├── heading.tsx
│       │   ├── section.tsx
│       │   └── ...
│       ├── sections/       # Page sections/blocks
│       │   ├── navbar-*.tsx
│       │   ├── hero-*.tsx
│       │   ├── features-*.tsx
│       │   └── ...
│       └── icons/          # SVG icon components
```

## Commands

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Production build
pnpm build

# Run linter
pnpm lint
```

## Styling System

### Color Palette (Olive)

Defined in `globals.css` using OKLCH colors:

```css
--color-olive-50 through --color-olive-950
```

- Light mode background: `olive-100`
- Dark mode background: `olive-950`
- Primary accent: `olive-950` (light) / `olive-300` (dark)

### Usage Examples

```tsx
// Background colors
className="bg-olive-100 dark:bg-olive-950"

// Text colors
className="text-olive-950 dark:text-white"

// Soft/muted backgrounds
className="bg-olive-950/10 dark:bg-white/10"
```

### Fonts

- **Display**: "Instrument Serif" (for headings)
- **Sans**: "Inter" (body text, system UI fallback)

```tsx
// Display font
className="font-display"

// Sans font (default)
className="font-sans"
```

### Dark Mode

Built-in support via Tailwind `dark:` variants:

```tsx
// Light/dark text
className="text-olive-700 dark:text-olive-400"

// Conditional images
<img className="not-dark:hidden" />  // Show only in dark mode
<img className="dark:hidden" />      // Show only in light mode
```

## Component Patterns

### Layout Components

**Section** - Wrapper for page sections
```tsx
<Section id="features" eyebrow="Features" headline="What We Offer">
  {children}
</Section>
```

**Container** - Responsive max-width container
```tsx
<Container>
  {/* max-w-7xl with responsive padding */}
</Container>
```

### Button Variants

```tsx
// Primary button (dark bg)
<Button href="/signup">Get Started</Button>

// Soft button (translucent bg)
<SoftButton href="/learn">Learn More</SoftButton>

// Plain button (text only)
<PlainButton href="/docs">Documentation</PlainButton>
```

### Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `max-*`: max-width variants

## Integration Notes

### Glass Effects (from logbook-writer)

The portfolio site can use glass-effect components from logbook-writer's `ai-glass` library:

```tsx
// Light mode glass
background: rgba(255, 255, 255, 0.6)
backdropFilter: blur(8px)

// Dark mode glass
background: rgba(28, 27, 31, 0.85)
backdropFilter: blur(5px)
```

To retain hue tinting from backgrounds:
- Use `background-color` with alpha transparency
- Adjust `backdrop-filter: blur()` intensity
- Consider `mix-blend-mode` for color interaction

### Opacity Testing

When overlaying glass on colored backgrounds, key properties to tune:
- `background` rgba alpha (0.4-0.8 range)
- `backdrop-filter: blur()` (4px-12px range)
- Border opacity (0.05-0.15 range)

## Key Files

- `src/app/layout.tsx` - Root layout with navbar/footer
- `src/app/globals.css` - Theme variables and base styles
- `src/components/elements/button.tsx` - Button styling patterns
- `src/components/sections/navbar-*.tsx` - Navigation component
