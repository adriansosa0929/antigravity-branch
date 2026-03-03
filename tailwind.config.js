/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'biometric-blue': '#00f0ff',
                'neural-neon': '#39ff14',
                'dark-bg': '#0a0a0a',
                'panel-bg': '#1a1a1a',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
