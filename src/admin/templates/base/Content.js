import React, { Component } from 'react'

import Breadcrumb from '../../../components/Breadcrumb'
import PageHeader from '../../../components/PageHeader'

class Content extends Component {

  render() {
  	return (
      <div>
        <Breadcrumb items={this.props.breadcrumb} />
        <PageHeader title={this.props.title} subtitle={this.props.subtitle} />

        {this.props.children}
      </div>
    )
  }

}

Content.defaultProps = {
  breadcrumb: []
}

export default Content
