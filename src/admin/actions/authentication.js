import { LOGIN_START, LOGIN_COMPLETE, LOGIN_ERROR, LOGOUT } from '../constants'

import API from '../../utils/API'

export function loginStart() {
  return { type: LOGIN_START }
}

export function loginComplete(user) {
  return {
    type: LOGIN_COMPLETE,
    payload: user
  }
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error
  }
}

export function logout() {
  return { type: LOGOUT };
}

export function doLogin(login, password) {
  return function(dispatch) {
    dispatch(loginStart());

    var api = new API()

    return api.fetch('users/search/findByLoginAndPassword?login='+login+'&password='+password)
        .then(response => {
          console.log('success', response)
          dispatch(loginComplete({
            token: response.token
          }));
        })
        .catch(error => {
          if(error.message.length === 0) {
            error.message = 'You have entered an invalid username or password'
          }

          dispatch(loginError(error))
        })
  }
}
