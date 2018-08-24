const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: { presets: ['babel-preset-stage-1'] }
            }, {
                test: /\.sass$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader?-url" }, { loader: "sass-loader" }]
            }]
    }
};