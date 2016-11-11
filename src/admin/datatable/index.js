import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from './actions'

import { Alert, FormControl, Pagination } from 'react-bootstrap'

class DataTable extends Component {

  constructor(props) {
    super(props)

    this.renderBody = this.renderBody.bind(this)
    this.get = this.get.bind(this)
    this.onChangeSearch = this.onChangeSearch.bind(this)
    this.search = this.search.bind(this)
  }

  componentWillMount () {
    this.get(1)
  }

  getPage(page = 1) {
    this.get(page)
  }

  onChangeSearch(event) {
    this.search(event.target.value)
  }

  search(value) {
    if (!this.props.isLoading) {
      this.get(this.props.paginator.number, value)
    } else {
      setTimeout(function() {
        this.search(value)
      }.bind(this), 100)
    }
  }

  get(page, search = null) {
    this.props.actions.get(this.props.url, page, search)
  }

  renderHeaders() {
    return (
      <thead>
        <tr>
          {
            this.props.headers.map(function(result, index) {
              return (<th key={index}>{result.name}</th>)
            })
          }
        </tr>
      </thead>
    )
  }

  renderBody() {
    return (
      <tbody>
        {
          this.props.data.map(function(dataResult, dataIndex) {
            return (
              <tr key={dataIndex}>
                {
                  this.props.headers.map(function(headerResult, headerIndex) {
                    return <td key={headerIndex}>{dataResult[headerResult.prop]}</td>
                  })
                }
              </tr>
            )
          }.bind(this))
        }
      </tbody>
    )
  }

  renderPaginator() {
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
        onSelect={this.get} />
    )
  }

  render() {
    return (
      <div>
        {this.props.message ? <Alert bsStyle={this.props.message.type}>{this.props.message.text}</Alert> : '' }

        <FormControl type="text" placeholder="Search" onChange={this.onChangeSearch}/>

        <table className="table">
          { this.renderHeaders() }
          { this.renderBody() }
        </table>

        { this.renderPaginator() }
      </div>
    )
  }

}

DataTable.propTypes = {
  headers: React.PropTypes.array.isRequired,
  url: React.PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  isLoading: state.admin.datatable.isLoading,
  data: state.admin.datatable.data,
  paginator: state.admin.datatable.paginator,
  message: state.admin.datatable.message
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
