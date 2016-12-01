import React, { Component } from 'react'

import { FormGroup, Col, Button } from 'react-bootstrap'

class Submit extends Component {

  render() {
    return (
      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit" disabled={this.props.loading}>
            {this.props.loading ? 'Loading' : this.props.children}
          </Button>
        </Col>
      </FormGroup>
    )
  }

}

export default Submit
