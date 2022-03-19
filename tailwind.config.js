module.exports = {
  content: ["./public/index.html", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily:{
        heading:['Roboto', 'sans-serif']
      },
      backgroundImage:{
        'backgroundHeader':"url('./img/header_bg.svg')"
      },
      colors: {
        primary:'#8BC540',
        second:"#242424",
        thrid:"#707070",
        four:"#343131",
        five:"#1D1D1D",
        six:"#2F2F2F",
        seven:"#7C7C7C",
        eigth:"#B5B5B5",
        textSecond:"#A8A8A8",
        
      }
    },
  },
  variants:{
    extend:{}
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
