# vue3-resume

一个为开发者设计的简历编辑器模板，使用 Vue3 + Vite + TypeScript + Uno.css 开发。
该模板提供了一种高度可定制和现代化的方式来创建和管理您的简历。

## 特性

- ⚡️ **Vue 3, Vite, TypeScript, Uno.css:** 现代化且快速的开发体验。
- 🌐 **国际化 (i18n):** 支持多语言，使用 `vue-i18n`。[`locales/`](locales/) 目录下的 YAML 文件会自动加载。详见 [locales/README.md](locales/README.md)。
- 🧩 **组件自动注册:** `src/components/` 目录下的组件会通过 `unplugin-vue-components` 自动注册。详见 [src/components/README.md](src/components/README.md)。
- 🎨 **Iconify:** 通过 `unplugin-icons` 按需使用来自任何图标集的图标。详见 [src/components/README.md](src/components/README.md)。
- 📐 **布局系统:** 使用 `vite-plugin-vue-layouts` 实现的灵活布局系统。详见 [src/layouts/README.md](src/layouts/README.md)。
- 🧱 **自定义模块:** 在 `src/modules/` 中使用自定义模块扩展功能。详见 [src/modules/README.md](src/modules/README.md)。
- 📱 **PWA 支持:** 已启用渐进式 Web 应用 (PWA) 功能。
- 🌙 **暗黑模式:** 内置暗黑模式支持。
- 📝 **Markdown 支持:** 使用 Markdown 编写内容，通过 Shiki 进行语法高亮。
- 🚀 **静态站点生成 (SSG):** 由 ViteSSG 提供支持，以实现最佳性能。
- ✅ **E2E 测试:** 使用 Cypress 进行端到端测试。
- 🍍 **状态管理:** 使用 Pinia 进行响应式且类型安全的状态管理。
- ✍️ **在线编辑功能:** 支持在浏览器中直接编辑简历内容。
- 📦 **自动导入:** Vue Composition API 等 API 会通过 `unplugin-auto-import` 自动导入。
- 🛣️ **基于文件的路由:** 路由根据 `src/pages/` 中的文件结构通过 `unplugin-vue-router` 自动生成。

## 技术栈 / 致谢

- [Vue3](https://v3.cn.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Uno.css](https://unocss.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [VueUse](https://vueuse.org/)
- [Iconify](https://iconify.design/)
- [pnpm](https://pnpm.io/)
- [Vitesse](https://github.com/antfu/vitesse) - 本项目灵感来源的模板。
- [minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json)

## 快速开始

### 环境准备

- Node.js (推荐 >=18.x 版本)
- pnpm (推荐 v8.x 或更新版本)

### 安装

1. 克隆仓库:
   ```bash
   git clone https://github.com/Raven-tu/vue3-resume.git
   cd vue3-resume
   ```
2. 安装依赖:
   ```bash
   pnpm install
   ```

### 开发

运行开发服务器:

```bash
pnpm dev
```

这将启动 Vite 开发服务器，通常地址为 `http://localhost:3333`。

### 构建

构建生产版本的应用 (SSG):

```bash
pnpm build
```

生成的文件将位于 `dist/` 目录中。

## 目录结构

- `src/components/`: 自动导入的 Vue 组件。
- `src/layouts/`: 页面的布局组件。
- `src/modules/`: 自定义应用模块。
- `src/pages/`: 代表应用页面 (路由会自动生成) 的 Vue 组件。
- `src/store/`: Pinia 状态管理模块。
- `locales/`: i18n 国际化翻译文件 (YAML)。
- `public/`: 静态资源文件。
- `cypress/`: Cypress E2E 测试文件。

## 贡献

欢迎贡献！请随时提交 Pull Request。
请确保您的代码遵循现有风格并通过所有测试。

## 许可证

[MIT](LICENSE) © Raven-tu
