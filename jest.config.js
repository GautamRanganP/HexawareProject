const path = require('path');

const TEST_FILES_REGEX = '(components/.*/test/.*|(\\.|/)(test|spec))\\.js$';

module.exports = {
    verbose: false,
    collectCoverageFrom: [
        'components/**/*.js'
    ],
    coverageDirectory: 'reports/coverage',
    coveragePathIgnorePatterns: [
        '<rootDir>/components/index.js'
    ],
    coverageReporters: [
        'lcov',
        'text'
    ],
    coverageThreshold: {
        global: {
            branches: 40,
            functions: 50,
            lines: 40,
            statements: 40
        }
    },
    moduleNameMapper: {
        '\\.css$': path.join(__dirname, '/testConfig/mocks/styles.js')
    },
    modulePaths: [
        // Modules that will be available only in the Context of any of the Test.js files
        '<rootDir>/testConfig'
    ],
    setupFiles: [ './jest.setup.suites.js' ],
    setupFilesAfterEnv: ['./jest.setup.tests.js'],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost/',
    snapshotSerializers: [ 'enzyme-to-json/serializer' ],
    testPathIgnorePatterns: [
        '<rootDir>/dist',
        '<rootDir>/library',
        'node_modules*?'
    ],
    testRegex: TEST_FILES_REGEX,
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ]
};
