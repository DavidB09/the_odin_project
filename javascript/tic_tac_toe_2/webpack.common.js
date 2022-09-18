const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const devMode = process.env.NODE_ENV != 'production';

module.exports = {
    entry: './src/script.js',
    output: {
        filename: devMode ? '[name].bundle.js' : '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({ filename: devMode ? '[name].css' : '[name].[contenthash].css' }),
    ],
    module: {
        rules: [
            {
                test:/\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true }, },
                    { loader: 'postcss-loader', options: { sourceMap: true }, },
                ],
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                use: [
                    { loader: 'svgo-loader' },
                ],
            },
            {
                test: /\.otf$/i,
                type: 'asset/resource',
            },
        ],
    },
};
