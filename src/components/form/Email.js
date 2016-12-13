import React, { Component } from 'react'

import { FormControl } from 'react-bootstrap'

import Group from './Group'

class Email extends Component {

  render() {
    const { input } = this.props

    return (
      <Group {...this.props}>
        <FormControl type="email" {...input} />
      </Group>
    )
  }

}

export default Email
