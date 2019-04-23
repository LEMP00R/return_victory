const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const handlebars = require('handlebars');
const layouts = require('handlebars-layouts');
layouts.register(handlebars);

const PATHS = {
	src: path.resolve(__dirname, '../src'),
	dist: path.resolve(__dirname, '../dist')
}

const hbsPages = fs.readdirSync(path.resolve(PATHS.src, 'markup/views/')).filter(item => !item.includes('.'));

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
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.hbs$/,
				use: 'handlebars-loader'
			},
			{
				test: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
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
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
            chunkFilename: '[id].css'
		}),
		new CopyWebpackPlugin([
			{ 
				from: `static/**/*`,
				to: `${PATHS.dist}`,
				context: `${PATHS.src}`,
			}
		]),
		...hbsPages.map(page => new HandlebarsPlugin({
		  entry: path.join(PATHS.src, `markup/views/${page}/${page}.hbs`),
	      output: path.join(PATHS.dist, `${page}/index.html`),
	      data: path.join(PATHS.src, `markup/views/${page}/data.json`),
	      partials: [
	        path.join(PATHS.src, 'markup/partials/*/*.hbs')
	      ]
		}))
	]
}