export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // viewMode: 'canvas' / 'docs'
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}