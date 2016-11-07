import { PROFILE_UPDATE_REQUEST, PROFILE_UPDATE_START, PROFILE_UPDATE_ERROR, PROFILE_UPDATE_COMPLETE } from '../constants'

import cookie from 'react-cookie'

import API from '../../utils/API'

export function profileUpdateRequest() {
  let token = cookie.load('token')

  return {
    type: PROFILE_UPDATE_REQUEST,
    payload: {
      token: token
    }
  }
}

export function profileUpdateStart() {
  return { type: PROFILE_UPDATE_START }
}

export function profileUpdateComplete(token) {
  cookie.save('token', token)

  return {
    type: PROFILE_UPDATE_COMPLETE,
    payload: {
      token: token
    }
  }
}

export function profileUpdateError(error) {
  return {
    type: PROFILE_UPDATE_ERROR,
    payload: error
  }
}

export function update(data) {
  return function(dispatch) {
    dispatch(profileUpdateStart());

    return API.post('admin/profile', data)
      .then(response => {
        dispatch(profileUpdateComplete(response.token))
      })
      .catch(error => {
        dispatch(profileUpdateError(error))
      })
  }
}
