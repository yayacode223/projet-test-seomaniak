/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#14B02D', // Vert Mali
          light: '#1BD438',
          dark: '#0F8A23',
        },
        secondary: {
          DEFAULT: '#FCD116', // Jaune Mali
          light: '#FFE03D',
          dark: '#E5BC00',
        },
        accent: {
          DEFAULT: '#CE1126', // Rouge Mali
          light: '#E82E43',
          dark: '#A50D1E',
        },
        neutral: {
          DEFAULT: '#1F2937', // Gris foncé
          light: '#374151',
          dark: '#111827',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};