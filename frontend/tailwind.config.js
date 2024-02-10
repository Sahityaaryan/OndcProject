/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}" , "./src/components/*.{js,html,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#c2c7ca",
          300: "#b8bcbf",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#121212",
          900: "#191919",
        },
      },
      backgroundImage: {
        'hero-pattern': `url("https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      },
    },
  },
  plugins: [
    import ('@tailwindcss/typography'),
    import ('@tailwindcss/forms'),
  ],
}

