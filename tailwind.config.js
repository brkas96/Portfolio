/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Ativa o modo escuro manualmente com a classe "dark"
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
