# vue3-resume

A resume editor template for developers, developed with Vue3 + Vite + TypeScript + Uno.css.
This template provides a highly customizable and modern way to create and manage your resume.

## Features

- ⚡️ **Vue 3, Vite, TypeScript, Uno.css:** Modern and fast development experience.
- 🌐 **Internationalization (i18n):** Ready for multiple languages, using `vue-i18n`. YAML files in [`locales/`](locales/) are auto-loaded. See [locales/README.md](locales/README.md).
- 🧩 **Auto-registered Components:** Components in `src/components/` are auto-registered via `unplugin-vue-components`. See [src/components/README.md](src/components/README.md).
- 🎨 **Iconify:** Use icons from any icon set on demand via `unplugin-icons`. See [src/components/README.md](src/components/README.md).
- 📐 **Layout System:** Flexible layout system using `vite-plugin-vue-layouts`. See [src/layouts/README.md](src/layouts/README.md).
- 🧱 **Custom Modules:** Extend functionality with custom modules in `src/modules/`. See [src/modules/README.md](src/modules/README.md).
- 📱 **PWA Support:** Progressive Web App features enabled.
- 🌙 **Dark Mode:** Built-in dark mode support.
- 📝 **Markdown Support:** Write content in Markdown, with Shiki for syntax highlighting.
- 🚀 **Static Site Generation (SSG):** Powered by ViteSSG for optimal performance.
- ✅ **E2E Testing:** End-to-end tests with Cypress.
- 🍍 **State Management:** Pinia for reactive and type-safe state management.
- ✍️ **Online Editing Features:** Support for editing resume content directly in the browser.
- 📦 **Auto Imports:** APIs like Vue Composition API are auto-imported using `unplugin-auto-import`.
- 🛣️ **File-based Routing:** Routes are generated based on the file structure in `src/pages/` using `unplugin-vue-router`.

## Thanks / Tech Stack

- [Vue3](https://v3.cn.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Uno.css](https://unocss.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [VueUse](https://vueuse.org/)
- [Iconify](https://iconify.design/)
- [pnpm](https://pnpm.io/)
- [Vitesse](https://github.com/antfu/vitesse) - The template this project was inspired by.
- [minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json)

## Getting Started

### Prerequisites

- Node.js (>=18.x recommended)
- pnpm (v8.x or newer recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Raven-tu/vue3-resume.git
   cd vue3-resume
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Run the development server:

```bash
pnpm dev
```

This will start the Vite development server, typically at `http://localhost:3333`.

### Build

Build the application for production (SSG):

```bash
pnpm build
```

The generated files will be in the `dist/` directory.

## Folder Structure

- `src/components/`: Auto-imported Vue components.
- `src/layouts/`: Layout components for pages.
- `src/modules/`: Custom application modules.
- `src/pages/`: Vue components representing application pages (routes are auto-generated).
- `src/store/`: Pinia store modules.
- `locales/`: i18n translation files (YAML).
- `public/`: Static assets.
- `cypress/`: Cypress E2E tests.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
Ensure your code follows the existing style and all tests pass.

## License

[MIT](LICENSE) © Raven-tu
