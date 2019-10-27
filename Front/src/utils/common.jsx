/**
 * Ajax
 * Return JSON
 */
const common = {

  ajaxRquest: (options, callback = () => { }, callbackError = () => { }) => {
    fetch(options.url, {
      method: options.method,
      body: options.body,
      headers: options.headers,
      credentials: options.credentials,
      mode: options.mode
    })
      .then(result => { if (!result.ok) throw Error('Not Exists'); return result.json() })
      .then(result => { callback(result) })
      .catch(error => { callbackError(error) })
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate: (cb) => {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout: (cb) => {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

export { common, fakeAuth}
