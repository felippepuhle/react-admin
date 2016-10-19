import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import * as actionCreators from '../../actions/authentication'

import { Form, Alert } from 'react-bootstrap'

import FormInput from '../../components/FormInput'
import FormCheckbox from '../../components/FormCheckbox'
import FormSubmit from '../../components/FormSubmit'

class Login extends Component {

  constructor() {
    super()

    this.state = {
      login: 'felippe',
      password: '123456',
      redirectTo: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.isAuthenticated) {
      setTimeout(function() {
        return browserHistory.push('/admin')
      }, 500)
    }
  }

  handleChange(event) {
    var newValue = {}
    newValue[event.target.name] = event.target.value

    this.setState(newValue);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();

    this.props.actions.doLogin(this.state.login, this.state.password, this.state.redirectTo);
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleFormSubmit}>
        {this.props.isAuthenticated ? <Alert bsStyle="success">Logged in successfully!</Alert> : '' }
        {this.props.isAuthenticating ? <Alert bsStyle="info">Loading...</Alert> : '' }

        <FormInput id="login" name="login" label="Login" type="text" onChange={this.handleChange} />
        <FormInput id="password" name="password" label="Password" type="password" onChange={this.handleChange} />
        <FormCheckbox />

        <FormSubmit/>
      </Form>
    )
  }

}

const mapStateToProps = (state) => ({
  token: state.admin.authentication.token,
  isAuthenticated: state.admin.authentication.isAuthenticated,
  isAuthenticating: state.admin.authentication.isAuthenticating
})

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
