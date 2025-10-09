import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#b45309',
          dark: '#92400e',
          light: '#f59e0b'
        },
        night: '#0f172a',
        sand: '#fef3c7',
        foam: '#f8fafc'
      },
      fontFamily: {
        sans: ['"Inter var"', ...fontFamily.sans],
        display: ['"Playfair Display"', ...fontFamily.serif]
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, rgba(20,20,20,0.85), rgba(59,7,11,0.75)), url(/images/hero.webp)'
      }
    }
  },
  plugins: []
};

export default config;
