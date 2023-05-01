module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FBBF24",
        secondary: "#7C3AED",
        danger: "#EF4444",
        warning: "#F59E0B",
        info: "#10B981",
        success: "#22C55E",
        light: "#F3F4F6",
        dark: "#1F2937",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
