process.traceDeprecation = true
const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')

const PATHS = {
	src: path.resolve(__dirname, '../src'),
	dist: path.resolve(__dirname, '../public')
}

module.exports = {
    context: PATHS.src,
	externals: {
		path: PATHS
	},
    entry: {
         main: './index.js'
    },
    resolve: {
    	extensions: ['.scss', '.js', '.json']
  	},
    optimization: {
        minimizer: [
            new UglifyJsWebpackPlugin({
                parallel: true
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(bmp|gif|jpeg|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: `${PATHS.src}`
                }
            },
            { 
                test: /\.(woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader',
                options: {
                    name: 'static/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: `static/images/*`,
                to: `${PATHS.dist}`,
                context: `${PATHS.src}`,
            },
            {
                from: `static/fonts/**/*`,
                to: `${PATHS.dist}`,
                context: `${PATHS.src}`,
            },
            {
                from: `static/icons/*`,
                to: `${PATHS.dist}`,
                context: `${PATHS.src}`,
            }, 
            {
                from: `static/favicon/*`,
                to: `${PATHS.dist}`,
                context: `${PATHS.src}`,
            }, 
            {
                from: `../manifest.json`,
                to: `${PATHS.dist}`
            }, 
            {
                from: `../browserconfig.xml`,
                to: `${PATHS.dist}`
            },
            {
                from: `backend/*`,
                to: `${PATHS.dist}`,
                context: `${PATHS.src}`,
            }
        ]),
        new HtmlWebpackPlugin({
        	inject: false,
            template: './index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new CompressionPlugin({
            algorithm: 'gzip'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    node: {
	    fs: 'empty'
    }
};