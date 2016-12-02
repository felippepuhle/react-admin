import React, { Component } from 'react'

import { FormGroup, FormControl, ControlLabel, Col, HelpBlock } from 'react-bootstrap'

class Input extends Component {

  handleValidationState(meta) {
    if (meta.error && meta.touched) {
      return 'error'
    }

    if (!meta.error && meta.touched) {
      return 'success'
    }

    return null
  }

  handleFeedback(meta) {
    if (meta.touched) {
      return <FormControl.Feedback />
    }

    return ''
  }

  handleHelp(meta) {
    if (meta.error && meta.touched) {
      return <HelpBlock>{meta.error}</HelpBlock>
    }

    return ''
  }

  render() {
    const { label, input, meta } = this.props;

    return (
      <FormGroup controlId={input.name} validationState={this.handleValidationState(meta)}>
        <Col componentClass={ControlLabel} sm={2}>
          {label}
        </Col>
        <Col sm={10}>
          {this.props.children}
          {this.handleFeedback(meta)}
          {this.handleHelp(meta)}
        </Col>
      </FormGroup>
    )
  }

}

export default Input
