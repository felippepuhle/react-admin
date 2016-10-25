import { LOGIN_START, LOGIN_COMPLETE, LOGIN_ERROR, LOGOUT } from '../constants'

import API from '../../utils/API'

export function loginStart() {
  return { type: LOGIN_START }
}

export function loginComplete(token) {
  localStorage.setItem('token', token);

  return {
    type: LOGIN_COMPLETE,
    payload: {
      token: token
    }
  }
}

export function loginError(error) {
  localStorage.removeItem('token');

  return {
    type: LOGIN_ERROR,
    payload: error
  }
}

export function logout() {
  localStorage.removeItem('token');
  
  return {
    type: LOGOUT
  }
}

export function doLogin(login, password) {
  return function(dispatch) {
    dispatch(loginStart());

    var api = new API()

    return api.post('admin/login', {login: login, password: password})
      .then(response => {
        dispatch(loginComplete(response.token))
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
