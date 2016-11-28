import React, { Component } from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { ButtonGroup, Button } from 'react-bootstrap'

import Content from '../../templates/base/Content'
import DataTable from '../../datatable'

class User extends Component {

  render() {
    let headers = [
      { property: 'name', name: 'Name', searchable: true },
      { property: 'group.name', name: 'Group', searchable: true },
      { property: '', name: 'Actions', callback: function(data) {
        return (
          <ButtonGroup>
            <LinkContainer to={{ pathname: '/admin/users/' + data.id + '/edit' }}>
              <Button bsSize="small">Edit</Button>
            </LinkContainer>
            <Button bsSize="small" bsStyle="danger">Delete</Button>
          </ButtonGroup>
        )
      }}
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
