module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      print: { 'raw': 'print' },
      sm: '640px',
      md: '833px',
      lg: '1079.5px',
      xl: '1280px',
    },
    extend: {
      maxWidth: {
        a4: '64.609375rem',
      },
      height: {
        a4: '91.350883rem',
      },
    },
  },
  plugins: [],
};
