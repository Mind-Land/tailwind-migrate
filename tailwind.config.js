/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
  ],
  theme: {
    colors: {
      "color-primary-100": "#D5FBFE",
      "color-primary-200": "#ACF2FE",
      "color-primary-300": "#82E3FC",
      "color-primary-400": "#62D1F9",
      "color-primary-500": "#30B4F5",
      "color-primary-600": "#238DD2",
      "color-primary-700": "#186AB0",
      "color-primary-800": "#0F4B8E",
      "color-primary-900": "#093575",
      "color-success-100": "#E3FCD8",
      "color-success-200": "#C1FAB1",
      "color-success-300": "#95F088",
      "color-success-400": "#6BE167",
      "color-success-500": "#39CE41",
      "color-success-600": "#29B13D",
      "color-success-700": "#1C9438",
      "color-success-800": "#127732",
      "color-success-900": "#0A622F",
      "color-info-100": "#E8ECFE",
      "color-info-200": "#D1D8FE",
      "color-info-300": "#BAC4FE",
      "color-info-400": "#A9B4FD",
      "color-info-500": "#8D9AFC",
      "color-info-600": "#6772D8",
      "color-info-700": "#4751B5",
      "color-info-800": "#2C3592",
      "color-info-900": "#1B2178",
      "color-warning-100": "#FEFACE",
      "color-warning-200": "#FDF59E",
      "color-warning-300": "#FBED6D",
      "color-warning-400": "#F8E348",
      "color-warning-500": "#F4D60E",
      "color-warning-600": "#D1B50A",
      "color-warning-700": "#AF9507",
      "color-warning-800": "#8D7604",
      "color-warning-900": "#755F02",
      "color-danger-100": "#FFECD6",
      "color-danger-200": "#FFD4AD",
      "color-danger-300": "#FFB683",
      "color-danger-400": "#FF9965",
      "color-danger-500": "#FF6932",
      "color-danger-600": "#DB4824",
      "color-danger-700": "#B72D19",
      "color-danger-800": "#93170F",
      "color-danger-900": "#7A090A",
    },
  },
  darkMode: 'class',
}
