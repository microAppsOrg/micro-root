const path = require('path');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');

import * as Common from './common';

module.exports = {
  entry: path.resolve(__dirname, '../src/root.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      Common.createLessRule(),
      Common.createTsRule(),
      Common.createJsxRule(),
      Common.createAssetsRule(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new WebpackBar(),
  ],
  devServer: {
    port: 8081,
    hot: true,
    open: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.less'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
};
