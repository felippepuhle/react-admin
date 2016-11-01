import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import * as actionCreators from '../../actions/authentication'

import { Alert } from 'react-bootstrap'

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
    this.props.actions.doLogin(values.login, values.password, values.remember)
  }

  render() {
    return (
      <div>
        {this.props.message ? <Alert bsStyle={this.props.message.type}>{this.props.message.text}</Alert> : '' }
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  token: state.admin.authentication.token,
  isAuthenticated: state.admin.authentication.isAuthenticated,
  isAuthenticating: state.admin.authentication.isAuthenticating,
  message: state.admin.authentication.message
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
