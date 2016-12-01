import React, { Component } from 'react'

import { FormControl } from 'react-bootstrap'

class DataTableSearch extends Component {

  render() {
    return (
      <FormControl type="text" placeholder="Search" {...this.props}/>
    )
  }

}

DataTableSearch.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
}

export default DataTableSearch
