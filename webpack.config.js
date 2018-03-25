var path = require( 'path' );
var webpack = require( 'webpack' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: path.resolve( __dirname, 'src', 'app' ),
    output: {
        path: path.resolve( __dirname, 'dist' ),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve( __dirname, './' ),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /(\.(s*)css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    }, 
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                  name: 'webfonts/[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Main',
            template: 'index.hbs',
        })
    ],
    resolve: {
        alias: {
            Components: path.resolve( __dirname, 'src', 'components' ),
            Styles: path.resolve( __dirname, 'src', 'styles' ),
        },
        extensions: ['.js', '.jsx', '.css'],
    },
};