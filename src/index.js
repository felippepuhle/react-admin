import React from 'react'
import ReactDOM from 'react-dom'

import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import adminReducers from './admin/reducers'
import routes from './routes'

const store = createStore(
  combineReducers({
    admin: adminReducers
  })
)

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
