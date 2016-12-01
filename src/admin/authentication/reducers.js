import { LOGIN_START, LOGIN_COMPLETE, LOGIN_ERROR, LOGOUT } from './constants'
import { PROFILE_UPDATE_START, PROFILE_UPDATE_COMPLETE, PROFILE_UPDATE_ERROR } from './constants'

import jwtDecode from 'jwt-decode';

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  isSubmitting: false,
  message: null
}

function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return Object.assign({}, state, {
        isSubmitting: true,
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
        isSubmitting: false,
        message: null
      })

    case LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isSubmitting: false,
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
        isSubmitting: false,
        message: {
          type: 'success',
          text: 'You have been successfully logged out'
        }
      })

    case PROFILE_UPDATE_START:
      return Object.assign({}, state, {
        isSubmitting: true,
        message: {
          type: 'info',
          text: 'Loading...'
        }
      })

    case PROFILE_UPDATE_COMPLETE:
      return Object.assign({}, state, {
        token: action.payload.token,
        user: jwtDecode(action.payload.token).user,
        isSubmitting: false,
        message: {
          type: 'success',
          text: 'Profile updated successfully'
        }
      })

    case PROFILE_UPDATE_ERROR:
      return Object.assign({}, state, {
        isSubmitting: false,
        message: {
          type: 'danger',
          text: 'Cannot update your profile'
        }
      })

    default:
      return state
  }
}

export default authentication
