const webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.resolve(path.join('./dist')),
};

module.exports = {
  context: __dirname,
  devServer: {
    contentBase: PATHS.dist,
  },
  entry: {
    main: path.join(PATHS.app, 'index.js'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test:   /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        options: {
          name: './images/[name].[ext]'
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: PATHS.dist,
  }
};
