import React, { Component } from 'react'

import * as Bootstrap from 'react-bootstrap'

class PageHeader extends Component {

  render() {
    if(!this.props.title && !this.props.subtitle) {
      return null
    }

    return (
      <Bootstrap.PageHeader>
        {this.props.title} <small>{this.props.subtitle}</small>
      </Bootstrap.PageHeader>
    )
  }

}

PageHeader.propTypes = {
  title: React.PropTypes.string
}

export default PageHeader
