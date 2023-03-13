/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
				'gilroy-semibold': ['"Gilroy-Semibold"', 'sans-serif'],
			},
			colors: {
				'openpay-gray': '#131635',
				'openpay-dark': '#2F2F32',
				'openpay-blue': '#0177FB',
				'openpay-light-blue': '#E5F1FF',
				'openpay-dark-black': '#000',
				'openpay-primary-dark': '#343744',
				'openpay-primary-gray': '#5E636A',
				'openpay-btn-blue': '#0177FB',
				'openpay-card-outline': '#F2F2F2',
			},
			backgroundImage: {
				'openpay-image': "url('../src/assets/images/visacard.svg')",
			},
		},
	},
	plugins: [],
};
