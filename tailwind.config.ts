import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          coral: '#F24E4E',
          amber: '#FF9F1C',
          violet: '#7B5CF0',
          teal: '#00BFA5',
          sky: '#1FB6FF',
          charcoal: '#0E1117',
          navy: '#08111F',
          mist: '#F2F3F5',
        },
      },
    },
  },
  plugins: [],
}
export default config
