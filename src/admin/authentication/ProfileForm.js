import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import Form from '../../components/form/Form'
import Input from '../../components/form/Input'
import Submit from '../../components/form/Submit'

import Validation from '../../utils/Validation'

class ProfileForm extends Component {

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Field name="name" type="text" component={Input}>Name</Field>
        <Field name="email" type="email" component={Input}>E-mail</Field>
        <Field name="login" type="text" component={Input}>Login</Field>
        <Field name="password" type="password" component={Input}>Password</Field>

        <Submit>Save</Submit>
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
