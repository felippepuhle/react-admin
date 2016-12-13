import React, { Component } from 'react'

import { FormControl } from 'react-bootstrap'

class Hidden extends Component {

  render() {
    const { input } = this.props

    return (
      <FormControl type="hidden" {...input} />
    )
  }

}

export default Hidden
