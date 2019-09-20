const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

// const { parseAngularRoutes } = require('guess-parser');

// parseAngularRoutes('PATH_TO_TS_CONFIG', ['./src/app/app-routing.module.ts']);

module.exports = {
  plugins: [
    new GuessPlugin({
      GA: 'UA-111111111-1',
      period: {
        startDate: new Date('2019-1-1'),
        endDate: new Date()
      },
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    })
  ]
};
