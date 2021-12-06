const colors = require('tailwindcss/colors')

const config = {
	// mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: colors.white,
			black: colors.black,
			orange: colors.orange,
			gray: colors.trueGray,
			blue: colors.blue,
			'astronaut': {
				DEFAULT: '#183372',
				'50': '#f3f5f8', 
				'100': '#e8ebf1', 
				'200': '#c5ccdc', 
				'300': '#a3adc7', 
				'400': '#5d709c', 
				'500': '#183372', 
				'600': '#162e67', 
				'700': '#122656', 
				'800': '#0e1f44', 
				'900': '#0c1938'
			}
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins'],
				josefin: ['Josefin Sans']
			},
			display: ['group-hover'],
			textColor: {
				skin: {
					base: 'var(--color-text-base)',
					inverted: 'var(--color-text-inverted)',
					muted: 'var(--color-text-muted)',
					'inverted-muted': 'var(--color-text-inverted-muted)',
				}
			},
			backgroundColor: {
				skin: {
					primary: 'var(--color-primary)',
					'primary-muted': 'var(--color-primary-muted)',
					inverted: 'var(--color-inverted)',
					'inverted-muted': 'var(--color-inverted-muted)'
				}
			},
			borderColor: {
				skin: {
					base: 'var(--color-border-base)',
					muted: 'var(--color-border-muted)',
				}
			},

			ringColor: {
				skin: {
					base: 'var(--color-ring-base)',
					muted: 'var(--color-ring-muted)',
				}
			},
		}
	},
	plugins: [
		require('daisyui'),
	],
	// config (optional)
    daisyui: {
		styled: true,
		themes: false,
		base: true,
		utils: true,
		logs: false,
		rtl: false,
	  },
};

module.exports = config;
