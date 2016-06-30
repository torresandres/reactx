require('babel-polyfill');

const environment = {
  development: {
    isProduction: false,
    apiHost: process.env.API_URL || 'http://localhost',
    apiPort: process.env.API_PORT || '8080'
  },
  production: {
    isProduction: true,
    apiHost: process.env.API_URL || 'http://localhost',
    apiPort: process.env.API_PORT || '443'
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: environment.apiHost,
  apiPort: environment.apiPort,
  app: {
    title: 'Reacx',
    description: 'TBD',
    head: {
      titleTemplate: 'Reacx: %s',
      meta: [
        {name: 'description', content: 'TBD'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Reacx'},
        {property: 'og:image', content: ''},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Reacx'},
        {property: 'og:description', content: 'TBD'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@andrew_towers'},
        {property: 'og:creator', content: '@andrew_towers'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
