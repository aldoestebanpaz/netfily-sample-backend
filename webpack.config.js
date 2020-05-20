const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    server: './index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js'
  },
  mode: 'production',
  target: 'node',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public', to: 'public' }]
    })
  ]
}
