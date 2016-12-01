import { DATATABLE_PAGINATE, DATATABLE_SEARCH, DATATABLE_LOADING, DATATABLE_COMPLETE, DATATABLE_ERROR } from './constants'

const initialState = {
  data: [],
  search: '',
  paginator: {
    number: 1,
    totalPages: 5
  },
  message: null,
  isLoading: false
}

function authentication(state = initialState, action) {
  switch (action.type) {

    case DATATABLE_PAGINATE:
      return Object.assign({}, state, {
        paginator: {
          number: action.payload.page
        }
      })

    case DATATABLE_SEARCH:
      return Object.assign({}, state, {
        search: action.payload.search
      })

    case DATATABLE_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      })

    case DATATABLE_COMPLETE:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.payload.content,
        paginator: {
          number: action.payload.number+1,
          totalPages: action.payload.totalPages
        },
        message: null
      })

    case DATATABLE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        message: {
          type: 'danger',
          text: 'Error!'
        }
      })

    default:
      return state
  }
}

export default authentication
