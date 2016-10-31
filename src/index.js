import React from 'react'
import ReactDOM from 'react-dom'

import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

import adminReducers from './admin/reducers'
import routes from './routes'

const store = createStore(
  combineReducers({
    form: formReducer,
    admin: adminReducers
  }),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
