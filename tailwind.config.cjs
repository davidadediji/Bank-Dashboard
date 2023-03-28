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
				'openpay-sidebar':'#E8ECF5',
				'openpay-page-bg':'#EDF1F2',
				'openpay-light-gray':'#A4B4CB',
				'openpay-gray': '#131635',
				'openpay-dark': '#2F2F32',
				'openpay-blue': '#0177FB',
				'openpay-light-blue': '#E5F1FF',
				'openpay-dark-black': '#000',
				'openpay-primary-dark': '#343744',
				'openpay-primary-gray': '#5E636A',
				'openpay-btn-blue': '#0177FB',
				'openpay-card-outline': '#F2F2F2',
				'openpay-transaction-success': '#EBFFF3',
				'openpay-transaction-pending': '#FFF1ED',
				'openpay-transaction-text-success': '#61BB84',
				'openpay-transaction-text-pending': '#FFAA90',
				'openpay-stats-customers': '#EFECFD',
				'openpay-stats-remittances': '#E4F8FB',
				'openpay-stats-donations': '#E5F7ED',
				'openpay-stats-watchtime': '#FDF1E2',
			},
			// #2F2F32
			// #E8ECF5
			// #131635
			backgroundImage: {
				'openpay-image': "url('../src/assets/images/visacard.svg')",
			},
		},
	},
	plugins: [],
};
