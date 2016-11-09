import { PROFILE_UPDATE_REQUEST, PROFILE_UPDATE_START, PROFILE_UPDATE_COMPLETE, PROFILE_UPDATE_ERROR } from '../constants'

import jwtDecode from 'jwt-decode';

const initialState = {
  user: null,
  isSubmitting: false,
  message: null
}

function profile(state = initialState, action) {
  switch (action.type) {
    case PROFILE_UPDATE_REQUEST:
      return Object.assign({}, state, {
        user: jwtDecode(action.payload.token).user
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

export default profile
