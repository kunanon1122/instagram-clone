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
        9.25: "2.313rem",
        15: "3.75rem",
        21: "5.25rem",
        26: "6.5rem",
      },
      width: {
        27.25: "6.813rem",
        99.25: "24.813rem",
      },
      maxWidth: {
        18: "4.5rem",
        61: "15.25rem",
        117: "29.25rem",
        157.5: "39.375rem",
      },
      inset: {
        18: "4.5rem",
      },
      padding: {
        0.25: "0.063rem",
      },
      fontSize: {
        "2.5xl": "1.6rem",
      },
      lineHeight: {
        1.2: "1.2",
      },
      boxShadow: {
        "box-shadow":
          "0 0 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
} satisfies Config;
