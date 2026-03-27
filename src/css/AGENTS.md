# AGENTS.md - CSS Directory

## Files
- **tailwind.css** - TailwindCSS entry point (imports base, components, utilities)
- **photoswipe.css** - Third-party PhotoSwipe lightbox gallery library styles

## Tailwind Configuration
Located in root `tailwind.config.js`:

### Custom Colors
- `logo-teal`: #6ac3ba
- `logo-pink`: #f067a0
- `secondary`: #999

### Custom Extensions
- **Font family**: Inter var as primary sans-serif
- **List style image**: Christmas tree icon for lists (`list-image-tree`)
- **Content**: Scans all root-level `*.html` files
- **Plugins**: `@tailwindcss/forms` for styled form elements

## Build Process
- TailwindCSS processes `tailwind.css` → outputs to `dist/css/tailwind.css`
- PhotoSwipe CSS is a vendor file (do not modify directly)

## Usage in HTML
Both compiled CSS files are linked in HTML:
```html
<link rel="stylesheet" href="dist/css/tailwind.css">
<link rel="stylesheet" href="dist/css/photoswipe.css"> <!-- Only on photo-gallery.html -->
```

## Conventions
- Use TailwindCSS utility classes in HTML as primary styling method
- Custom SASS/SCSS styles are compiled separately from `src/scss/main.scss`
- PhotoSwipe CSS uses CSS custom properties (CSS variables) for theming
