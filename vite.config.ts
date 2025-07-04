import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    tailwindcss(),
    react(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    })
  ],
  // Add this 'build' object
  build: {
    // Increase the limit to, for example, 1000KB (1MB)
    chunkSizeWarningLimit: 1000, 
  },
})
