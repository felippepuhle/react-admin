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
