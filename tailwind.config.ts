import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1120px",
      xl: "1512px",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: [`var(--font-montserrat)`],
      },
      colors: {
        heroGradient: "rgba(168, 208, 255, 0.63)",
        buttonPink: "#FFA7A7",
        specialFormBlue: "#6d7bf6",
        specialCardGrey: "#fcfcff",
        specialBackgroundGreen: "rgba(209, 234, 57, 0.35)", //I couldn't add the opacity when  I had the variable as just the hexcode.
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
