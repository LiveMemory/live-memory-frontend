/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:'Poppins,sans-serif'
      },
      colors:{
        'live-memory-semi-light-gray':'#F0F0F0',
        'live-memory-semi-light-red':'#FF0000',
        'live-memory-light-green':"#26FF00",
        'live-memory-light-blue':'#00E5FF'
      }
    },
  },
  plugins: [],
}

