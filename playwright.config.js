const { defineConfig, devices } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:8080',
    trace: 'on-first-retry'
  },
  webServer: {
    command: 'npm start',
    url: 'http://127.0.0.1:8080',
    timeout: 120000,
    reuseExistingServer: true
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
})