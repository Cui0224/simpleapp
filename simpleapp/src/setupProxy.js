const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8008/',
      changeOrigin: true,
    })
  ),
    app.use(
      '/list1',
      createProxyMiddleware({
        target: 'https://show.maoyan.com/maoyansh/myshow/ajax/v2/performance/',
        changeOrigin: true,
      })
    )
}
