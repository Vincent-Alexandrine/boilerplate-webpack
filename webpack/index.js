const commonConfig = require('./config/common.js');
const devConfig = require('./config/dev.js');
const prodConfig = require('./config/prod.js');

module.exports = (env, argv) => {
  let envConfig;

  if (argv.mode === 'development')
    envConfig = devConfig;
  else if (argv.mode === 'production')
    envConfig = prodConfig;
  return {
    ...commonConfig,
    ...envConfig
  };
};
