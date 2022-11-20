/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         "primary": "#50a2d8",
                    
  //         "secondary": "#2ea1a5",
                    
  //         "accent": "#f2cc8e",
                    
  //         "neutral": "#22232B",
                    
  //         "base-100": "#DEE5ED",
                    
  //         "info": "#589CD0",
                    
  //         "success": "#17977F",
                    
  //         "warning": "#A27E06",
                    
  //         "error": "#FB2D53",
  //       },
  //     },
  //   ],
  // },
  plugins: [require("daisyui")],
}