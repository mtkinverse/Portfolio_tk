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
      },
      maxWidth: {
        site: theme.maxWidth,
      },
    },
  },
  plugins: [],
};
