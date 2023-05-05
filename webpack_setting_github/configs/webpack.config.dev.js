const { merge } = require('webpack-merge');
const path = require('path');

const webpackConf = require('./webpack.config');

module.exports = merge(webpackConf, {
	mode: 'development',
	devServer: {
		static: {
			directory: path.resolve(__dirname, '../dist/'),
			publicPath: '/',
			watch: true
		},
		open: true,
		hot: false
	},
	devtool: 'eval-source-map'
});