module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './content/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6550DC',
                secondary: '#9BA3EB',
            },
            spacing: {
                '3xs': `${0.5 * 0.25}em`,
                '2xs': `${1 * 0.25}em`,
                xs: `${2 * 0.25}em`,
                sm: `${3 * 0.25}em`,
                base: `${4 * 0.25}em`,
                md: `${6 * 0.25}em`,
                lg: `${10 * 0.25}em`,
                xl: `${14 * 0.25}em`,
                '2xl': `${18 * 0.25}em`,
                '20%': '20%',
                '50%': '50%',
            },
            maxWidth: {
                widest: '1600px',
            },
        },
    },
    mode: 'jit',
    plugins: [],
};