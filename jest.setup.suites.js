/**
 * NOTE:
 * Since every test runs in its own environment, these scripts will be executed
 * in the testing environment immediately before executing the test code itself.
 *
 * This code will execute before ./jest.setup.tests.js
 */

/**
 * Setup Enzyme Adapter
 */
const { configure } = require('enzyme');

const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

const polyfill = require('./testConfig/mocks/polyfill');

polyfill();