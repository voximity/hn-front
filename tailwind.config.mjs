/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-system', 'sans-serif'],
        mono: ['"Fira Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
