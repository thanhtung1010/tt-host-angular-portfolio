const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  // remotes: {
    // "@tt-portfolio": "http://localhost:8081/remoteEntry.js",
    // "@tt-auth": "http://localhost:8082/remoteEntry.js",
  // },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  },

});
