var path = require('path');
var webpack = require('webpack');
var packageJSON = require('./package.json');
const extractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

if(ENV === 'build'||ENV === 'build-min'){
    var config = {
        entry: {
            'omi-swiper': './src/index.js'
        },
        output: {
            // path: __dirname,
            path: path.join(__dirname, 'dist/'),
            libraryTarget: 'umd',
            filename:  '[name].js'
            //umdNamedDefine: true
        },
        externals: {
            "omi": 'omi',
            "omio": 'omi'
        },
        module: {
            loaders: [
                {
                    loader: 'babel-loader',
                    test: path.join(__dirname, 'src'),
                    query: {
                        presets: ['env','omi'],
                        plugins : [
                            "transform-es3-property-literals",
                            "transform-es3-member-expression-literals",
                            "transform-class-properties",
                            "transform-object-rest-spread"
                        ]
                    },
                },
                {
                  test: /[\\|\/]_[\S]*\.css$/,
                  use: [
                      'to-string-loader',
                      'style-loader',
                      'css-loader'
                  ]
                },
            ]
        },
        plugins: [
            // Avoid publishing files when compilation fails
            new webpack.BannerPlugin(packageJSON.version),
            new webpack.NoEmitOnErrorsPlugin()
        ],
        stats: {
            // Nice colored output
            colors: true
        },
        // Create Sourcemaps for the bundle
        // devtool: 'source-map',
    };

    if(ENV === 'build-min'){
        config.plugins.push(new webpack.optimize.UglifyJsPlugin());
        config.entry = {
            'omi-swiper.min': './src/index.js'
        };
    }
}

module.exports = config;
