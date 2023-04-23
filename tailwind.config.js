/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('tailwindcss-animated')],
	variants: {
		extend: {
			display: ['group-hover'],
		},
	},
};
