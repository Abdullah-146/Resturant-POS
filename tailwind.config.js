module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { max: "420px" },
      avatar: { max: "768px" },
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 800px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "2200px",
      // => @media (min-width: 3000px) { ... }
    },
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Play: ["Play", "sans-serif"],
      DMsans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // ...
  ],
};
