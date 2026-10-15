/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Exact colors extracted from official Kpro logo:
          teal: '#033D54', // Main Sigma frame & slogan text
          'teal-dark': '#022838',
          'teal-light': '#eef5f8',
          blue: '#033D54', // Primary brand color
          'blue-dark': '#022938',
          'blue-light': '#eef5f8',
          navy: '#021e29',
          orange: '#F9751C', // Exact "kpro" brand orange
          'orange-dark': '#e05e08',
          'orange-light': '#fff7ed',
          cyan: '#07E5E5', // Logo top/bottom node accent
          jade: '#06B29D', // Logo middle node accent
          amber: '#E5912C', // Logo outer amber node
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
