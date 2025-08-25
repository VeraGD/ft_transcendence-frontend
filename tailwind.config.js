/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
	  extend: {
		// Tu nueva paleta de colores inspirada en Pokémon
		colors: {
		  'poke-red': '#f85858',
		  'poke-blue': '#5890f8',
		  'poke-yellow': '#f8d058',
		  'poke-dark': '#404040',
		  'poke-light': '#f7f7f7',
		},
		// La fuente pixelada que ya teníamos
		fontFamily: {
		  'pixel': ['"Press Start 2P"', 'cursive'],
		},
		// Un borde simple y grueso, estilo 8-bit
		borderWidth: {
		  '3': '3px',
		},
	  },
	},
	plugins: [],
  }