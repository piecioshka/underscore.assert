'use strict';

var webpack = require('webpack');
var pkg = require('./package.json');
var author = pkg.author.name + ' <' + pkg.author.email + '> (' + pkg.author.url + ')';

module.exports = {
    entry: {
        'underscore.assert': './index.js',
        'underscore.assert.min': './index.js'
    },

    output: {
        // library: '', // This is a plugin.
        libraryTarget: 'umd',
        filename: '[name].js',
        path: './dist/'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.js$/,
                loader: 'string-replace-loader',
                query: {
                    multiple: [
                        { search: '$AUTHOR$', replace: author },
                        { search: '$NAME$', replace: pkg.name },
                        { search: '$DESCRIPTION$', replace: pkg.description },
                        { search: '$VERSION$', replace: pkg.version },
                        { search: '$LICENSE$', replace: pkg.license }
                    ]
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};
