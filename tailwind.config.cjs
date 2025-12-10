/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: '#FFD3B6',
        mint: '#B3F1E5',
        lilac: '#E7D7FF',
        lemon: '#FFF5B8',
        coral: '#FF7A7A',
        midnight: '#1F2937'
      },
      fontFamily: {
        display: ['"Baloo 2"', '"Poppins"', 'sans-serif'],
        body: ['"Poppins"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        playful: '0 10px 30px rgba(255, 154, 158, 0.25)',
        soft: '0 10px 25px rgba(17, 24, 39, 0.08)'
      }
    }
  },
  plugins: []
};
