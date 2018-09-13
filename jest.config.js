const project = require('./project.json');

module.exports = {
  "collectCoverageFrom": [project.tests.source.files],
  "coverageReporters": ["html"],
  "coverageThreshold": {
    "global": {
      "statements": 100,
      "branches": 100,
      "functions": 100,
      "lines": 100
    }
  },
  "moduleNameMapper": {
    '@vue$': 'vue/dist/vue.common.js',
    '@environment$': `<rootDir>/${project.environments.source.root}/development.js`,
    '@scripts\/(.*)$': `<rootDir>/${project.scripts.source.root}$1`,
    '@styles\/(.*)$': `<rootDir>/${project.styles.source.root}$1`,
    '@mocks\/(.*)$': `<rootDir>/${project.mocks.source.root}$1`
  },
  "setupTestFrameworkScriptFile": "<rootDir>/jest.config.vue.js",
  "transform": {
    "^.+\\.(css|styl)$": "<rootDir>/src/mocks/styles.js",
    "^.+\\.js$": "babel-jest",
    "^.+\\.html$": "html-loader-jest"
  }
}
