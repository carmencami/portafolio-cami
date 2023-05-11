/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    },
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

