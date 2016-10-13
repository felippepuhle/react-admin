import React, { Component } from "react";

import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

class Sidebar extends Component {

  render() {
  	return (
      <aside>
        <Nav bsStyle="pills" stacked>
          <IndexLinkContainer to={{ pathname: '/' }}>
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>

          <LinkContainer to={{ pathname: '/groups' }}>
            <NavItem eventKey={2}>Groups</NavItem>
          </LinkContainer>

          <LinkContainer to={{ pathname: '/users' }}>
            <NavItem eventKey={3}>Users</NavItem>
          </LinkContainer>
        </Nav>
      </aside>
    )
  }

}

export default Sidebar;
