import { DATATABLE_START, DATATABLE_COMPLETE, DATATABLE_ERROR } from '../constants'

import API from '../../utils/API'

  export function datatableStart() {
  return { type: DATATABLE_START }
}

export function datatableComplete(data) {
  return {
    type: DATATABLE_COMPLETE,
    payload: data
  }
}

export function datatableError(error) {
  return {
    type: DATATABLE_ERROR,
    payload: error
  }
}

export function get(url, page = 0, size = 20) {
  return function(dispatch) {
    dispatch(datatableStart());

    return API.get(url + '?page=' + (page) + '&size=' + size)
      .then(response => {
        dispatch(datatableComplete(response))
      })
      .catch(error => {
        dispatch(datatableError(error))
      })
  }
}
