var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
  entry: APP_DIR + '/iContentCollector.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'http://127.0.0.1:9999/public/'
  },
   devServer: {
      contentBase: './client/src',
      host: '127.0.0.1'
    },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
                test: /\.css$/,
                loader:'style-loader'
        },
         {
              test: /\.css$/,
              loader: 'css-loader',
            },
      {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' }),
            }
    ]
  },
   plugins: [
      new ExtractTextPlugin("[name].css")
    ]
};
module.exports = config;