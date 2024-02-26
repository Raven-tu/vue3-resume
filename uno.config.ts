import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['flex-cc', 'flex justify-center items-center'],
    ['flex-rc', 'flex flex-col justify-center items-center'],
    ['wh-full', 'w-full h-full'],
    [
      'page-base',
      'page-tab-height flex flex-col py-3 flex-1 bg-page_bg box-border',
    ],
    ['abs-lt', 'absolute left-0 top-0'],
    ['abs-lb', 'absolute left-0 bottom-0'],
    ['abs-rt', 'absolute right-0 top-0'],
    ['abs-rb', 'absolute right-0 bottom-0'],
    ['abs-ct', 'absolute right-0 left-0 top-0'],
    ['abs-cb', 'absolute right-0 left-0 bottom-0'],

  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
