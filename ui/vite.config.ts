import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [solid({ ssr: true }), dts({ exclude: ['src'] })],
  esbuild: {
    minifyIdentifiers: false,
    keepNames: true,
  },
  build: {
    lib: {
      entry: 'lib/main.tsx',
      formats: ['es'],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['solid-js', 'solid-js/web'],
      output: {
        globals: {
          'solid-js': 'Solid', // Define global variable for UMD build
          'solid-js/web': 'SolidWeb', // Define global variable for UMD build
        },
      },
    },
  }
})
