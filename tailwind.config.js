/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)", // Soft Blue: hsl(231, 69%, 60%)
        "soft-red": "hsl(0, 94%, 66%)",
        "grayish-blue": "hsl(229, 8%, 60%)",
        "very-dark-blue": "hsl(229, 31%, 21%)",
        "customGray" : "#f4f4f4",
      },
      fontFamily: ["rubik", "sans-serif"],
    },
  },
  plugins: [],
};
