const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    server: './src/server.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js'
  },
  mode: 'production',
  target: 'node',
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public', to: 'public' }]
    })
  ]
}
