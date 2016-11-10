import {combineReducers} from 'redux'

import authentication from './authentication'
import profile from './profile'
import datatable from './datatable'

export default combineReducers({
  authentication, profile, datatable
})
