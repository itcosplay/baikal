const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },

    devtool: 'source-map',

    module: {
        rules: [
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //         presets: ['@babel/preset-env']
            //         }
            //     }
            // },
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
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        // options: { sourceMap: true }
                    }
                ]
            },
            // {
            //     test: /\.(jpe?g|png|gif)$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 10 * 1024,
            //         fallback: {
            //             loader: 'file-loader',
            //             options: { name: './img/[name].[ext]' }
            //         }
            //     }
            // },
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
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin()
    ]
}