import React, { Component } from 'react'

import Content from '../templates/base/Content'

class List extends Component {

  render() {
    return (
      <Content {...this.props}>
        Table
      </Content>
    )
  }

}

List.defaultProps = {
  title: 'Groups',
  subtitle: 'Listing all groups',
  breadcrumb: [
    { 'url': '/admin/groups', 'desc': 'Groups' },
    { 'desc': 'List' }
  ]
}

export default List
