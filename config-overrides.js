const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@assets': 'src/assets',
    '@features': 'src/features',
    '@pages': 'src/pages',
    '@redux': 'src/redux'
  })(config);

  return config;
};