/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This includes all JS and JSX files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#ff7e5f',
      },
    },
  },
  plugins: [],
}
