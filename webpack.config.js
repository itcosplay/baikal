const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name].js'
    },

    // devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        // options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: 'postcss.config.js' }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        // options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: './fonts/[name].[ext]' }
                    }
                ]
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './style.bundle.css'
            // filename: './style.bundle.css'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/index.html',
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/ekspedecii.html',
            filename: './ekspedecii.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/eko-tours.html',
            filename: './eko-tours.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/location.html',
            filename: './location.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/events.html',
            filename: './events.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/contacts.html',
            filename: './contacts.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/oleniy-fest.html',
            filename: './oleniy-fest.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: './src/img', to: './img' },
            { from: './src/favicon', to: './favicon' },
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            // 'window.jQuery': 'jquery',
            // Inputmask: 'inputmask',
            // 'window.Inputmask': 'inputmask'
        })
    ]
}