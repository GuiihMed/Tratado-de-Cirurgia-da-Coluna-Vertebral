/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#001026",
          800: "#032147",
          700: "#093c78",
        },
        sbc: {
          red: "#f52238",
          darkRed: "#be123c",
        },
      },
    },
  },
  plugins: [],
};
