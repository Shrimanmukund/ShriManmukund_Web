import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#1B3A5B',
          'indigo-deep': '#122844',
          ivory: '#F7F3EB',
          'ivory-deep': '#EFE7D2',
          cream: '#FBF7EC',
          'cream-warm': '#F5EDD5',
          white: '#FFFFFF',
          sage: '#6B7F5F',
          'sage-mid': '#7A8F70',
          'sage-soft': '#A8B99E',
          'sage-lighter': '#E5EBDD',
          gold: '#B8894A',
          'gold-warm': '#C89968',
          'gold-soft': '#E4CFA5',
          'rose-gold': '#C08477',
          'rose-mid': '#B47269',
          'rose-soft': '#E8CFC8',
          'rose-lighter': '#F5E4DF',
          ink: '#2D2A20',
          brown: '#5C4F3A',
          'brown-warm': '#8B7355',
          mute: '#A69880',
          'leaf-line': 'rgba(107, 127, 95, 0.15)',
          alert: '#B91C1C',
          'alert-soft': '#FEE2E2',
          warning: '#B47500',
          'warning-soft': '#FBF0DA',
          info: '#1D6EAE',
          'info-soft': '#E0EEFA',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Fraunces', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        devanagari: ['var(--font-noto-devanagari)', 'Noto Sans Devanagari', 'var(--font-inter)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(45, 42, 32, 0.04)',
        'warm-md': '0 4px 16px rgba(45, 42, 32, 0.08)',
        'warm-lg': '0 10px 30px rgba(45, 42, 32, 0.12)',
        'warm-xl': '0 20px 40px rgba(45, 42, 32, 0.16)',
      },
      borderRadius: {
        'warm-sm': '4px',
        'warm': '8px',
        'warm-lg': '12px',
        'warm-xl': '16px',
        'warm-2xl': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
