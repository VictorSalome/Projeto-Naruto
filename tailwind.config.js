/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta Uzumaki Naruto
        "naruto-orange": "#f77f00",
        "naruto-blue": "#0164a4",
        "naruto-yellow": "#fed100",
        "naruto-red": "#db0000",
        "naruto-green": "#028c02",

        // Paleta Sharingan
        "sharingan-red": "#d52132",
        "sharingan-black": "#000000",
        "sharingan-white": "#ffffff",
        "sharingan-gray": "#999999",

        // Paleta Akatsuki
        "akatsuki-red": "#dd1919",
        "akatsuki-black": "#000000",
        "akatsuki-white": "#ffffff",
        "akatsuki-orange": "#ff6600",
        "akatsuki-cloud": "#fde67e",

        // Paleta Hokage
        "hokage-green": "#005f00",
        "hokage-gold": "#f2b705",
        "hokage-white": "#ffffff",
        "hokage-brown": "#8a6d54",
        "hokage-red": "#db0000",
      },
    },
  },
  plugins: [],
};
