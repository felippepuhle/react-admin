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

  constructor(props) {
    super(props)

    this.state = {
      login: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.isAuthenticated) {
      let redirect = nextProps.location.query.redirect || '/admin'
      browserHistory.push(redirect)
    }
  }

  handleChange(event) {
    var newValue = {}
    newValue[event.target.name] = event.target.value

    this.setState(newValue)
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    this.props.actions.doLogin(this.state.login, this.state.password)
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleFormSubmit}>
        {this.props.message ? <Alert bsStyle={this.props.message.type}>{this.props.message.text}</Alert> : '' }

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
  isAuthenticating: state.admin.authentication.isAuthenticating,
  message: state.admin.authentication.message
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
