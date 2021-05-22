module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    corePlugins: {
      // ...
     container: false,
    },
    variants: {
      extend: {},
    },
    plugins: [
      function ({ addComponents }) {
        addComponents({
          '.container': {
            maxWidth: '1200px',
            '@screen sm': {
              maxWidth: '600px',
            },
            '@screen md': {
              maxWidth: '700px',
            },
            '@screen lg': {
              maxWidth: '800px',
            },
            '@screen xl': {
              maxWidth: '900px',
            },
          }
        })
      }
    ],
  }