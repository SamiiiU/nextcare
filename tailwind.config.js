/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {

        darkBG: '#152337',
        orangeBG: '#dc5729',
      },

      fontFamily: {
        lobster: ['Lobster', 'cursive'],
        mulish: ['Mulish', 'sans-serif'],
      },
      

      screens: {
        'xs': '480px',     // Extra small screen
        'sm': '640px',     // Small screen
        'md': '768px',     // Medium screen
        'lg': '1024px',    // Large screen
        'xl': '1280px',    // Extra large screen
        '2xl': '1536px',   // 2x extra large screen
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite", // Adjust 15s for speed
      },
    },
  },
  plugins: [],
}
