module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			keyframes: {
				leftBarOpacity: {
					'0%': {opacity: 0},
					'100%': {transform: 1},
				}
			},
			animation: {
				leftBarOpacity: 'leftBarOpacity 1s',
			}
		},
	},
	variants: {},
	plugins: [],
}
