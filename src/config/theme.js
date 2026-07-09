// NOTE: the desktop-OS experience themes at runtime via CSS variables in
// src/index.css ([data-theme="dark" | "light"]). This file remains the seed
// palette for legacy Tailwind tokens; keep the two in sync when rebranding.
const theme = {
  colors: {
    bgDark: '#013a63',
    bgLight: '#407ba7',
    bgCard: '#0a4f82',
    accent: '#5ba3d0',
    textPrimary: '#ffffff',
    textMuted: '#b0c9de',
    fadedLight: '#fffffff5',
    textOnLight: '#013a63',
  },
  fonts: {
    body: 'serif',
    heading: 'serif',
  },
  maxWidth: '1300px',
};

export default theme;
