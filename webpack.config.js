const path = require('path');

module.exports = (env, argv) => {
  const { mode } = argv;
  return {
    entry: './client/index.js',

    devtool: (mode === 'development') ? 'inline-source-map' : false,

    output: {
      path: path.resolve(path.join(__dirname, 'public')),
      filename: 'bundle.js',
      publicPath: '/',
    },

    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      ],
    },

    optimization: {
      minimize: mode !== 'development',
    },

    devServer: {
      proxy: {
        '/api': 'http://localhost:8081',
      },
    },
  };
};
