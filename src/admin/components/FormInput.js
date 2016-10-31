import React, { Component } from 'react'

import { FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap'

class FormInput extends Component {

  render() {
    const { type, input, meta } = this.props;

    var validationState = null
    if (meta.error) {
      validationState = 'error'
    }
    if (!meta.error && input.touched) {
      validationState = 'success'
    }

    return (
      <FormGroup controlId={input.name} validationState={validationState}>
        <Col componentClass={ControlLabel} sm={2}>
          {this.props.children}
        </Col>
        <Col sm={10}>
          <FormControl type={type} {...input} />
        </Col>
      </FormGroup>
    )
  }

}

export default FormInput
