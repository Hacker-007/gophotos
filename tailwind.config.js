/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/typography'),
	],
}
