/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E75EA0',
        secondary: '#F3A522',
        'input-bg': '#F9F8F9',
        text: {
          'light': '#727272',
          'black': '#000000',
          'disable': '#C7C3C3'
        },
        surface: {
          'white': '#FFFFFF',
          'background': '#FFF5FA',
          'accent': '#F6F7FA',
          'border': '#DDE2E8'
        },
        success: '#4DF285',
        danger: '#CB0A0A',
        warning: '#F6B445',
      },
      boxShadow: {
        shadow1: '0px 2px 3px rgba(0, 0, 0, 0.25)',
        shadow2: '0px 0px 4px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
