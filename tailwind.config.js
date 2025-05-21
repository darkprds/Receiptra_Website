/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-color': '#398278', // Main Teal
        'accent-color-light': '#6bc3b2', // Lighter Teal
        'text-color-light': '#f9f9fa', // Off-White
        'text-color-dark': '#1a1a1a', // Darker text for light backgrounds
        'background-light': '#f9f9fa', // Off-white for alternating bg
        'background-dark': '#398278', // var(--bg-color)
        'border-color': '#e0e0e0',
      }
    },
  },
  plugins: [],
}
