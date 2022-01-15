module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        // target: process.env.NODE_ENV === 'development' ? 'http://39.98.123.211' : 'http://39.98.123.211',
        changeOrigin: true
        // pathRewrite: { '^/api': '' }
      }
    }
  }
}