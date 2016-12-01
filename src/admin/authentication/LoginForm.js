import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import Form from '../../components/form/Form'
import Input from '../../components/form/Input'
import Checkbox from '../../components/form/Checkbox'
import Submit from '../../components/form/Submit'

import Validation from '../../utils/Validation'

class LoginForm extends Component {

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Field name="login" type="text" component={Input}>Login</Field>
        <Field name="password" type="password" component={Input}>Password</Field>
        <Field name="remember" component={Checkbox}>Remember me</Field>

        <Submit loading={this.props.submitting}>Sign in</Submit>
      </Form>
    )
  }

}

const validate = new Validation({
    login: [Validation.required],
    password: [Validation.required]
})

LoginForm = reduxForm({
  form: 'login',
  validate
})(LoginForm)

export default LoginForm
