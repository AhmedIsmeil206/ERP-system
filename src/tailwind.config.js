/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Scans all your JS and JSX files inside the src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',  // Custom blue
        secondary: '#10B981',  // Custom green
        accent: '#FBBF24',  // Custom yellow
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
