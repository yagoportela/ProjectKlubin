import { login, getToken, logout, isAuthenticated } from './auth'
import { common } from '../utils/common'

const apiAuthentic = (callback) => {
  const options = {
    url: 'https://localhost:5001/api/login/Logar',
    method: 'POST',
    body: JSON.stringify({ UserID: 'admin_apiprodutos', Password: 'AdminAPIProdutos01!' }),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'omit',
    mode: 'cors'
  }

  const callbackSucess =
    result => {
      login(result)
      callback(result)
      return true
    }

  const callbackError =
    error => {
      console.error(error)
      return false
    }

  common.ajaxRquest(options, callbackSucess, callbackError)
}

const apiIsAuthentic = () => {
  const token = getToken()

  const options = {
    url: 'https://localhost:5001/api/login/isAuthentic/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }

  const callbackSucess =
    result => {
      return true
    }

  const callbackError =
    error => {
      console.log(error)
      return false
    }

  common.ajaxRquest(options, callbackSucess, callbackError)
}

const apiLogout = () => {
  logout()
}

const apiAuthenticated = () => isAuthenticated()

export { apiAuthentic, apiIsAuthentic, apiLogout, apiAuthenticated }
