// entry point +> output

const path = require('path');

module.exports = {
  // mode: "production", // "production" | "development" | "none"
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules : [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        // 'style-loader',
        // 'css-loader',
        // 'sass-loader'
      ]
    }]
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
