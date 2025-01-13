import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
} satisfies Config;
