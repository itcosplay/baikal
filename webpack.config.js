const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/expeditions.js'
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
            filename: './style.expedition.css'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/expedition.html',
            filename: './expedition.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: './src/img', to: './img' },
            { from: './src/favicon', to: './favicon' },
            { from: './src/mailModal.php', to: './mailModal.php' },
            { from: './src/mail.php', to: './mail.php' },
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Inputmask: 'inputmask',
            'window.Inputmask': 'inputmask'
        })
    ]
}