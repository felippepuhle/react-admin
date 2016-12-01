import React, { Component } from 'react'

class DataTableHeader extends Component {

  render() {
    return (
      <thead>
        <tr>
          {
            this.props.columns.map(function(result, index) {
              return (<th key={index}>{result.name}</th>)
            })
          }
        </tr>
      </thead>
    )
  }

}

DataTableHeader.propTypes = {
  columns: React.PropTypes.array.isRequired
}

export default DataTableHeader
