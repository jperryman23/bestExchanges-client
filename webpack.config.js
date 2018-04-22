// entry point +> output

const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules : [
    {
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.json$/,
      use: 'json-loader',
    },
    {
      test: /\.(s)?css$/,
      use: ['style-loader', 'css-loader'], //, 'sass-loader'
    },
    {
      test: /\.svg$/,
      use: 'svg-inline-loader',
    },
    {
      test: /\.(jpe?g|png|gif|ico)$/i,
      use: 'file-loader',
    }
      ]
  },
  // devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    inline: true
  },
  resolve: {
  extensions: ['.js', '.json', '.jsx', '.css', '.scss']
  }
}

// loader
