var path = require('path')

module.exports = {
    entry: './src/js/login.js',
    output: {
        filename: 'dist/bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                loaders: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    }
};