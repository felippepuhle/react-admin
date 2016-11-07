import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../../actions/profile'

import { Alert } from 'react-bootstrap'

import ProfileForm from './ProfileForm'

class Profile extends Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount () {
    this.props.actions.profileUpdateRequest()
  }

  handleSubmit(values) {
    this.props.actions.update(values)
  }

  render() {
    return (
      <div>
        {this.props.message ? <Alert bsStyle={this.props.message.type}>{this.props.message.text}</Alert> : '' }
        <ProfileForm initialValues={this.props.user} onSubmit={this.handleSubmit} />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  user: state.admin.profile.user,
  message: state.admin.profile.message
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
