/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'extra-tight': '-0.05em', // Define your custom spacing here
      },
    },
  },
  plugins: [],
}

