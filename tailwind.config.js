module.exports = {
    darkMode: 'class',
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./node_modules/flowbite/**/*.{js,ts}"
    ],
    theme: {
      extend: {
        colors: {
          themeBackground: 'var(--background)',
          themeText: 'var(--text)',
        },
      }
    },
    plugins:[require("flowbite/plugin")],
  }