import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import * as actionCreators from './actions'

import Alert from '../../components/Alert'
import LoginForm from './LoginForm'

class Login extends Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.isAuthenticated) {
      let redirect = nextProps.location.query.redirect || '/admin'
      browserHistory.push(redirect)
    }
  }

  handleSubmit(values) {
    this.props.actions.login(values.login, values.password, values.remember)
  }

  render() {
    return (
      <div>
        <Alert message={this.props.message}/>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  token: state.admin.authentication.token,
  isAuthenticated: state.admin.authentication.isAuthenticated,
  message: state.admin.authentication.message
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
