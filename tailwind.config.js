/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                lg: '2rem',
                xl: '4.8rem',
            }
        },
        colors: {
            main_bg: '#F00',
            white: '#fff',
        },
        fontSize: {
            sm: '0.8rem',
            md: '0.9rem',
            base: '1rem',
            lg: '1.2rem',
            xl: '1.4rem',
            '2xl': '1.6rem',
            '3xl': '1.8rem',
            '4xl': '2rem',
            '5xl': '2.2rem',
            '6xl': '2.4rem',
            '7xl': '2.6rem',
            '8xl': '2.8rem',
            '9xl': '3rem'    
        }
    },
    plugins: [],
}

