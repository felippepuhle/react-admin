import cookie from 'react-cookie'

class Cookie {

  static save(key, value, remember = false) {
    var cookieOptions = { path: '/' }

    if (remember) {
      var aYear = 60 * 24 * 365
      cookieOptions.maxAge = aYear
    }

    cookie.save(key, value, cookieOptions)
  }

  static remove(key) {
    cookie.remove(key, { path: '/' })
  }

  static load(key) {
    return cookie.load('token')
  }

}

export default Cookie
