/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#050F28",
        lightBlue: "#88A1DE",
        error: "#FF832A",
      },
    },
    fontFamily: {
      body: ["Nunito"],
    },
  },
  plugins: [],
};
