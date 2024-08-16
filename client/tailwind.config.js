/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'dark-primary': '#131a1c',
      'dark-secondary': '#1b2225',
      red: '#e74c4c',
      green: '#6bb05d',
      blue: '#0183ff',
      grey: '#dddfe2',
      white: '#fff',
      black: '#3c3f3f'
    },
  },
  plugins: [],
}
