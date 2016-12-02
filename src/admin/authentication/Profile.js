import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from './actions'

import Alert from '../../components/Alert'
import ProfileForm from './ProfileForm'

class Profile extends Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    this.props.actions.update(values)
  }

  render() {
    return (
      <div>
        <Alert message={this.props.message}/>
        <ProfileForm initialValues={this.props.user} onSubmit={this.handleSubmit} />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  user: state.admin.authentication.user,
  message: state.admin.authentication.message
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
