import React, { Component } from 'react'

import { FormControl } from 'react-bootstrap'

import Group from './Group'

class Password extends Component {

  render() {
    const { input } = this.props;

    return (
      <Group {...this.props}>
        <FormControl type="password" {...input} />
      </Group>
    )
  }

}

export default Password
