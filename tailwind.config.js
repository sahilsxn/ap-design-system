/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'adp-red': '#eb575c',
        'adp-red-inactive': '#E7ACAE',
        'black-90':'#1A1A1A',
        'black-60':'#666666',
        'black-40':'#999999',
        'black-10':'#E6E6E6',
        'black-4':'#F5F5F5'
			}
    },
  },
  plugins: [],
}
