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
        text: {
          'light': '#727272',
          'black': '#000000',
          'disable': '#C7C3C3'
        },
        surface: {

        },
        success: '#4DF285',
        danger: '#CB0A0A',
        warning: '#F6B445',
      }
    },
  },
  plugins: [],
}
