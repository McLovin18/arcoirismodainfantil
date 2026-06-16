import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Arcoíris Moda Infantil
        "arco-pink": "#FF69B4",
        "arco-orange": "#FFB84D",
        "arco-yellow": "#FFE082",
        "arco-purple": "#CE93D8",
        "arco-blue": "#81D4FA",
        "arco-light-pink": "#FFC0E0",
        "arco-light-orange": "#FFDAB9",
        "arco-light-yellow": "#FFFACD",
      },
      backgroundColor: {
        "arco-gradient": "linear-gradient(135deg, #FF69B4 0%, #FFB84D 25%, #FFE082 50%, #CE93D8 75%, #81D4FA 100%)",
      },
    },
  },
};

export default config;
