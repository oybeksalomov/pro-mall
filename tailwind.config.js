/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'lg': '1024px',
            'xl': '1280px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                xl: '3rem',
            }
        },
        colors: {
            main_color: '#F00',
            white: '#fff',
            gray_light: '#cdcdcf',
            gray_medium: '#A6A9B2',
            gray_lightest: '#f6f6f6',
            gray_auth_bg: "#E8E8E8",
            gray_text: "#9AA1A7",
        },
        fontFamily: {
            inter: ["Inter", 'san-serif'],
        },
        fontSize: {
            xs: '1rem',
            sm: '1.2rem',
            md: '1.4rem',
            base: '1.6rem',
            lg: '1.8rem',
            xl: '2rem',
            '2xl': '2.2rem',
            '3xl': '2.4rem',
            '4xl': '2.6rem',
            '5xl': '2.8rem',
            '6xl': '3rem',   
        }
    },
    plugins: [],
}

