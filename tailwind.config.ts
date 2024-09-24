import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-roboto)', ...fontFamily.sans],
            },
            backgroundColor: {
                background: 'var(--background-color)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'welcome-gradient':
                    'linear-gradient(to bottom,#0000 80%, #fff 100%)',
            },
            keyframes: {},
            animation: {
                progress: 'progress .5s linear',
            },
            colors: {
                font: {
                    DEFAULT: 'var(--font)',
                    hover: 'var(--font-hover)',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
export default config
