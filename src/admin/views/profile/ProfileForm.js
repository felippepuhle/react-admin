import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import { Form } from 'react-bootstrap'

import FormInput from '../../components/FormInput'
import FormSubmit from '../../components/FormSubmit'

import Validation from '../../../utils/Validation'

class ProfileForm extends Component {

  render() {
    return (
      <Form horizontal onSubmit={this.props.handleSubmit}>
        <Field name="name" type="text" component={FormInput}>Name</Field>
        <Field name="email" type="email" component={FormInput}>E-mail</Field>
        <Field name="login" type="text" component={FormInput}>Login</Field>
        <Field name="password" type="password" component={FormInput}>Password</Field>

        <FormSubmit>Save</FormSubmit>
      </Form>
    )
  }

}

const validate = new Validation({
    name: [Validation.required],
    email: [Validation.required, Validation.email],
    login: [Validation.required]
})

ProfileForm = reduxForm({
  form: 'profile',
  validate
})(ProfileForm)

export default ProfileForm
