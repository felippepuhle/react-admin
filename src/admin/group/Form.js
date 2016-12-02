import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import Form from '../../components/form/Form'
import Hidden from '../../components/form/Hidden'
import Text from '../../components/form/Text'
import Select from '../../components/form/Select'
import Submit from '../../components/form/Submit'

import Validation from '../../utils/Validation'

class GroupForm extends Component {

  render() {
    let options = [
      { key: 'SUPER_ADMIN', value: 'Super admin' },
      { key: 'ADMIN', value: 'Admin' },
      { key: 'USER', value: 'User' }
    ]

    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Field name="id" component={Hidden} />
        <Field label="Name" name="name" component={Text} />
        <Field label="Level" name="level" component={Select} options={options} />

        <Submit>Save</Submit>
      </Form>
    )
  }

}

const validate = new Validation({
    name: [Validation.required]
})

GroupForm = reduxForm({
  form: 'group',
  validate
})(GroupForm)

export default GroupForm
