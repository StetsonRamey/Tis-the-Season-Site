# AGENTS.md - Tis the Season Site

## Build & Development Commands
- `npm run dev` - Build dev version and start dev server with watch
- `npm run build` - Build production version and start server
- `npm start` - Start dev server and watch (without build)
- `npm run build:dev` - Build dev CSS, Tailwind, JS (no server)
- `npm run build:prod` - Build production CSS, Tailwind, JS (no server)

## Architecture
- **Static HTML site** with Tailwind CSS, SASS, and vanilla JavaScript
- **Build pipeline**: Babel → UglifyJS for JS; SASS + PostCSS + Autoprefixer for CSS
- **Source**: `src/` (js, scss, css, images) → **Output**: `dist/` (compiled assets)
- **HTML files**: Root-level `.html` files reference compiled assets in `dist/`
- **Deployment**: Netlify (config in `netlify.toml`)

## Code Style & Conventions
- **Formatting**: Prettier with Tailwind plugin (run via `prettier.config.js`)
- **CSS**: TailwindCSS for utility classes, SASS for custom styles, PostCSS for processing
- **JavaScript**: ES6+ transpiled with Babel, no frameworks (vanilla JS)
- **HTML**: Standard semantic HTML5, TailwindCSS classes
- **Custom colors**: `logo-teal`, `logo-pink`, `secondary` (see `tailwind.config.js`)
