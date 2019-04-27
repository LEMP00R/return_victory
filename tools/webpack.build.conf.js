const merge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonWebpackConfig = require('./webpack.common.conf');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const buildWebpackConfig = merge(commonWebpackConfig, {
	mode: 'production',
	optimization: {
		minimizer: [
			new OptimizeCssAssetsWebpackPlugin()
		]
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
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
			},
			{ 
				test: /\.(woff|woff2|svg|eot|ttf|svg)$/, 
				loader: 'url-loader',
				options: {
				    limit: 10000,
				    name: 'static/fonts/[name].[ext]'
				}
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),
		new CleanPlugin()
	]
});

module.exports = new Promise((resolve, reject) => {
	resolve(buildWebpackConfig);
});