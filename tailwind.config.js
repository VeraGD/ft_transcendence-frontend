/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts}"
	  ],
	theme: {
	  extend: {
		// We define our custom colors here
		colors: {
		  'pixel-black': '#000000',
		  'pixel-white': '#FFFFFF',
		  'pixel-gray': '#808080',
		},
		// We define our custom font here
		fontFamily: {
		  'pixel': ['"Press Start 2P"', 'cursive'],
		},
		// Adding a pixelated border effect using box-shadow
		boxShadow: {
		  'pixel': '4px 4px 0px #000000',
		  'pixel-hover': '2px 2px 0px #000000',
		}
	  },
	},
	plugins: [],
  }