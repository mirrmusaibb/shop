/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090A",
        surface: "#111317",
        gold: {
          300: "#E6CB91",
          400: "#D8B577",
          500: "#C8A05C",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Segoe UI", "Tahoma", "sans-serif"],
        display: ["Cormorant Garamond", "Times New Roman", "serif"],
        urdu: ["Noto Nastaliq Urdu", "Noto Serif", "serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(216, 181, 119, 0.18)",
      },
      backgroundImage: {
        "kashmir-pattern": "radial-gradient(circle at 1px 1px, rgba(216, 181, 119, 0.18) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
