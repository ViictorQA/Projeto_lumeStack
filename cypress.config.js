const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    // Configuração para plugins
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    // Use specPattern para definir onde estão os arquivos de teste
    specPattern: "cypress/**/*.cy.js",
  },
});
