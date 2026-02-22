import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F0',
          dark: '#F0EBE0',
        },
        magenta: {
          light: '#E878AB',
          DEFAULT: '#D94F8E',
          dark: '#B03A72',
        },
        black: '#1A1714',
        charcoal: '#2E2A24',
        'warm-gray': '#8A8279',
        gold: {
          DEFAULT: '#C4A87C',
          light: '#D9C4A0',
        },
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        'card-hover': '0 20px 60px rgba(217, 79, 142, 0.08)',
        'amenity-hover': '0 15px 50px rgba(0, 0, 0, 0.05)',
        'btn-hover': '0 15px 40px rgba(217, 79, 142, 0.25)',
        nav: '0 1px 0 rgba(26, 23, 20, 0.08)',
      },
    },
  },
  plugins: [],
};
export default config;
