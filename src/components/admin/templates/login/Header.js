import React, { Component } from "react";
import { Link } from "react-router";

import { Navbar } from 'react-bootstrap';

class Header extends Component {

  render() {
  	return (
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">React-Admin</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </header>
    )
  }

}

export default Header;
