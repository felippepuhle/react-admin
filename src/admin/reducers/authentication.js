import { LOGIN_START, LOGIN_COMPLETE, LOGIN_ERROR, LOGOUT, PROFILE_UPDATE_COMPLETE } from '../constants'

import jwtDecode from 'jwt-decode';

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  isAuthenticating: false,
  message: null
}

function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return Object.assign({}, state, {
        isAuthenticating: true,
        message: {
          type: 'info',
          text: 'Loading...'
        }
      })

    case LOGIN_COMPLETE:
      return Object.assign({}, state, {
        token: action.payload.token,
        user: jwtDecode(action.payload.token).user,
        isAuthenticated: true,
        isAuthenticating: false,
        message: null
      })

    case LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isAuthenticating: false,
        message: {
          type: 'danger',
          text: 'You have entered an invalid username or password'
        }
      })

    case LOGOUT:
      return Object.assign({}, state, {
        token: null,
        user: null,
        isAuthenticated: false,
        isAuthenticating: false,
        message: {
          type: 'success',
          text: 'You have been successfully logged out'
        }
      })

    case PROFILE_UPDATE_COMPLETE:
      return Object.assign({}, state, {
        token: action.payload.token,
        user: jwtDecode(action.payload.token).user
      })

    default:
      return state
  }
}

export default authentication
