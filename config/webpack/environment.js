const { environment } = require('@rails/webpacker');
const merge = require('webpack-merge');

environment.loaders.set('css-modules', {
  test: /\.module.css$/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        sourceMaps: true,
      }
    }
  ],
});

const styleLoader = environment.loaders.get('style');
styleLoader.test = /\.(scss|sass)$/i;

module.exports = environment;
