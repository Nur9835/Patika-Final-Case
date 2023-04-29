/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'green': '#365314',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'brown':'#CC9933',
      'wood':'#fff8dc',
      'seashell':'#fff5ee',
      'yellow': '#ffc82c',
      'golden':'#cd950c',
      'mistyrose':'#eed5d2',
      'lemmonchiffon':'#cdc9a5',
      'gray-dark': '#273444',
      'darkslategray':'# 2F4F4F',
       'white':'#ffff',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black':'#000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
        '4xl' :'48rem',
        '6xl': '60rem',
        '2xl' : '24rem',
        'xl' : '12rem'
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

