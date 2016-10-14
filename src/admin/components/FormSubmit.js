import React, { Component } from 'react'

import { FormGroup, Col, Button } from 'react-bootstrap'

class FormSubmit extends Component {

  render() {
    return (
      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit" disabled={this.props.isAuthenticating}>
            {this.props.isAuthenticating ? 'Loading' : 'Sign in'}
          </Button>
        </Col>
      </FormGroup>
    )
  }

}

export default FormSubmit
