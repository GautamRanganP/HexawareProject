/* eslint-env node */
/* eslint "camelcase": 0 */
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');

// process images in assets to this quality
const imageQuality = 85;

// process ENV
const env = process.env;
const NODE_ENV = env.NODE_ENV || 'development';
const SOURCE_MAPS =
    env.SOURCE_MAPS ||
    (NODE_ENV === 'development' ? 'eval-source-map' : 'none');

const shareModuleAfter = 5;

const maxFileSizeToInline = 8192; // 8.192kb

const isDevelop = NODE_ENV === 'development';

const sourceMaps = SOURCE_MAPS;

const componentDir = path.resolve(__dirname, 'components');

const vendorDir = path.resolve(__dirname, 'library', 'js', 'vendor');

const stylesLocation = path.resolve(__dirname, 'themes');

const postcssPlugins = require('./postcss.config').processors(stylesLocation);

const publicPath = '/etc.clientlibs/ordre/clientlibs';

const aemPath = path.resolve(
    __dirname,
    'dist',
    'jcr_root',
    'apps',
    'ordre',
    'clientlibs'
);

// FE assets (fonts, images) location
const assetsFolder = 'assets/resources';

let webpackLoaders = [];

const templateOutputPath = path.resolve( aemPath, 'clientlib-admin', 'css', 'static.css' );
const templateInputPath = path.resolve( 'library', 'css', 'template.css' );

const themeOutputPath = path.resolve( aemPath, 'clientlib-base', 'resources', 'css', 'theme.css' );
const themeInputPath = path.resolve( 'static', 'theme-default', 'css', 'theme.css' );

// add in hot module reloading if in develop mode
if (isDevelop) {
    webpackLoaders = [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true&noInfo=true'
    ];
}

let entry = {};

// read all components
fs.readdirSync(componentDir).forEach(folder => {

    const filePath = path.resolve(componentDir, folder, 'index.js');

    if (folder !== 'commons' && folder !== '.DS_Store' && /\.js/.test(filePath) ) {

        entry[`${ folder }`] = [ `${filePath}` ];
    }
});

// add in webpack middlewares for each entry
entry = Object.entries(entry)
    .map(([ key, value ]) => [ key, [ ...webpackLoaders, ...value ] ])
    .reduce((a, v) => {
        a[v[0]] = v[1];

        return a;
    }, {});

// global entry
entry['global'] = [
    path.resolve(stylesLocation, 'styles', 'global', 'index.css'),
    './library/js/modules/browserPolyfill.js'
];

module.exports = {

    mode: NODE_ENV,

    devtool: sourceMaps,

    stats: 'minimal',

    entry,

    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    optimization: isDevelop ? {} : {
        splitChunks: {
            minChunks: shareModuleAfter,
            cacheGroups: {
                react: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'react.bundle',
                    priority: 2
                },
                commons: {
                    chunks: 'initial',
                    name: 'commons',
                    priority: 1
                }
            }
        }
    },

    output: {
        path: aemPath,
        publicPath: '/',
        filename: `components/[name]/js/index.js`,
        chunkFilename: `components/[name]/js/index.js`,
        sourceMapFilename: '[file].map'
    },

    module: {
        rules: [
            {
                test: /\.(eot|ttf|woff|woff2|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: [ /images/ ],
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: maxFileSizeToInline,
                        name: `${ assetsFolder }/fonts/[name].[ext]`,
                        publicPath: isDevelop ? '/' : publicPath
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                exclude: [ /fonts/ ],
                use: [
                    isDevelop
                        ? null
                        : {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: imageQuality
                                }
                            }
                        },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: maxFileSizeToInline,
                            name: `${ assetsFolder }/images/[name].[ext]`,
                            publicPath: isDevelop ? '/' : publicPath
                        }
                    }
                ].filter(p => p)
            },
            sourceMaps !== 'none'
                ? {
                    test: /\.js$/,
                    exclude: [ /node_modules/ ],
                    use: [ 'source-map-loader' ],
                    enforce: 'pre'
                }
                : null,
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'components'),
                    path.resolve(__dirname, 'library', 'js')
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: '.babel-cache'
                        }
                    },
                    isDevelop
                        ? {
                            loader: 'eslint-loader',
                            options: { fix: true, cache: true, root: true }
                        }
                        : null
                ].filter(p => p)
            },
            {
                test: /\.css$/,
                use: isDevelop
                    ? [
                        'cache-loader',
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                importLoaders: 1,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: postcssPlugins
                            }
                        }
                    ]
                    : [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                importLoaders: 1,
                                sourceMap: sourceMaps !== 'none'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: postcssPlugins,
                                sourceMap: sourceMaps !== 'none'
                            }
                        }
                    ]
            }
        ].filter(p => p)
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),

        isDevelop ? new webpack.HotModuleReplacementPlugin() : null,

        isDevelop
            ? new StyleLintPlugin({
                configFile: path.resolve(__dirname, 'stylelint.config.js'),
                files: [
                    'theme/styles/**/*.css',
                    'components/*/styles/**/*.css'
                ]
            })
            : null,

        isDevelop ? null : new webpack.optimize.AggressiveMergingPlugin(),

        isDevelop
            ? null
            : new MiniCssExtractPlugin({
                moduleFilename: ( chunkData ) => {
                    return `components/${chunkData.name}/css/index.css`;
                },
                allChunks: true,
                chunkFilename: `components/[name]/css/index.css`,
                ignoreOrder: true
            }),

        // sourceMaps don't work correctly with OptimizeCssAssets so don't use it
        isDevelop || sourceMaps !== 'none'
            ? null
            : new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: { removeAll: true },
                    autoprefixer: false,
                    zindex: false
                },
                canPrint: true
            }),

        isDevelop
            ? null
            : new TerserPlugin({
                sourceMap: sourceMaps !== 'none',
                terserOptions: {
                    ie8: false
                },
                extractComments: false,
                cache: true,
                parallel: true
            }),

        isDevelop
            ? null
            : new CopyPlugin({
                patterns: [
                    {
                        from: vendorDir,
                        to: path.resolve(aemPath, 'assets', 'resources', 'vendor')
                    },
                    {
                        from: templateInputPath,
                        to: templateOutputPath
                    },
                    {
                        from: themeInputPath,
                        to: themeOutputPath
                    }
                ]
            })

    ].filter(p => p)
};
