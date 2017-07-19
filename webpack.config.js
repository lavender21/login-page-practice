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
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader?name=[hash].[ext]', {
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                            progressive: true
                        },
                        gifsicle: {
                            interlaced: false
                        },
                        optipng: {
                            optimizationLevel: 4
                        },
                        pngquant: {
                            quality: '75-90',
                            speed: 3
                        }
                    }
                }]
            }
        ]
    }
};