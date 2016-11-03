import React, { Component } from 'react'

import { FormGroup, FormControl, ControlLabel, Col, HelpBlock } from 'react-bootstrap'

class FormInput extends Component {

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
    const { type, input, meta } = this.props;

    return (
      <FormGroup controlId={input.name} validationState={this.handleValidationState(meta)}>
        <Col componentClass={ControlLabel} sm={2}>
          {this.props.children}
        </Col>
        <Col sm={10}>
          <FormControl type={type} {...input} />
          {this.handleFeedback(meta)}
          {this.handleHelp(meta)}
        </Col>
      </FormGroup>
    )
  }

}

export default FormInput
