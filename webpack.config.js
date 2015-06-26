var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");
var webpack = require("webpack");

var config = {
	devtool: "source-map",
	entry: [
		"webpack-dev-server/client?http://localhost:3000",
		"webpack/hot/only-dev-server",
		"./src/tomatempo"
	],
	output: {
		path: __dirname + "/build/",
		filename: "app.js",
		publicPath: "/build/"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			"windows.jQuery": 'jquery'
		})
	],
	resolve: {
		root: [path.resolve(__dirname)],
		extensions: ["", ".jsx", ".js"]
	},
	module: {
		loaders: [
			{ test: /\.css$/, loaders: ['style', ExtractTextPlugin.loader('css-loader')]},
			{ test: /\.less?$/, loader: 'style!css!styles'},
			{ test: /\.jsx?$/, loaders: ['react-hot','babel'], exclude: [/node_modules/, /\.config.jsx?$/, /build/] },
			{ test: /\.woff$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.woff2$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.ttf$/, loader: "file-loader" },
			{ test: /\.eot$/, loader: "file-loader" },
			{ test: /\.svg$/, loader: "file-loader" }
		]
	}
};

module.exports = config;
