import React, { Component } from 'react'

import { Pagination } from 'react-bootstrap'

class DataTablePaginator extends Component {

  render() {
    if(!this.props.paginator) {
      return null
    }

    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis={false}
        items={this.props.paginator.totalPages}
        maxButtons={5}
        activePage={this.props.paginator.number}
        onSelect={this.props.onSelect} />
    )
  }

}

DataTablePaginator.propTypes = {
  paginator: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func.isRequired
}

export default DataTablePaginator
