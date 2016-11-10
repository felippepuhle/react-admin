import React, { Component } from 'react'

import Content from '../../templates/base/Content'
import DataTable from '../../components/DataTable'

class User extends Component {

  render() {
    let headers = [
      { name: 'Name', prop: 'name' }
    ]

    return (
      <Content {...this.props}>
        <DataTable headers={headers} url="users" />
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
