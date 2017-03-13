'use strict';
const getEslintCommonConfig = require('./getEslintCommonConfig');

module.exports = options => {
  const config = getEslintCommonConfig(options);
  return Object.assign({}, config, {
    env: {
      browser: true
    },
    rules: {
    },
    extends: [].concat(config.extends)
  });
};
