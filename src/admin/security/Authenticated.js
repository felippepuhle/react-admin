import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import * as actionCreators from '../actions/authentication'

function Authenticated(Component) {

  class AuthenticatedComponent extends Component {

    componentWillMount () {
      if(!this.props.isAuthenticated) {
        var token = localStorage.getItem('token');
        if(token !== null) {
          return this.props.actions.loginComplete(token)
        }

        return browserHistory.push('/admin/login?redirect=' + this.props.location.pathname)
      }
    }

    render() {
      if(!this.props.isAuthenticated) {
        return null
      }

      return (
        <Component {...this.props}/>
      )
    }

  }

  const mapStateToProps = (state) => ({
        token: state.admin.authentication.token,
        user: state.admin.authentication.user,
        isAuthenticated: state.admin.authentication.isAuthenticated
  })

  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent)

}

export default Authenticated
