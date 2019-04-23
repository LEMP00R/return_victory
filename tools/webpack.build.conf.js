const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.conf');

const buildWebpackConfig = merge(commonWebpackConfig, {
	mode: 'production'
});

module.exports = new Promise((resolve, reject) => {
	resolve(buildWebpackConfig);
});