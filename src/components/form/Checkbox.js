import React, { Component } from 'react'

import * as Bootstrap from 'react-bootstrap'

class Checkbox extends Component {

  render() {
    const { input, meta } = this.props;

    var validationState = null
    if (meta.error) {
      validationState = 'error'
    }
    if (!meta.error && input.touched) {
      validationState = 'success'
    }

    return (
      <Bootstrap.FormGroup controlId={input.name} validationState={validationState}>
        <Bootstrap.Col smOffset={2} sm={10}>
          <Bootstrap.Checkbox {...input}>{this.props.children}</Bootstrap.Checkbox>
        </Bootstrap.Col>
      </Bootstrap.FormGroup>
    )
  }

}

export default Checkbox
