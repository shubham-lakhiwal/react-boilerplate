const { merge } = require('webpack-merge');
const commonConfigs = require('./webpack.common.js')

module.exports = ({ mode }) => {
  const envConfigs = require(`./webpack.${mode}.js`)
  return merge(commonConfigs, envConfigs)
}