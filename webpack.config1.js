var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/js/login.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: "/"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.(png|gif|jpg)$/, loader:'url-loader'},
        ]
    },
    watch: true
};