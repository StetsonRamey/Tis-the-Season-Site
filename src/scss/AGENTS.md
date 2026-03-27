# AGENTS.md - SCSS Architecture

## SASS Structure (7-1 Pattern)
The SCSS follows a modified 7-1 architecture pattern with all partials imported in `main.scss`.

### Directory Organization
- **abstracts/** - Variables, mixins, functions, placeholders (no CSS output)
- **vendors/** - Third-party CSS (normalize, loadingSpinner)
- **base/** - Reset, typography, and foundational styles
- **layout/** - Navigation, grid, header, footer, forms
- **components/** - Specific UI components (buttons, menus, etc.)

### Import Order (main.scss)
1. Abstracts (variables, functions, mixins, placeholders)
2. Vendors (normalize, loadingSpinner)
3. Base (reset, typography)
4. Layout (navigation, grid, header, footer, forms)
5. Components (menu, buttons, light-type, feature-area, etc.)

## Breakpoints & Responsive Design
Use the `respond-to()` mixin for all media queries:

```scss
@include respond-to('small') { } // 767px
@include respond-to('medium') { } // 992px
@include respond-to('large') { } // 1200px
@include respond-to('extraLarge') { } // 1400px
```

## Colors (abstracts/_variables.scss)
- `$logo-teal`: #6ac3ba
- `$logo-purple`: #f067a0 (also known as logo-pink)
- `$secondary-color`: #999
- `$mobile-menu-bg`: #444
- `$footer-background`: #3b3a36
- `$disable-submit`: #ee5253

## Common Mixins (abstracts/_mixins.scss)
- `@include respond-to($breakpoint)` - Media query handler
- `@include promoText` - Text overlay on images (centered, white, 3rem, uppercase)
- `@include promoItem` - Promo item background styling (cover, center, no-repeat)
- `@include promoSpace` - Grid layout for promo items (1fr, 2rem gaps)
- `@include easeOut` - Standard transition (0.5s ease-out)
- `@include darkenImage` - Overlay for text on images (black bg, 0.45 opacity)
- `@include footerList` - Footer list styling (centered, no bullets, no padding)
- `@include backgroundColor($color, $depth)` - Full-width background sections with lighten

## Component Files
All component partials are prefixed with `_` and imported without extension:
- Buttons: `_buttons.scss`
- Menu: `_menu.scss`
- Light types: `_light-type.scss`
- Feature areas: `_feature-area.scss`
- Bottom grid: `_bottom-grid.scss`
- Lighting hero: `_lighting-hero.scss`
- LED components: `_led.scss`
- Inc sections: `_inc.scss`
- About sections: `_about-head.scss`, `_about-values.scss`, `_about-team.scss`
- Contact sections: `_contact-form.scss`, `_contact-reviews.scss`, `_contact-responsive.scss`
- Quick contact: `_quick-contact.scss`
- Google forms: `_google-form.scss`
- Fix banner: `_fix-banner.scss`

## Conventions
- **File naming**: All partials use `_filename.scss` format
- **Variables**: kebab-case with `$` prefix
- **Mixins**: camelCase with descriptive names
- **Nesting**: Keep nesting to 3 levels max
- **BEM naming**: Some components use BEM-style naming (e.g., `.Promo-text`)
- **Mobile-first**: Base styles are mobile, use `respond-to()` for larger screens
