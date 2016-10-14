import { LOGIN_START, LOGIN_COMPLETE, LOGIN_ERROR, LOGOUT } from '../constants'

const initialState = {
  token: null,
  isAuthenticated: false,
  isAuthenticating: false
}

function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return Object.assign({}, state, {
        isAuthenticating: true
      })

    case LOGIN_COMPLETE:
      return Object.assign({}, state, {
        token: action.payload.token,
        isAuthenticated: true,
        isAuthenticating: false,
      })

    case LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isAuthenticating: false
      })

    case LOGOUT:
      return Object.assign({}, state, {
        token: null,
        isAuthenticated: false,
        isAuthenticating: false
      })

    default:
      return state
  }
}

export default authentication
