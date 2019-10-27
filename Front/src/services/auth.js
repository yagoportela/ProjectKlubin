/* global localStorage */

export const TOKEN_KEY = '@rastreador-Token'

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null

export const getToken = () => 'Bearer ' + localStorage.getItem(TOKEN_KEY)

export const login = token => {
  if (token.message) {
    localStorage.setItem(TOKEN_KEY, token.accessToken, new Date(token.expiration))
    localStorage.setItem('created', token.created, new Date(token.expiration))
    localStorage.setItem('expiration', token.expiration, new Date(token.expiration))
  }
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem('created')
  localStorage.removeItem('expiration')
}
