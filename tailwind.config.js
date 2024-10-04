/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content:[
    './public/**/*.html',
    './public/styles/**/*.css'
  ],
  theme: {
    extend: {
      boxShadow:{
        'custom-sombra':'10px 10px 0 black'
      },
      backgroundImage:{
        'custom-img': 'url(/assets/images/illustration-article.svg)'
      },
      fontFamily:{
        "custom-family": '[Figtree, system-ui]'
      }
    },
  },
  plugins: [], 
}

