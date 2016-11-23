import React, { Component } from 'react'

import Content from '../../templates/base/Content'
import DataTable from '../../datatable'

class User extends Component {

  render() {
    let headers = [
      { property: 'name', name: 'Name', searchable: true, orderable: true }
    ]

    return (
      <Content {...this.props}>
        <DataTable headers={headers} url="admin/users" />
      </Content>
    )
  }

}

User.defaultProps = {
  title: 'Users',
  subtitle: 'Listing all users',
  breadcrumb: [
    { 'url': '/admin/users', 'desc': 'Users' },
    { 'desc': 'List' }
  ]
}

export default User
