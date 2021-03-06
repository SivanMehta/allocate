/* eslint import/no-unresolved:0 */

const env = process.env.NODE_ENV || 'development'

module.exports = (env === 'development') ? require('./auth.json') :
  {
    client_id: process.env.client_id,
    project_id: process.env.project_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_secret: process.env.client_secret,
    redirect_uri: process.env.redirect_uri,
    api_key: process.env.api_key
  }
