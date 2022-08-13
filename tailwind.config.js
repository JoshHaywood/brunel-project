module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
      colors: {
        'primary': '#f2a900',
        'secondary': '#00626b',
        'tertiary': '#4da3b3',
        'quaternary': '#142c30',
        'quinary': '#b8bcc2',
      },
      
			spacing: {
				0.5: "0.125rem",
				"25px": "25px",
				"56.25%": "56.25%",
			},
		},
	},
	plugins: [],
};
