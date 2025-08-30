const webpack = require('webpack')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Dev Developer')
    }),
    new RefreshWebpackPlugin(),
  ]
}