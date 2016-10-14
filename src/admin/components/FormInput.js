import React, { Component } from 'react'

import { FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap'

class FormInput extends Component {

  render() {
    return (
      <FormGroup controlId={this.props.id}>
        <Col componentClass={ControlLabel} sm={2}>
          {this.props.label}
        </Col>
        <Col sm={10}>
          <FormControl {...this.props} />
        </Col>
      </FormGroup>
    )
  }

}

export default FormInput
