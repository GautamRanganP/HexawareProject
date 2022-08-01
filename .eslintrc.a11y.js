/**
 * ESLint Accessibility Configuration
 *
 * @docs http://eslint.org/docs/user-guide/configuring
 */
const config = require( './.eslintrc' );

/**
 * Plugins
 *
 * @docs http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin
 */
config.plugins.push( 'jsx-a11y' ); // https://github.com/evcohen/eslint-plugin-jsx-a11y

/**
 * Extends
 *
 * @docs http://eslint.org/docs/user-guide/configuring#extending-configuration-files
 */
config.extends.push( 'plugin:jsx-a11y/strict' );

module.exports = config;