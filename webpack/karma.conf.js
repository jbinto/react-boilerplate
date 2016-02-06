const webpackConfig = require('./webpack.test.babel');

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    reporters: ['mocha'],

    browsers: process.env.TRAVIS
      ? ['ChromeTravis']
      : ['Chrome'],

    autoWatch: false,
    singleRun: true,

    files: [
    // '../app/**/*.test.js'
      {
        pattern: `./test-bundler.js`,
        watched: false,
        served: true,
        included: true
      }
    ],

    preprocessors: {
      // ['../app/**/*.test.js']: ['webpack', 'sourcemap'],
      ['./test-bundler.js']: ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    // make Webpack bundle generation quiet
    webpackMiddleware: {
      noInfo: true
    },

    customLaunchers: {
      ChromeTravis: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  });
};
