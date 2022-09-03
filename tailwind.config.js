/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      laptop: '1024px',
      desktop: '1504px',
    },
    colors: {
      '--background-principal': '#F2F3F4',
      '--text-grey': '#42464D',
      '--text-grey-mid': '#565C69',
      '--text-grey-weak': '#7F858D',
      '--filter-text': '#3F3B3B',
      '--orange-strong': '#E35214',
      '--orange-text': '#FC6B0F',
      '--orange-weak': '#FF6500',
      '--white': '#FFFFFF',
      '--white-weak': '#F5F5F5',
      '--blue': '#0060b1',
      '--green': '#2DC26E',
      '--green-text': '#1F9050',
      '--red': '#E72626',
      '--grey-trash-icon': '#B6BBC2',
      '--grey-line': '#DEE0E4',
    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
}
