import React, { Component } from 'react'

import * as Bootstrap from 'react-bootstrap'

class Form extends Component {

  render() {
    return (
      <Bootstrap.Form horizontal {...this.props}>
        {this.props.children}
      </Bootstrap.Form>
    )
  }

}

export default Form
