var path    = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry:  [
    'webpack-hot-middleware/client',
    'babel/polyfill',
    './app/client'
  ],
  output: {
    path:     path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'app'],
    extensions:         ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test:    /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react-hmre']
      }
    }]
  }
};
