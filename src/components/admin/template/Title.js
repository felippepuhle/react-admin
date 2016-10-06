import React, { Component } from "react";

import { PageHeader, Breadcrumb } from 'react-bootstrap';

class Title extends Component {

  render() {
  	return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Data
          </Breadcrumb.Item>
        </Breadcrumb>
        
        <PageHeader>
          Example page header <small>Subtext for header</small>
        </PageHeader>
      </div>
    )
  }

}

export default Title;
