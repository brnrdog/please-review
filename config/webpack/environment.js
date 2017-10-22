const { environment } = require('@rails/webpacker')
const merge = require('webpack-merge')

const cssLoaderOpts = {
  modules: true,
  sourceMap: true,
  localIdentName: '[name]__[local]___[hash:base64:5]'
}

const CSSLoader = environment.loaders.get('style').use.find(el => el.loader === 'css-loader')

CSSLoader.options = merge(CSSLoader.options, cssLoaderOpts)

module.exports = environment
