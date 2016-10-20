import { LOGIN_START, LOGIN_COMPLETE, LOGIN_ERROR, LOGOUT } from '../constants'

const initialState = {
  token: null,
  isAuthenticated: false,
  isAuthenticating: false,
  errorMessage: null
}

function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return Object.assign({}, state, {
        isAuthenticating: true,
        errorMessage: null
      })

    case LOGIN_COMPLETE:
      return Object.assign({}, state, {
        token: action.payload.token,
        isAuthenticated: true,
        isAuthenticating: false,
        errorMessage: null
      })

    case LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isAuthenticating: false,
        errorMessage: action.payload.message
      })

    case LOGOUT:
      return Object.assign({}, state, {
        token: null,
        isAuthenticated: false,
        isAuthenticating: false,
        errorMessage: null
      })

    default:
      return state
  }
}

export default authentication
