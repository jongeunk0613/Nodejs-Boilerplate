const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: {
    index: './source/javascripts/index.js',
    about: './source/javascripts/about.js',
  },
  output: {
    path: path.resolve(__dirname, '../backend/public'),
    filename: '[name]_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './source/htmls/index.html',
      filename: './index.html',
      chunks: ['index'],
    }),
    new HtmlwebpackPlugin({
      template: './source/htmls/about.html',
      filename: './about.html',
      chunks: ['about'],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../backend/public'),
    port: 5050,
  },
};
