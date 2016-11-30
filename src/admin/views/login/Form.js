import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import * as Bootstrap from 'react-bootstrap'

import FormInput from '../../components/FormInput'
import FormCheckbox from '../../components/FormCheckbox'
import FormSubmit from '../../components/FormSubmit'

import Validation from '../../../utils/Validation'

class Form extends Component {

  render() {
    return (
      <Bootstrap.Form horizontal onSubmit={this.props.handleSubmit}>
        <Field name="login" type="text" component={FormInput}>Login</Field>
        <Field name="password" type="password" component={FormInput}>Password</Field>
        <Field name="remember" type="password" component={FormCheckbox}>Remember me</Field>

        <FormSubmit loading={this.props.submitting}>Sign in</FormSubmit>
      </Bootstrap.Form>
    )
  }

}

const validate = new Validation({
    login: [Validation.required],
    password: [Validation.required]
})

Form = reduxForm({
  form: 'login',
  validate
})(Form)

export default Form
