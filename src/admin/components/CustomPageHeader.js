import React, { Component } from 'react'

import { PageHeader } from 'react-bootstrap'

class CustomPageHeader extends Component {

  render() {
    if(!this.props.title && !this.props.subtitle) {
      return null
    }

    return (
      <PageHeader>
        {this.props.title} <small>{this.props.subtitle}</small>
      </PageHeader>
    )
  }

}

CustomPageHeader.propTypes = {
  title: React.PropTypes.string
}

export default CustomPageHeader
