module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'siteWidth': '980px',
      },
      boxShadow: {
        'Site': '2.27px 4.46px 15px 5px rgba(34, 33, 34, 0.6)',
      },
      colors: {
        'Dark': 'rgba(6, 5, 6)',
      }
    },
  },
  plugins: [],
}