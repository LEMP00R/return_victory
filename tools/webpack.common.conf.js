const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const PATHS = {
	src: path.resolve(__dirname, '../src'),
	dist: path.resolve(__dirname, '../dist')
}

const htmlPages = fs.readdirSync(path.resolve(PATHS.src, 'markup/')).filter(item => !item.includes('.'));

module.exports = {
	externals: {
		paths: PATHS
	},
	entry: {
		app: PATHS.src
	},
	output: {
		filename: 'js/[name].js',
		path: PATHS.dist,
		publicPath: '/'
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(bmp|gif|jpe?g|png)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
					context: `${PATHS.src}`
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
			}
		]),
		new HtmlWebpackPlugin({
      		filename: 'index.html',
      		template: `${PATHS.src}/markup/index.html`
		}),
		...htmlPages.map(page => new HtmlWebpackPlugin({
      		filename: `${page}/index.html`,
      		template: `${PATHS.src}/markup/${page}/index.html`
		}))
	]
}