/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4FD1C5',
          DEFAULT: '#38B2AC',
          dark: '#2C9A94'
        },
        secondary: {
          light: '#9F7AEA',
          DEFAULT: '#805AD5',
          dark: '#6B46C1'
        },
        accent: {
          light: '#FBD38D',
          DEFAULT: '#F6AD55',
          dark: '#ED8936'
        },
        success: {
          light: '#68D391',
          DEFAULT: '#48BB78',
          dark: '#38A169'
        },
        warning: {
          light: '#FBD38D',
          DEFAULT: '#F6AD55',
          dark: '#ED8936'
        },
        error: {
          light: '#FC8181',
          DEFAULT: '#F56565',
          dark: '#E53E3E'
        },
        whatsapp: '#25D366'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'custom': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02)',
        'custom-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)'
      }
    },
  },
  plugins: [],
};