import { DATATABLE_LOADING, DATATABLE_COMPLETE, DATATABLE_ERROR } from './constants'

import API from '../../utils/API'

  export function datatableLoading() {
  return { type: DATATABLE_LOADING }
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

export function get(url, page = 1, search = null) {
  return function(dispatch) {
    dispatch(datatableLoading());

    return API.get(url + '?page=' + (page-1))
      .then(response => {
        dispatch(datatableComplete(response))
      })
      .catch(error => {
        dispatch(datatableError(error))
      })
  }
}
