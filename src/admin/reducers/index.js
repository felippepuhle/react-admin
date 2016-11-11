import {combineReducers} from 'redux'

import authentication from './authentication'
import profile from './profile'
import datatable from '../datatable/reducers'

export default combineReducers({
  authentication, profile, datatable
})
