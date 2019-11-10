/* global localStorage */

export const TOKEN_KEY = '@rastreador-Token'

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = token => {
  
  if (token.access_token) {
    localStorage.setItem(TOKEN_KEY, token.access_token)
    localStorage.setItem('created', new Date())
    localStorage.setItem('expiration', new Date().setSeconds(token.expires_in))
  }
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem('created')
  localStorage.removeItem('expiration')
}

export const secrets = {
  client_secret: '511536EF-F270-4058-80CA-1C89C192F69A',
  client_id: 'UserManagementUI',
  grant_type: 'password',
  redirect_uri: 'http://localhost:3000/login',
  username:'bruno',
  password:'Pa$$word123'
}
