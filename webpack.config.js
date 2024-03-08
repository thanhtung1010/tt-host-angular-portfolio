const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "portfolio": "http://localhost:8081/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: '>= 17.2.0' }),
    "@angular/platform-browser": {
      requiredVersion: '>= 17.2.0',
      singleton: true,
      strictVersion: true,
    },
    "@angular/router": {
      requiredVersion: '>= 17.2.0',
      singleton: true,
      strictVersion: true,
    },
  },

});
