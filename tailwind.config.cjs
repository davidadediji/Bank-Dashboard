/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
			},
			colors: {
				'openpay-gray': '#131635',
				'openpay-dark': '#2F2F32',
				'openpay-blue': '#0177FB',
				'openpay-light-blue': '#E5F1FF',
				'openpay-dark-black':'#000'
			},
		},
	},
	plugins: [],
};
