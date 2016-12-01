import React, { Component } from 'react'

import * as Bootstrap from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

class Breadcrumb extends Component {

  render() {
    if(this.props.items.length < 1) {
      return null
    }

    var itemsQty = this.props.items.length-1
    var items = this.props.items.map(function(element, index) {
      var active = (index === itemsQty)

      return (
        <LinkContainer to={{ pathname: element.url }} key={index} active={active}>
          <Bootstrap.Breadcrumb.Item>
            {element.desc}
          </Bootstrap.Breadcrumb.Item>
        </LinkContainer>
      )
    })

    return (
      <Bootstrap.Breadcrumb>
        <IndexLinkContainer to={{ pathname: '/admin' }}>
          <Bootstrap.Breadcrumb.Item>
            Home
          </Bootstrap.Breadcrumb.Item>
        </IndexLinkContainer>

        {items}
      </Bootstrap.Breadcrumb>
    )
  }

}

Breadcrumb.propTypes = {
  items: React.PropTypes.array
}

export default Breadcrumb
