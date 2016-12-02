import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import Form from '../../components/form/Form'
import Text from '../../components/form/Text'
import Email from '../../components/form/Email'
import Password from '../../components/form/Password'
import Submit from '../../components/form/Submit'

import Validation from '../../utils/Validation'

class ProfileForm extends Component {

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Field label="Name" name="name" component={Text} />
        <Field label="E-mail" name="email" component={Email} />
        <Field label="Login" name="login" component={Text} />
        <Field label="Password" name="password" component={Password} />

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
