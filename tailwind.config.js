/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
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

