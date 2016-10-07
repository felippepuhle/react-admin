import React, { Component } from 'react';

import Content from '../template/Content';

class User extends Component {

  render() {
    return (
      <Content {...this.props}>
        Table
      </Content>
    )
  }

}

User.defaultProps = {
  title: 'Users',
  subtitle: 'Listing all users',
  breadcrumb: [
    { 'url': '/users', 'desc': 'Users' },
    { 'desc': 'List' }
  ]
};

export default User;
