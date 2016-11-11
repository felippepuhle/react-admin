import { DATATABLE_START, DATATABLE_COMPLETE, DATATABLE_ERROR } from '../constants'

const initialState = {
  data: [],
  paginator: null,
  message: null
}

function authentication(state = initialState, action) {
  switch (action.type) {
    case DATATABLE_START:
      return Object.assign({}, state, {
        message: {
          type: 'info',
          text: 'Loading...'
        }
      })

    case DATATABLE_COMPLETE:
      return Object.assign({}, state, {
        data: action.payload.content,
        paginator: {
          number: action.payload.number,
          totalPages: action.payload.totalPages
        },
        message: null
      })

    case DATATABLE_ERROR:
      return Object.assign({}, state, {
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