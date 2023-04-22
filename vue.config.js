const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: '',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@assets': path.join(__dirname, './src/assets'),
        '@images': path.join(__dirname, './src/assets/images'),
      },
      extensions: ['.js', '.vue', '.json', '.ts'],
    },
  },
});
