/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A4D50",
        secondary: "#DDF0FF",
        tertiary: "#FF7754",
        gray: "#83829A",
        gray2: "#C1C0C8",
        offwhite: "#F3F4F8",
        white: "#FFFFFF",
        black: "#0b0b0c",
        reds: "#e81e4d",
        greens: "#00C135",
        lightWhite: "#FAFAFC",
      },
      boxShadow: {
        small: "0 2px 3.84px rgba(0, 0, 0, 0.25)",
        medium: "0 2px 5.84px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        pBold: ["Poppins-Bold", "sans-serif"],
        pRegular: ["Poppins-Regular", "sans-serif"],
        psemi: ["Poppins-SemiBold", "sans-serif"],
        pxtra: ["Poppins-ExtraBold", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pmed: ["Poppins-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
