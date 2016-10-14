import React, { Component } from 'react'

import { FormGroup, Col, Checkbox } from 'react-bootstrap'

class FormCheckbox extends Component {

  render() {
    return (
      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Checkbox>Remember me</Checkbox>
        </Col>
      </FormGroup>
    )
  }

}

export default FormCheckbox
