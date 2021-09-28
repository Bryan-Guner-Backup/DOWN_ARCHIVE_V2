const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/', {
      target: 'https://niyon-be-chat.herokuapp.com/',
      changeOrigin: true
    })
  )

  app.use(
    proxy('/chathistory', {
      target: 'https://niyon-be-chat.herokuapp.com/',
      changeOrigin: true
    })
  )

  app.use(
    proxy('/connection', {
      target: 'https://niyon-app.herokuapp.com',
      secure: false,
      changeOrigin: true
    })
  )

  app.use(
    proxy('/profile', {
      target: 'https://niyon-app.herokuapp.com',
      secure: false,
      changeOrigin: true
    })
  )

  app.use(
    proxy('/auth/login', {
      target: 'https://niyon-app.herokuapp.com',
      secure: false,
      changeOrigin: true
    })
  )

  app.use(
    proxy('/news', {
      target: 'https://niyon-app.herokuapp.com',
      secure: false,
      changeOrigin: true
    })
  )

  app.use(
    proxy('/auth/register', {
      target: 'https://niyon-app.herokuapp.com',
      secure: false,
      changeOrigin: true
    })
  )
}
