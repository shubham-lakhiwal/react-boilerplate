const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: { // leave off the file extension while importing
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.[hash:7].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
}