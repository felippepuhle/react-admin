import { DATATABLE_PAGINATE, DATATABLE_SEARCH, DATATABLE_LOADING, DATATABLE_COMPLETE, DATATABLE_ERROR } from './constants'

import Cookie from '../../utils/Cookie'
import API from '../../utils/API'

export function datatablePaginate(page) {
  return {
    type: DATATABLE_PAGINATE,
    payload: {
      page: page
    }
  }
}

export function datatableSearch(search) {
  return {
    type: DATATABLE_SEARCH,
    payload: {
      search: search
    }
  }
}

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

export function getData(headers, url, page = 1, search = null) {
  return function(dispatch) {
    dispatch(datatableLoading())

    let fullUrl = url + '?page=' + (page-1)
    let data = Object.assign({}, { headers: [], search: null }, { headers: headers, search: search })

    return API.post(fullUrl, data)
      .then(response => {
        dispatch(datatableComplete(response))
      })
      .catch(error => {
        dispatch(datatableError(error))
      })
  }
}

export function init(headers, url) {
  return function(dispatch) {
    let page = Cookie.load(url + '/page') || 1
    let search = Cookie.load(url + '/search') || ''

    dispatch(datatablePaginate(page))
    dispatch(datatableSearch(search))

    dispatch(getData(headers, url, page, search))
  }
}

export function paginate(headers, url, page, search) {
  return function(dispatch) {
    Cookie.save(url + '/page', page)

    dispatch(datatablePaginate(page))

    dispatch(getData(headers, url, page, search))
  }
}

export function search(headers, url, page, search) {
  return function(dispatch) {
    Cookie.save(url + '/search', search)

    dispatch(datatableSearch(search))

    dispatch(getData(headers, url, page, search))
  }
}
