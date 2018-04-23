/// entry point +> output
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  // console.log('env', env);

  return {
    mode: env,
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: CSSExtract.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }]
        })
      }]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.css', '.scss']
    }
  };
};
// loader
