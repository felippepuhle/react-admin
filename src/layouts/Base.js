import React, { Component } from "react";

class Base extends Component {

  render() {
  	return (
      <div id="container">
        {this.props.children}
      </div>
    )
  }

}

export default Base;
