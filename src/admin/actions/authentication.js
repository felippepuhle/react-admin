import { LOGIN_START, LOGIN_COMPLETE, LOGIN_ERROR, LOGOUT } from '../constants'

import cookie from 'react-cookie'

import API from '../../utils/API'

export function loginStart() {
  return { type: LOGIN_START }
}

export function loginComplete(token, remember) {
  var cookieOptions = { path: '/' }

  if (remember) {
    var aYear = 60 * 24 * 365
    cookieOptions.maxAge = aYear
  }

  cookie.save('token', token, cookieOptions)

  return {
    type: LOGIN_COMPLETE,
    payload: {
      token: token
    }
  }
}

export function loginError(error) {
  cookie.remove('token', { path: '/' })

  return {
    type: LOGIN_ERROR,
    payload: error
  }
}

export function logout() {
  cookie.remove('token', { path: '/' })

  return {
    type: LOGOUT
  }
}

export function doLogin(login, password, remember) {
  return function(dispatch) {
    dispatch(loginStart());

    return API.post('admin/login', {login: login, password: password})
      .then(response => {
        dispatch(loginComplete(response.token, remember))
      })
      .catch(error => {
        dispatch(loginError(error))
      })
  }
}

export function doLogout() {
  return function(dispatch) {
    dispatch(logout());
  }
}
