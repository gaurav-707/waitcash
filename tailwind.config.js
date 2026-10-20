/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        claude: {
          bg: "#181816",
          deep: "#121210",
          surface: "#21201D",
          surfaceHover: "#2B2A25",
          terracotta: "#D97757",
          terracottaHover: "#C15F3C",
          terracottaLight: "#F5EBE6",
          terracottaDark: "#8E3E23",
          coral: "#E07A5F",
          amber: "#D4A373",
          cream: "#FAF8F5",
          text: "#F4F3EE",
          muted: "#9E9B91",
          border: "rgba(244, 243, 238, 0.08)",
          borderStrong: "rgba(244, 243, 238, 0.15)",
        },
      },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
