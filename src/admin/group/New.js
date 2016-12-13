import React, { Component } from 'react'

import Content from '../templates/base/Content'
import Form from './Form'
import Alert from '../../components/Alert'
import Service from '../../utils/Service'

class GroupEmailNew extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: null,
      group: null
    }

    this._service = new Service('groups')

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    this._service.create(values)
      .then(response => {
        this.setState({
          message: {
            type: 'success',
            text: 'Group created successfully'
          }
        })
      })
      .catch(error => {
        console.log(error);
        this.setState({
          message: {
            type: 'danger',
            text: 'Cannot create group'
          }
        })
      })
  }

  render() {
    return (
      <Content {...this.props}>
        <Alert message={this.state.message}/>
        <Form initialValues={this.state.group} onSubmit={this.handleSubmit} />
      </Content>
    )
  }

}

GroupEmailNew.defaultProps = {
  title: 'Groups',
  subtitle: 'Creating group',
  breadcrumb: [
    { 'url': '/admin/groups', 'desc': 'Groups' },
    { 'desc': 'New' }
  ]
}

export default GroupEmailNew
