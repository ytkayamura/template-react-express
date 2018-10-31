const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {

  entry: path.resolve(__dirname, 'server/server.js'),

  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'server.bundle.js',
  },

  target: 'node',

  externals: [nodeExternals()],

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },

};
