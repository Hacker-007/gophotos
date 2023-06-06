/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				'vertical-scroll': 'vertical-scroll 50s linear infinite',
				'vertical-scroll2': 'vertical-scroll2 50s linear infinite',
				'horizontal-scroll': 'horizontal-scroll 50s linear infinite',
			},
			keyframes: {
				'vertical-scroll': {
					from: {
						transform: 'translateY(0%)',
					},
					to: {
						transform: 'translateY(-100%)',
					},
				},
				'vertical-scroll2': {
					from: {
						transform: 'translateY(100%)',
					},
					to: {
						transform: 'translateY(0%)',
					},
				},
				'horizontal-scroll': {
					from: {
						transform: 'translateX(0)',
					},
					to: {
						transform: 'translateX(calc(-100% - 1rem))',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
