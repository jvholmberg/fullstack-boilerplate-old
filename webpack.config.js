var webpack = require('webpack');
var path = require('path');
var extend = require('extend');
var nodeExternals = require('webpack-node-externals');
var CopyWebpackPlugin = require('copy-webpack-plugin');
// var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false';

/*
* Setup general config for webpack
*/
var config = {
  devtool: '#source-map',
  module: {
    loaders: [
      { test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react'] }},
        { test: /\.(sass|scss)$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.json$/,
        loader: 'json-loader' }
    ]
  },
  plugins: [
    /*
    * Copy EJS-files into build directory
    */
    new CopyWebpackPlugin([
      { from: {
          glob: path.resolve(__dirname, 'src', 'public', 'content'),
          dot: true
        },
        to: path.join(__dirname, 'build', 'public', 'content')
      }
    ])
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ]
};
/*
* Setup webpack for export of server-code
*/
const serverConfig = extend(true, {}, config, {
  target: 'node',
  context: path.join(__dirname, 'src'),
  entry: [
    './server.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: path.join(__dirname, 'build'),
    filename: 'server.bundle.js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()]
});

/*
* Setup webpack for export of client-code
*/
const clientConfig = extend(true, {}, config, {
  target: 'web',
  context: path.join(__dirname, 'src', 'public', 'static'),
  entry: [
    './client.js'
  ],
  output: {
    path: path.join(__dirname, 'build', 'public', 'static'),
    publicPath: path.join(__dirname, 'build'),
    filename: 'client.bundle.js'
  }
});

module.exports = [serverConfig, clientConfig];
