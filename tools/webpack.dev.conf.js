const webpack = require('webpack'); 
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.conf');

const devWebpackConfig = merge(commonWebpackConfig, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: commonWebpackConfig.externals.paths.dist,
		publicPath: '/',
		overlay: {
			warnings: false,
			errors: true
		},
	    open: true,
	    watchContentBase: true
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map'
		})
	]
});

module.exports = new Promise((resolve, reject) => {
	resolve(devWebpackConfig);
});