# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build production site (includes Astro build + Pagefind search indexing)
- `pnpm preview` - Preview production build
- `pnpm check` - Run Astro type checking
- `pnpm type-check` - Run TypeScript type checking
- `pnpm new-post -- <filename>` - Create new blog post with frontmatter template
- `pnpm format` - Format code using Biome
- `pnpm lint` - Lint and auto-fix code using Biome

## Package Manager

This project uses `pnpm` as the package manager (enforced by preinstall hook).

## Architecture Overview

### Core Technology Stack
- **Astro 5** - Static site generator with island architecture
- **Svelte 5** - Interactive UI components
- **Tailwind CSS** - Styling framework with custom configuration
- **TypeScript** - Type safety throughout the project
- **MDX** - Enhanced markdown with JSX support

### Key Integrations
- **@swup/astro** - Client-side navigation with smooth transitions
- **@astrojs/mdx** - MDX content support
- **astro-expressive-code** - Enhanced code blocks with syntax highlighting
- **@fancyapps/ui** - Image lightbox functionality
- **overlayscrollbars** - Custom scrollbars
- **pagefind** - Client-side search functionality

### Content Management
- **Content Collections** (`src/content/`) - Structured content with schemas
  - `posts/` - Blog posts with frontmatter schema in `src/content/config.ts`
  - `spec/` - Special content (about page, etc.)
- **Frontmatter Schema** - Includes title, published date, tags, category, series, draft status, and SEO fields

### Configuration Structure
- `src/config.ts` - Main site configuration (title, theme, banner, profile, etc.)
- `src/types/config.ts` - TypeScript definitions for configuration
- `astro.config.mjs` - Astro configuration with custom remark/rehype plugins

### Custom Plugins
- **Expressive Code Plugins** (`src/plugins/expressive-code/`) - Custom language badges and copy buttons
- **Rehype Components** (`src/plugins/rehype-component-*.mjs`) - Custom markdown components (admonitions, GitHub cards, link cards)
- **Remark Plugins** (`src/plugins/remark-*.js`) - Content processing (reading time, excerpts, directives)

### Layout System
- `src/layouts/Layout.astro` - Root layout with global styles, scripts, and SEO
- `src/layouts/MainGridLayout.astro` - Main grid layout for content pages
- **Responsive Design** - Mobile-first with desktop enhancements

### Key Features
- **Theme System** - Dark/light mode with custom hue picker
- **Banner System** - Configurable hero banner with parallax effects
- **Search** - Pagefind-powered client-side search
- **Series Support** - Organize posts in series with navigation
- **Archive & Categories** - Content organization and filtering
- **Comments** - Giscus integration for discussions
- **Analytics** - Multiple analytics platforms (Google Analytics, Clarity, Umami)

### Path Aliases
- `@/*` - src/
- `@assets/*` - src/assets/
- `@components/*` - src/components/
- `@constants/*` - src/constants/
- `@utils/*` - src/utils/
- `@layouts/*` - src/layouts/

### Content Utilities
- `src/utils/content-utils.ts` - Content fetching and sorting utilities
- `src/utils/url-utils.ts` - URL handling and navigation utilities
- `src/utils/setting-utils.ts` - Theme and preference management

### Code Quality
- **Biome** - Formatting and linting (see `biome.json`)
- **TypeScript Strict Mode** - Strict type checking enabled
- **Tab Indentation** - Configured for tab indentation throughout

### Build Optimization
- **Concurrency Control** - Build concurrency limited to 1
- **HTML Compression** - Enabled in production builds
- **Asset Optimization** - Inline assets under 4KB
- **CSS Minification** - Enabled for production

## Important Notes

- The site supports both `.md` and `.mdx` content files
- Images are optimized with loading animations and Fancybox lightbox
- Custom scrollbar styling applies to KaTeX formulas and general scrolling
- Swup handles client-side navigation with smooth transitions
- The theme system supports dark, light, and auto modes with custom color hue
- Analytics scripts are loaded with Partytown for better performance