import React, { Component } from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { ButtonGroup, Button } from 'react-bootstrap'

import Content from '../templates/base/Content'
import DataTable from '../../components/datatable'

class GroupList extends Component {

  render() {
    let headers = [
      { property: 'name', name: 'Name', searchable: true },
      { property: '', name: 'Actions', callback: function(data) {
        return (
          <ButtonGroup>
            <LinkContainer to={{ pathname: '/admin/groups/' + data.id + '/edit' }}>
              <Button bsSize="small">Edit</Button>
            </LinkContainer>
            <Button bsSize="small" bsStyle="danger">Delete</Button>
          </ButtonGroup>
        )
      }}
    ]

    return (
      <Content {...this.props}>
        <LinkContainer to={{ pathname: '/admin/groups/new' }}>
          <Button>New</Button>
        </LinkContainer>

        <hr/>

        <DataTable headers={headers} url="admin/groups" />
      </Content>
    )
  }

}

GroupList.defaultProps = {
  title: 'Groups',
  subtitle: 'Listing all groups',
  breadcrumb: [
    { 'url': '/admin/groups', 'desc': 'Groups' },
    { 'desc': 'List' }
  ]
}

export default GroupList
