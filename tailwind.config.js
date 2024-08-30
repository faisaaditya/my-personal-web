/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#121212", // Warna background utama
        "secondary-bg": "#1a1a1a", // Warna background sekunder
        "text-primary": "#FFFFFF", // Warna teks utama
        "text-secondary": "#B0B0B0", // Warna teks sekunder
        accent: "#444444", // Warna aksen, jika diperlukan
      },
      fontFamily: {
        sans: ["Helvetica", "sans-serif"],
        serif: ["Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
