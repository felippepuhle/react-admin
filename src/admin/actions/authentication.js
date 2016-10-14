import { LOGIN_START, LOGIN_COMPLETE, LOGIN_ERROR, LOGOUT } from '../constants'

export function loginStart() {
  return { type: LOGIN_START }
}

export function loginComplete(user) {
  return {
    type: LOGIN_COMPLETE,
    payload: user
  }
}

export function loginError(errors) {
  return {
    type: LOGIN_ERROR,
    payload: errors
  }
}

export function logout() {
  return { type: LOGOUT };
}

export function doLogin(login, password, redirect="/") {
  return function(dispatch) {
    dispatch(loginStart());

    setTimeout(function() {
        dispatch(loginComplete({
          token: 'anytokenhere',
          name: 'Felippe Rodrigo Puhle',
          email: 'felippe.puhle@gmail.com'
        }));
    }, 5000)
  }
}
