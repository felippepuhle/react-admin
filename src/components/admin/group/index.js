import React, { Component } from 'react';

import Content from '../template/Content';

class Groups extends Component {

  render() {
    var breadcrumb = [
      { 'url': '/groups', 'desc': 'Groups' },
      { 'desc': 'List' }
    ];

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
    { 'url': '/groups', 'desc': 'Groups' },
    { 'desc': 'List' }
  ]
};

export default Groups;
