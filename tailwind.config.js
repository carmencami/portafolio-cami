/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors:{
    white: '#f9fafb',
    pink: '#bf1363',
    blue: '#b8d0eb',
    dark:"#175676",
    yellow:"#f9db6d",
    },
    extend: {},
  },
  plugins: [],
}

