import { defineEcConfig } from 'astro-expressive-code';

export default defineEcConfig({
  themes: ['github-dark-default', 'github-light-default'],
  useDarkModeMediaQuery: false,
  customizeTheme: (theme) => {
    theme.name = theme.type;
  },
  styleOverrides: {
    borderRadius: '1rem',
  },
});
