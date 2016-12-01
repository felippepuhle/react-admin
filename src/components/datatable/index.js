import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from './actions'
import DataTableSearch from './DataTableSearch'
import DataTableHeader from './DataTableHeader'
import DataTableBody from './DataTableBody'
import DataTablePaginator from './DataTablePaginator'

import { Alert } from 'react-bootstrap'

class DataTable extends Component {

  constructor(props) {
    super(props)

    this.onChangeSearch = this.onChangeSearch.bind(this)
    this.onChangePage = this.onChangePage.bind(this)
  }

  componentDidMount () {
    this.props.actions.init(this.props.headers, this.props.url)
  }

  onChangeSearch(event) {
    this.props.actions.search(this.props.headers, this.props.url, this.props.paginator.number, event.target.value)
  }

  onChangePage(page) {
    this.props.actions.paginate(this.props.headers, this.props.url, page, this.props.search)
  }

  render() {
    return (
      <div>
        {this.props.message ? <Alert bsStyle={this.props.message.type}>{this.props.message.text}</Alert> : '' }

        <DataTableSearch onChange={this.onChangeSearch} value={this.props.search}/>

        <table className="table">
          <DataTableHeader columns={this.props.headers} />
          <DataTableBody columns={this.props.headers} data={this.props.data} />
        </table>

        <DataTablePaginator paginator={this.props.paginator} onSelect={this.onChangePage} />
      </div>
    )
  }

}

DataTable.propTypes = {
  headers: React.PropTypes.array.isRequired,
  url: React.PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  isLoading: state.datatable.isLoading,
  data: state.datatable.data,
  paginator: state.datatable.paginator,
  message: state.datatable.message,
  search: state.datatable.search
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
