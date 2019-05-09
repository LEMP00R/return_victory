process.traceDeprecation = true

const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        modules: ['node_modules'],
    	extensions: ['.scss', '.js', '.json']
  	},
    optimization: {
        minimizer: [
            new UglifyJsWebpackPlugin({
                parallel: true
            })
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  chunks: 'all'
                },
                common: {
                    name: 'common',
                    chunks: 'initial',
                    minSize: 0,
                    maxInitialRequests: Infinity
                }
            }
        },
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
            },
            {
                test: /\.php$/,
                loaders: [
                  'html-minify',
                  'php-loader'
                ]
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
            },
            {
                from: `../.htaccess`,
                to: `${PATHS.dist}`
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
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new CompressionPlugin({
            algorithm: 'gzip'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    node: {
	    fs: 'empty'
    }
};