var path = require('path');
var webpack = require('webpack');

var SRC_PATH = path.join(__dirname, 'src');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src')
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: path.join(SRC_PATH, 'css')
            },{
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
