import React, { Component } from 'react'

import CustomBreadcrumb from '../../components/CustomBreadcrumb'
import CustomPageHeader from '../../components/CustomPageHeader'

class Content extends Component {

  render() {
  	return (
      <div>
        <CustomBreadcrumb items={this.props.breadcrumb} />
        <CustomPageHeader title={this.props.title} />

        {this.props.children}
      </div>
    )
  }

}

Content.defaultProps = {
  breadcrumb: []
}

export default Content
