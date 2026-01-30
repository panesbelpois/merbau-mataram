/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // PALET MERAH MAROON (ELEGAN & KUAT)
        'merbau-primary': '#c41e3a', // Maroon merah cerah
        'merbau-dark': '#8b0000',    // Maroon gelap untuk teks
        'merbau-soft': '#ffe4e1',    // Merah sangat muda untuk background
        'merbau-text': '#64748b',    // Abu-abu (Slate-500)
      },
      boxShadow: {
        // Shadow merah maroon pudar
        'blue-soft': '0 4px 14px 0 rgba(196, 30, 58, 0.3)',
      }
    },
  },
  plugins: [],
}