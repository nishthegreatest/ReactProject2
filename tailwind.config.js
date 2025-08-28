/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,jsx}"],
theme: {
extend: {
colors: {
brand: {
DEFAULT: "#111827", // slate-900
light: "#1f2937",
accent: "#2563eb" // blue-600
}
}
}
},
plugins: [],
}