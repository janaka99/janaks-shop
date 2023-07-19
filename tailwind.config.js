/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          'base-color': "var(--color-text-base)",
          'muted-color': "var(--color-text-muted)",
          'primary-color': "var(--color-fill-primary)",
          'secondary': "var(--color-fill-secondary)",
      },
    },
  },
  plugins: [],
};
