const merge = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common.conf')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const buildWepackConfig = merge(commonConfig, {
	mode: 'production',
    output: {
        path: commonConfig.externals.path.dist,
        filename: '[name].[hash:4].js',
        chunkFilename: 'chunks/[name].[chunkhash:4].js'
    },
	module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 
                	MiniCssExtractPlugin.loader, 
                	{
                		loader: 'css-loader',
                		options: {
                			url: false
                		}
                	}, 
                	'postcss-loader', 
                	{
                		loader: 'sass-loader',
                		options: {
                			sourceMap: true
                		}
                	}
                ]
            }
        ]
    },
    plugins: [
    	new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:4].css',
            chunkFilename: 'css/[name].[contenthash:4].css'
        })
    ]
})

module.exports = new Promise(resolve => resolve(buildWepackConfig))

