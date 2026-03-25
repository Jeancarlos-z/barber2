/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#0e0e0e',
        'bg-darker': '#000000',
        'surface': '#131313',
        'surface-high': '#1a1919',
        'surface-highest': '#262626',
        'primary': '#c1fffe',
        'primary-dim': '#00e6e6',
        'secondary': '#2ff801',
        'secondary-dim': '#2be800',
        'text-primary': '#ffffff',
        'text-secondary': '#adaaaa',
        'outline': 'rgba(119, 117, 117, 0.15)',
        'error': '#ff716c',
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'sans-serif'],
        'body': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
