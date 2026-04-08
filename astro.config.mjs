import { defineConfig } from 'astro/config';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://microsoft.github.io',
  base: isGithubActions ? '/aspire-brand/' : '/',
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          { src: 'LICENSE', dest: '.' },
          { src: 'logo/aspire-mark-outline.svg', dest: 'logo' },
          { src: 'logo/app-icon/*.svg', dest: 'logo/app-icon' },
          { src: 'logo/text-only/*.svg', dest: 'logo/text-only' },
          { src: 'slides/intro/*.pptx', dest: 'slides/intro' },
        ],
      }),
    ],
  },
});
