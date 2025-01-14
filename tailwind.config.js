/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A62D5C",  // NIFC primary color
          secondary: "#205473", // NIFC secondary color
          accent: "#FFFFFF",    // Accent color
          neutral: "#000000",   // Neutral color
          "base-100": "#FFFFFF", // Base background color (white)
        },
      },
    ],
  },
};
