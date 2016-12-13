import React, { Component } from 'react'

import { FormControl } from 'react-bootstrap'

import Group from './Group'

class Text extends Component {

  render() {
    const { input } = this.props

    return (
      <Group {...this.props}>
        <FormControl type="text" {...input} />
      </Group>
    )
  }

}

export default Text
