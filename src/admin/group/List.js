import React, { Component } from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { ButtonGroup, Button } from 'react-bootstrap'

import Content from '../templates/base/Content'
import Alert from '../../components/Alert'
import DataTable from '../../components/datatable'
import Service from '../../utils/Service'

class GroupList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: null
    }

    this._service = new Service('groups')

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id) {
    return function() {
      if(!confirm('Are you sure?')) {
        return;
      }

      this._service.destroy(id)
        .then(response => {
          this.setState({
            message: {
              type: 'success',
              text: 'Group deleted successfully'
            }
          })
        })
        .catch(error => {
          this.setState({
            message: {
              type: 'danger',
              text: 'Cannot delete group'
            }
          })
        })
    }.bind(this)
  }

  render() {
    let headers = [
      {
        property: 'name',
        name: 'Name',
        searchable: true
      },
      {
        property: '',
        name: 'Actions',
        callback: data => {
          return (
            <ButtonGroup>
              <LinkContainer to={{ pathname: '/admin/groups/' + data.id + '/edit' }}>
                <Button bsSize="small">Edit</Button>
              </LinkContainer>
              <Button bsSize="small" bsStyle="danger" onClick={this.handleDelete(data.id)}>Delete</Button>
            </ButtonGroup>
          )
        }
      }
    ]

    return (
      <Content {...this.props}>
        <LinkContainer to={{ pathname: '/admin/groups/new' }}>
          <Button>New</Button>
        </LinkContainer>

        <hr/>

        <Alert message={this.state.message}/>
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
