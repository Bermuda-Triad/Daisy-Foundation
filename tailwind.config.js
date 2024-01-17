/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'strokeOne': '#E6E8FC',
      'textOne': '#333333',
      'textTwo': '#454545',
      'textThree': '#ffffff',
      'textFour': '#000000',
      'accentOne': '#CD9933',
      'accentTwo': '#0217F9',
      'accentBackgroundOne': '#FFF9EC',
      'accentBackgroundTwo': '#E6E8FC',
    },
    extend: {},
  },
  plugins: [],
}