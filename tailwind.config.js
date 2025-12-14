/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],



theme: {
  extend: {
    fontFamily: {
      'display': ['Bebas Neue', 'cursive'], // Pour les gros titres
      'heading': ['Oswald', 'sans-serif'],  // Pour les sous-titres et labels
      'body': ['Barlow', 'sans-serif'],     // Pour le texte normal
    },
    colors: {
      bbq: {
        orange: '#ea580c',    // Orange principal
        red: '#dc2626',       // Rouge BBQ
        yellow: '#fbbf24',    // Jaune feu
        dark: '#1f2937',      // Gris foncé
      }
    }
  },
},
plugins: [],

}