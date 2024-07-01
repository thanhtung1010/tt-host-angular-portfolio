const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const { DefinePlugin } = require('webpack');

const angularFederationPlugin = {
  ...withModuleFederationPlugin({

    // remotes: {
      // "@tt-portfolio": "http://localhost:8081/remoteEntry.js",
      // "@tt-auth": "http://localhost:8082/remoteEntry.js",
    // },

    shared: {
      ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },
  }),
};

angularFederationPlugin.plugins = (angularFederationPlugin.plugins || []).concat([
  new DefinePlugin({
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
  }),
]);

module.exports = angularFederationPlugin;
