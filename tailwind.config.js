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
        // PALET BIRU SOFT (IMUT & SEGAR)
        'merbau-primary': '#38bdf8', // Sky Blue cerah (Sky-400)
        'merbau-dark': '#0284c7',    // Sky Blue tua (Sky-600) untuk teks
        'merbau-soft': '#e0f2fe',    // Biru sangat muda (Sky-100) untuk background
        'merbau-text': '#64748b',    // Abu-abu kebiruan (Slate-500)
      },
      boxShadow: {
        // Shadow biru pudar
        'blue-soft': '0 4px 14px 0 rgba(56, 189, 248, 0.3)',
      }
    },
  },
  plugins: [],
}