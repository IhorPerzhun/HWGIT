const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const templates = fs.readdirSync(path.resolve(__dirname, '../src/'))
	.filter(file => ['.html'].includes(path.extname(file).toLowerCase()))


const htmlPluginEntries = templates.map(file => new HtmlWebpackPlugin({
	filename: file,
	template: path.resolve(__dirname, '../src/' + file)
}))

module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/js/app.js')
	},
	output: {
		filename: 'assets/js/[name].js',
		path: path.resolve(__dirname, '../dist/')
	},
	module: {
		rules: [
			{
				test: /\.((c|sa|sc)ss)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			},
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(png|gif|jpe?g|svg)$/i,
				type: 'asset/resource',
				parser: {
					dataUrlCondition: {
						max: 8192,
					}
				},
				generator: {
					filename: 'assets/images/[name].[hash:6][ext]'
				}
			},
			{
				test: /\.html$/i,
				use: ['html-loader']
			},
		],
	},
	optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['imagemin-gifsicle', { interlaced: true }],
              ['imagemin-mozjpeg', { progressive: true }],
              ['imagemin-pngquant', { optimizationLevel: 5 }],
              [
                'imagemin-svgo',
                {
                  plugins: [
                    {
                      name: 'removeViewBox',
                      active: false,
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'assets/css/[name].css'
		})
	].concat(htmlPluginEntries),
	target: 'web'
}