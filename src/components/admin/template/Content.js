import React, { Component } from "react";

import { PageHeader, Breadcrumb } from 'react-bootstrap';

class Content extends Component {

  renderBreadcrumb() {
    if(this.props.breadcrumb.length < 1) {
      return
    }

    var itemsQty = this.props.breadcrumb.length-1;
    var items = this.props.breadcrumb.map(function(element, index) {
      var active = (index == itemsQty) ? 'active' : '';

      return (
        <Breadcrumb.Item href={element.url} active={active}>
          {element.desc}
        </Breadcrumb.Item>
      )
    });

    return (
      <Breadcrumb>
        <Breadcrumb.Item href="/">
          Home
        </Breadcrumb.Item>
        {items}
      </Breadcrumb>
    )
  }

  renderPageHeader() {
    if(!this.props.title && !this.props.subtitle) {
      return
    }

    return (
      <PageHeader>
        {this.props.title} <small>{this.props.subtitle}</small>
      </PageHeader>
    )
  }

  render() {
  	return (
      <div>
        {this.renderBreadcrumb()}
        {this.renderPageHeader()}
        {this.props.children}
      </div>
    )
  }

}

Content.defaultProps = {
  breadcrumb: []
};

export default Content;
