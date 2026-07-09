import theme from './src/config/theme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Legacy tokens (old scroll-site components still compile)
        bgTheme: {
          dark:       theme.colors.bgDark,
          light:      theme.colors.bgLight,
          card:       theme.colors.bgCard,
          accent:     theme.colors.accent,
          fadedLight: theme.colors.fadedLight,
        },
        textTheme: {
          primary: theme.colors.textPrimary,
          muted:   theme.colors.textMuted,
          onLight: theme.colors.textOnLight,
        },
        // OS tokens — resolved at runtime from [data-theme] CSS variables
        os: {
          abyss:      'var(--os-abyss)',
          base:       'var(--os-base)',
          surface:    'var(--os-surface)',
          raised:     'var(--os-raised)',
          accent:     'var(--os-accent)',
          accentSoft: 'var(--os-accent-soft)',
          online:     'var(--os-online)',
          warn:       'var(--os-warn)',
          text:       'var(--os-text)',
          muted:      'var(--os-text-muted)',
          dim:        'var(--os-text-dim)',
          hairline:   'var(--os-hairline)',
        },
      },
      fontFamily: {
        os:   ['-apple-system', '"Segoe UI"', 'system-ui', 'Ubuntu', 'sans-serif'],
        mono: ['ui-monospace', '"JetBrains Mono"', '"Cascadia Code"', 'Menlo', 'monospace'],
      },
      maxWidth: {
        site: theme.maxWidth,
      },
      boxShadow: {
        window: 'var(--os-shadow-window)',
        tile:   '0 2px 8px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
