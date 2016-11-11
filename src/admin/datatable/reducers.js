import { DATATABLE_LOADING, DATATABLE_COMPLETE, DATATABLE_ERROR } from './constants'

const initialState = {
  isLoading: false,
  data: [],
  paginator: {
    number: 1,
    totalPages: 5
  },
  message: null
}

function authentication(state = initialState, action) {
  switch (action.type) {
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
