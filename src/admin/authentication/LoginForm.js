import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import Form from '../../components/form/Form'
import Text from '../../components/form/Text'
import Password from '../../components/form/Password'
import Checkbox from '../../components/form/Checkbox'
import Submit from '../../components/form/Submit'

import Validation from '../../utils/Validation'

class LoginForm extends Component {

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Field label="Login" name="login" component={Text} />
        <Field label="Password" name="password" component={Password} />
        <Field label="Remember me" name="remember" component={Checkbox} />

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
