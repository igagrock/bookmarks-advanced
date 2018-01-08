const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC = 'src';
const BUILD = 'dist';

const config = {
    context: path.resolve(__dirname, SRC),
    entry: {
        background: './app/js/background.js',
        tab : './app/js/tab.js',
        vendor: ['jquery']
    },
    output: {
        path: path.resolve(__dirname, BUILD),
        filename: 'js/[name]-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /src.*\.js$/,
                include: path.resolve(__dirname, SRC),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                //similarly for css without sass loader
                test: /\.scss$/,
                include: path.resolve(__dirname, SRC),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: "css-loader", options: { sourceMap: true } },
                        { loader: "postcss-loader", options: { sourceMap: true } },
                        { loader: "sass-loader", options: { sourceMap: true } }
                    ]
                })
            },
            {
                test: /\.css$/,
                // include: path.resolve(__dirname, 'node_modules/bootstrap-css/lib/'),
                include: path.resolve(__dirname, SRC),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: "css-loader", options: { sourceMap: true } },
                        { loader: "postcss-loader", options: { sourceMap: true } }
                    ]
                })
            },
            {
                test: /\.(jp(e*)g|svg)$/,
                include: path.resolve(__dirname, SRC),
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.png$/,
                include: path.resolve(__dirname, SRC),
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000 ,
                        name: '[name].[ext]',
                        outputPath: 'icons/'
                    } // Convert images < 100k to base64 strings

                }]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            {from:'./app/assets/icons',to:'./icons/', debug:'debug'} 
        ]),
        new CopyWebpackPlugin([
            {from:'./app/manifest.json',to:'./', debug:'debug'} 
        ]), 
        new ExtractTextPlugin('styles/app.css'),
        new HtmlWebpackPlugin({
            title : 'Advanced Bookmark Manager',
            template :'./app/templates/tab.html',
            chunks : ['tab','vendor'],
            filename: "./templates/tab.html",
            cache : true
          }),
        //new UglifyJSPlugin({ test: /\.js($|\?)/i }),
    ]

};
module.exports = config