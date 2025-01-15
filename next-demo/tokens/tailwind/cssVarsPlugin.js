import plugin from 'tailwindcss/plugin.js';

export default plugin(function ({ addBase }) {
	addBase({
		':root': {
			'--color-primary': '255 0 255',
			'--color-secondary': '248 248 0',
			'--color-tertiary': '127 186 0',
		},
	});
});
