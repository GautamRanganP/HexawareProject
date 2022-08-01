const postcssPrependImports = require('postcss-prepend-imports');
const postcssImport = require( 'postcss-import' );
const postcssMixins = require( 'postcss-mixins' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const postcssCustomMedia = require('postcss-custom-media');
const postcssFontFace = require( 'postcss-fontpath' );
const postcssUtilities = require( 'postcss-utilities' );
const postcssCssVariables = require( 'postcss-css-variables' );
const postcssNested = require( 'postcss-nested' );
const postcssFor = require( 'postcss-for' );
const postcssReporter = require('postcss-reporter');

const path = require('path');

module.exports = {
    processors: themeLocation => [
        postcssPrependImports({
            path: path.resolve(themeLocation, 'styles', 'config'),
            files: [ 'index.css' ]
        }),
        postcssImport(),
        postcssMixins(),
        postcssCssVariables(),
        postcssPresetEnv(),
        postcssCustomMedia(),
        postcssFor(),
        postcssUtilities(),
        postcssNested(),
        postcssFontFace({
            formats: [
                { type: 'woff', ext: 'woff' },
                { type: 'truetype', ext: 'ttf' }
            ]
        }),
        postcssReporter({
            plugins: [ '!postcss-import' ]
        })
    ]
};
