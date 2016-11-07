import {combineReducers} from 'redux'

import authentication from './authentication'
import profile from './profile'

export default combineReducers({
  authentication, profile
})
