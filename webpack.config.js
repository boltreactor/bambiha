const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'assets/src/js/index'),
    output: {
        path: path.join(__dirname, 'assets/dist'),
        filename: '[name].js'
    },
    // plugins: [
    //     new BundleTracker({
    //         path: __dirname,
    //         filename: 'webpack-stats.json'
    //     }),
    //     new CleanWebpackPlugin(),
    // ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.jsx?$/,
    //             loader: 'babel-loader',
    //             exclude: /node_modules/,
    //         },
    //         {
    //             test: /\.css$/,
    //             loader: ['style-loader', 'css-loader'],
    //         },
    //     ],
    // },

    // Configurations with webpack 5
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify("production"),
            },
        }),
        new CleanWebpackPlugin(),
        new BundleTracker({
            path: __dirname,
            filename: 'webpack-stats.json'
        }),
    ],
}
