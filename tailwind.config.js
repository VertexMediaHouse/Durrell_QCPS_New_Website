/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Framer breakpoints from the Housify source: <810 phone, 810-1199 tablet, >=1200 desktop
    screens: {
      md: '810px',
      lg: '1200px',
      xl: '1360px',
    },
    // QCPS brand palette only — replaces Tailwind's defaults so no other color can be used.
    // Navy: headings, nav, text, brand elements. Teal: CTAs and selective highlights.
    // Light Gray: subtle section/card backgrounds and borders. White: backgrounds.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      ink: '#17324D',
      primary: '#258A82',
      light: '#F1F4F6',
    },
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Bricolage Grotesque Placeholder"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(23, 50, 77, 0.25)',
      },
      keyframes: {
        'ticker-x': { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'ticker-y': { from: { transform: 'translateY(0)' }, to: { transform: 'translateY(-50%)' } },
      },
      animation: {
        'ticker-x': 'ticker-x 40s linear infinite',
        'ticker-x-reverse': 'ticker-x 40s linear infinite reverse',
        'ticker-y': 'ticker-y 30s linear infinite',
        'ticker-y-reverse': 'ticker-y 30s linear infinite reverse',
      },
    },
  },
  plugins: [],
}
