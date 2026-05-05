import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            fontSize: '1.125rem',
            lineHeight: '1.8',
            maxWidth: 'none',
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              color: theme('colors.gray.900'),
            },
            h2: {
              fontSize: '1.5rem',
              fontWeight: '600',
              marginTop: '1.25em',
              marginBottom: '0.5em',
              color: theme('colors.gray.800'),
            },
            p: {
              marginTop: '1em',
              marginBottom: '1em',
            },
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: theme('colors.gray.300'),
              color: theme('colors.gray.600'),
              paddingLeft: '1rem',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontSize: '0.95em',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
