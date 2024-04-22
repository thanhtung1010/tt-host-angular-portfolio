const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "@tt-portfolio": `${process.env['_REMOTE_MODULE_URL_ANGULAR_PORTFOLIO_']}remoteEntry.js`,
    // "@tt-auth": "http://localhost:8082/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "tt-library-angular-porfolio": {
      singleton: true,
      strictVersion: true,
      requiredVersion: ">=1.0.2"
    }
  },

});
