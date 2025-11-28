/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        boldHeading: ["Bebas Neue"],
        heading: ["Oswald"],
        banner: ["Kaushan Script"],
        fancy: ["Train One"]
      },

      colors: {
        darkMain: '#393b3e',
        main: '#4C4E52',
        lightMain:'#d1d5db',
        accent1: '#4081A9',
        accent1Light: '#8cb3cb',
        accent2: '#FF924E',
        accent2Light: '#ffdec9'
    },

    animation: {
      titleflip: 'titleflip 10s ease-in-out infinite',
    },

    keyframes: {      
      titleflip: {
        '0%': {
          transform: 'translate(0px, -13em)'
        },
        '20%': {
          transform: 'translate(0px, -9.8em)'
        },
        '40%': {
          transform: 'translate(0px, -6.2em)'
        },
        '60%': {
          transform: 'translate(0px, -2.8em)',
        },
        '80%': {
          transform: 'translate(0px, 0em)',
        },

        // '80%': {
        //   transform: 'translate(0px, -0.315em)',
        // },
        // '100%': {
        //   transform: 'translate(0px, -12em)',
        // },
        // '0% 20%': {
        //   transform: 'translate(0px, -12.50em)',
        // },
        // '20% 40%': {
        //   transform: 'translate(0px, -9.375em)',
        // },
        // '40% 60%': {
        //   transform: 'translate(0px, -6.44em)',
        // },
        // '60% 80%': {
        //   transform: 'translate(0px, -3.44em)',
        // },
        // '80% 100%': {
        // transform: 'translate(0px, -0.315em)',
        // },
        // '100% 0%': {
        //   transform: 'translate(0px, -12.50em)',
        // }
      }
  }
  },
},
  plugins: [],
}
