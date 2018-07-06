// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',

  // Use a custom framework adapter and set its relative path
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Specs are the cucumber feature files
  specs: [
    './features/*.feature'
  ],

  // cucumber command line options
  cucumberOpts: {
    require: ['./features/steps/**/*.ts'],
    tags: [],
    strict: true,
    format: [],
    dryRun: false,
    compiler: "ts:ts-node/register"
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  }
};
