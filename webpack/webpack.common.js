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
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|JPG)$/,
        type: "asset/resource",
      },
      {
        test: /\.(svg|woff|ttf|woff2|eot)$/,
        type: "asset/inline",
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
}