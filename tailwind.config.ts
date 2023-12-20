import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        wide: '1556px',
        'wide-plus': '1584px',
        large: '1294px',
      },
      backgroundImage: {},
      colors: {
        'light-gray': '#F4F4F4',
        'dark-gray': '#1E1E1E',
        'cool-gray-1': '#525252',
        'cool-gray-2': '#F8F3F3',
        blue: '#4889E9',
      },
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
