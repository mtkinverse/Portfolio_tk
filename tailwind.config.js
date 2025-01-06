/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        bgTheme:{
          // Blue shades
          'light':'#407ba7',
          'dark':'#013a63',
          // Green shades
          // 'light':'#a3b18a',
          // 'dark':'#3a5a40',
          'fadedLight':'#fffffff5'
        }
      }
    },
  },
  plugins: [],
}

