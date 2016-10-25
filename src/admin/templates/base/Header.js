import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Link } from 'react-router'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'

import * as actionCreators from '../../actions/authentication'

class Header extends Component {

  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(evt) {
    evt.preventDefault()
    this.props.actions.doLogout()
  }

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
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={1} title={this.props.user.name} id="basic-nav-dropdown">
                <MenuItem eventKey={1.1}>Profile</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.3} onClick={this.handleLogout}>Logout</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }

}

const mapStateToProps = (state) => ({
  user: state.admin.authentication.user
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
