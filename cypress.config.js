const { defineConfig } = require("cypress");
module.exports = defineConfig({
  apiUrl: "https://exchange.da-desk.com/agency-api/1.1",
  url: "https://qa-test.cuat.marcura.com/dashboard",
  screenshotsFolder: "screenshots",
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 20000,
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: "support",
    specPattern: "specs/**/*.cy.{js,jsx,ts,tsx}",
  },
});
