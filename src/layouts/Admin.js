import React, { Component } from "react";

class Admin extends Component {

  render() {
  	return (
      <div id="wrapper" className="content">
        <div id="page-wrapper" className="page-wrapper">
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default Admin;
