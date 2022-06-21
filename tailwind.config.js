/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'adp-red': '#eb575c',
        'adp-red-inactive': '#E7ACAE'
			}
    },
  },
  plugins: [],
}
