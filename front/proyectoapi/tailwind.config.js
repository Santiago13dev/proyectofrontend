// mantiene ESM export si usas "type": "module"
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    // si usas line-clamp para truncar
    require('@tailwindcss/line-clamp')
  ]
}
