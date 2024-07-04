const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const dotenv = require('dotenv').config({path: 'src/.env'});
const { DefinePlugin } = require('webpack');

const angularFederationPlugin = {
  ...withModuleFederationPlugin({

    // remotes: {
    //   "@tt-portfolio": `${process.env['_REMOTE_MODULE_URL_ANGULAR_PORTFOLIO_']}remoteEntry.js`,
      // "@tt-auth": "http://localhost:8082/remoteEntry.js",
    // },

    shared: {
      ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      "tt-library-angular-porfolio": {
        singleton: true,
        strictVersion: true,
        requiredVersion: ">=2.0.0"
      }
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
