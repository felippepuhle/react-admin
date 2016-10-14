import React, { Component } from 'react'

import { Breadcrumb } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

class CustomBreadcrumb extends Component {

  render() {
    if(this.props.items.length < 1) {
      return null
    }

    var itemsQty = this.props.items.length-1
    var items = this.props.items.map(function(element, index) {
      var active = (index === itemsQty)

      return (
        <LinkContainer to={{ pathname: element.url }} key={index} active={active}>
          <Breadcrumb.Item>
            {element.desc}
          </Breadcrumb.Item>
        </LinkContainer>
      )
    })

    return (
      <Breadcrumb>
        <IndexLinkContainer to={{ pathname: '/admin' }}>
          <Breadcrumb.Item>
            Home
          </Breadcrumb.Item>
        </IndexLinkContainer>

        {items}
      </Breadcrumb>
    )
  }

}

CustomBreadcrumb.propTypes = {
  items: React.PropTypes.array
}

export default CustomBreadcrumb
