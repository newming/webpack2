const path = require('path');
let webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "/dist/"
  },
  // watch: true,
  devtool: "source-map",
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    contentBase: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader","postcss-loader"]
      },
      { test: /\.(jpe?g|png)$/, use: 'file-loader?name=images/[name].[hash:8].[ext]' },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename: 'build.min.css'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'hello world',
      // filename: 'admin.html' 叫别的不行。。。
      template: 'templete/index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:3000'
    })
  ]
}
