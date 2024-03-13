/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#171C28",
        navbar: "#303B54",
        joblist: "#1D2331",
        jobCard: "#323C52",
        cardFooter: "#525D7966",
      },
    },
  },
  plugins: [],
};
