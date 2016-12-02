import React, { Component } from 'react'

import * as Bootstrap from 'react-bootstrap'

class Alert extends Component {

  render() {
    if(this.props.message === null) {
      return null
    }

    return (
      <Bootstrap.Alert bsStyle={this.props.message.type}>
        {this.props.message.text}
      </Bootstrap.Alert>
    )
  }

}

export default Alert
