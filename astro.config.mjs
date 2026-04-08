import { defineConfig } from 'astro/config';
import astroExpressiveCode from 'astro-expressive-code';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://microsoft.github.io',
  base: isGithubActions ? '/aspire-brand/' : '/',
  integrations: [astroExpressiveCode()],
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          { src: 'LICENSE', dest: '.' },
          { src: 'logo/*.svg', dest: 'logo' },
          { src: 'slides/intro/*.pptx', dest: 'slides/intro' },
        ],
      }),
    ],
  },
});
