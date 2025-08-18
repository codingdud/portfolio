import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    tailwindcss(),
    react(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    Sitemap({
      hostname: 'https://codingdud.github.io/portfolio/',
      dynamicRoutes: [
        '/portfolio',
        '/portfolio/404',
        '/portfolio/blog',
        '/portfolio/docs',
        '/portfolio/mindmaps',
      ],
      exclude: ['/', '/404']
    })
  ],
  // Add this 'build' object
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: [],
      output: {
        inlineDynamicImports: true
      }
    }
  },
})
