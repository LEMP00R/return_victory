const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.conf')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devWebpackConfig = merge(commonConfig, {
	mode: 'development',
    devtool: 'source-map',
    output: {
        path: commonConfig.externals.path.dist,
        chunkFilename: 'chunks/[name].js',
        filename: '[name].js'
    },
	devServer: {
        contentBase: commonConfig.externals.path.dist,
        publicPath: '/',
        open: true,
        watchContentBase: true,
        overlay: {
			warnings: false,
			errors: true
		}
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise(resolve => resolve(devWebpackConfig))