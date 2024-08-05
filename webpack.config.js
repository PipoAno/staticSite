const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    login: './src/app.js',
    page2: './src/page2.js'
  },
  devtool: "source-map",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'page2.html',
      template: './src/page2.html',
      chunks: ['page2']
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
};