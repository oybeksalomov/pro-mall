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
            'primary-50': 'rgb(var(--primary-50))',
            'primary-100': 'rgb(var(--primary-100))',
            'primary-200': 'rgb(var(--primary-200))',
            'primary-300': 'rgb(var(--primary-300))',
            'primary-400': 'rgb(var(--primary-400))',
            'primary-500': 'rgb(var(--primary-500))',
            'primary-600': 'rgb(var(--primary-600))',
            'primary-700': 'rgb(var(--primary-700))',
            'primary-800': 'rgb(var(--primary-800))',
            'primary-900': 'rgb(var(--primary-900))',
            'primary-950': 'rgb(var(--primary-950))',
            'surface-0': 'rgb(var(--surface-0))',
            'surface-50': 'rgb(var(--surface-50))',
            'surface-100': 'rgb(var(--surface-100))',
            'surface-200': 'rgb(var(--surface-200))',
            'surface-300': 'rgb(var(--surface-300))',
            'surface-400': 'rgb(var(--surface-400))',
            'surface-500': 'rgb(var(--surface-500))',
            'surface-600': 'rgb(var(--surface-600))',
            'surface-700': 'rgb(var(--surface-700))',
            'surface-800': 'rgb(var(--surface-800))',
            'surface-900': 'rgb(var(--surface-900))',
            'surface-950': 'rgb(var(--surface-950))',
            main_color: '#F00',
            white: '#fff',
            gray_light: '#cdcdcf',
            gray_medium: '#A6A9B2'
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

