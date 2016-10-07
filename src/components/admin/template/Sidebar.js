import React, { Component } from "react";

import { Nav, NavItem } from 'react-bootstrap';

class Sidebar extends Component {

  constructor() {
    super();

    this.state = {
      activeKey: 1
    }
  }

  render() {
  	return (
      <aside>
        <Nav bsStyle="pills" stacked activeKey={this.state.activeKey}>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/groups">Groups</NavItem>
          <NavItem eventKey={3} href="/users">Users</NavItem>
        </Nav>
      </aside>
    )
  }

}

export default Sidebar;
