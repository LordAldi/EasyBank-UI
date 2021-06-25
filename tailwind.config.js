module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Public Sans, sans-serif",
      display: "Public Sans, sans-serif",
      body: "Public Sans, sans-serif",
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        "text-black": "#2D314D",
        "text-gray": "#9597A5",
        "primary-green": "#33D35E",
        "primary-blue": "#2AB6D9",
        "bg-color": "#fafafa",
        footer: "#2D314D",
      },
      spacing: {
        192: "48rem",
        288: "72rem",
        384: "96rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
