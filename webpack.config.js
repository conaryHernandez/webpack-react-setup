const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const authPrefixer = require('autoprefixer');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	devtool: 'cheap-module-eval-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, '/src')
				],
				loader: 'eslint',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/,
			},
			{
				test:/\.(s*)css$/,
				exclude: /node_modules$/,
				use: [
					{loader:'style-loader'},
					{loader: 'css-loader', options: {
						importLoaders: 1,
						modules: true,
						localIdentName: '[name]__[local]__[hash:base64:5]'
					}},
					{loader: 'sass-loader', options: {
						ident: 'scss',
						plugins: () => [authPrefixer()]
					}}	
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				loader: 'url-loader?limit=8000&name=images/[name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new MiniCssExtractPlugin(),
	]
}
