/* eslint-env node */

const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  entry: {
    // Each entry in here would declare a file that needs to be transpiled
    // and included in the extension source.
    // For example, you could add a background script like:
    background: 'background.js',
    content_scripts: 'content_scripts.js'
  },
  output: {
    // This copies each source entry into the extension dist folder named
    // after its entry config key.
    path: path.join(__dirname, 'extension', 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      exclude: [/node_modules\/(?!idb-file-storage)/],
      test: /\.js$/,
      use: [
        // This transpiles all code (except for third party modules) using Babel.
        {
          // Babel options are in .babelrc
          loader: 'babel-loader',
        },
      ]
    }]
  },
  resolve: {
    // This allows you to import modules just like you would in a NodeJS app.
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },
  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
  ],
  // This will expose source map files so that errors will point to your
  // original source files instead of the transpiled files.
  devtool: 'source-map',
};
