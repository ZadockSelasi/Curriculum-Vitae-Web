/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2abb9b",
                    foreground: "#ffffff",
                },
                secondary: "#222222",
                bg: "#f8f6f1",
            },
            fontFamily: {
                heading: ["Outfit", "sans-serif"],
                body: ["Outfit", "sans-serif"],
                accent: ["Playfair Display", "serif"],
            },
        },
    },
    plugins: [],
}
