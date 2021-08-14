  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         colors: {
           offBlack: '#1f1f1d'
         }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }