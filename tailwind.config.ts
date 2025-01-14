import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*"],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1160px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        core: {
          white: {
            100: "#fff",
          },
          black: {
            100: "#000",
          },
          red: {
            100: "#FF0000",
          },
        },
      },
      height: {
        15: "3.75rem",
        21: "5.25rem",
      },
      maxWidth: {
        61: "15.25rem",
        117: "29.25rem",
        157.5: "39.375rem",
      },
      padding: {
        0.25: "0.063rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
