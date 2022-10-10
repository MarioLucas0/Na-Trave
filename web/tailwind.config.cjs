/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true
    },
    fontSize:{
      xs:['12px', '16px'],
      sm:['14px', '18px'],
      base:['16px','14px'],
      lg:['20px','28x'],
      'xl':['24px','32px'],
      '2xl':['32px','40px'],
      '3xl':['48px','56px'],
      '4xl':['52px','66px']
    },
    fontWeight:{
      thin: 100,
      regular: 400,
      bold: 700,
    },
    extend: {
      colors:{
        black: '#0B0E16',
        white: '#F4F6FF',
        red:{
          300:'#BB2E57',
          500:'#AF053F',
          700: '#300219',
        },
        gray:{
          300: '##B1B4BD',
          500:'#91949D',
          700:'#696C74'
        }
      }
    },
  },
  plugins: [],
}
