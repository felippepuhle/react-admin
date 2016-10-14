import React, { Component } from 'react';

import Content from '../templates/base/Content';

class Groups extends Component {

  render() {
    return (
      <Content {...this.props}>
        Table
      </Content>
    )
  }

}

Groups.defaultProps = {
  title: 'Groups',
  subtitle: 'Listing all groups',
  breadcrumb: [
    { 'url': '/admin/groups', 'desc': 'Groups' },
    { 'desc': 'List' }
  ]
};

export default Groups;
