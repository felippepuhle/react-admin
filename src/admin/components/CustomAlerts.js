import React, { Component } from 'react'

import { Alert } from 'react-bootstrap'

class CustomAlerts extends Component {

  render() {
    return (
      <div>
        {if (this.props.success.length > 0) {
          this.props.success.map(function(message, index) {
            return (
              <Alert bsStyle="success" key={index}>{ message }</Alert>
            )
          })
        }}

        {if (this.props.danger.length > 0) {
          this.props.danger.map(function(message, index) {
            return (
              <Alert bsStyle="danger" key={index}>{ message }</Alert>
            )
          })
        }}

        {if (this.props.info.length > 0) {
          this.props.info.map(function(message, index) {
            return (
              <Alert bsStyle="info" key={index}>{ message }</Alert>
            )
          })
        }}
      </div>
    )
  }

}

CustomPageHeader.propTypes = {
  success: React.PropTypes.array
}

Content.defaultProps = {
  success: [],
  danger: [],
  info: []
}

export default CustomAlerts
