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
        specialOrange: "var(--special-orange)",
        specialBlue: "var(--special-blue)",
        heroGradient: "var(--hero-gradient)",
        buttonBlue: "var(--button-blue)",
        buttonPink: "var(-button-pink)",
        specialIconRed: "var(--special-icon-red)",
        specialFormBlue: "var(--special-form-blue)",
        specialCardGrey: "var(--special-card-grey)",
        specialBackgroundGreen: "var(--special-background-green)",
        specialBackgroundRed: "var(--special-background-red)",
        specialBackgroundPink: "var(--special-background-pink)",

      },
    },
  },
  plugins: [],
};
export default config;
