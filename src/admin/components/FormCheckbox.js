import React, { Component } from 'react'

import { FormGroup, Col, Checkbox } from 'react-bootstrap'

class FormCheckbox extends Component {

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
      <FormGroup controlId={input.name} validationState={validationState}>
        <Col smOffset={2} sm={10}>
          <Checkbox {...input}>{this.props.children}</Checkbox>
        </Col>
      </FormGroup>
    )
  }

}

export default FormCheckbox
