/* global localStorage */

export const TOKEN_KEY = '@rastreador-Token'
export const TOKEN_KEY_REFRESH = '@rastreador-Token-refresh'

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const getTokenRefresh = () => localStorage.getItem(TOKEN_KEY_REFRESH)

export const login = token => {
  
  if (token.access_token) {
    localStorage.setItem(TOKEN_KEY, token.access_token)    
    localStorage.setItem(TOKEN_KEY_REFRESH, token.refresh_token)
    localStorage.setItem('created', new Date())
    localStorage.setItem('expiration', new Date().setSeconds(token.expires_in))
  }
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem('created')
  localStorage.removeItem('expiration')
}

export const secrets = (valor) => (
  {
    ...valor,
    client_secret: '511536EF-F270-4058-80CA-1C89C192F69A',
    client_id: 'UserManagementUI',
  }
)
