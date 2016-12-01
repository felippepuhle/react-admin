import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import cookie from 'react-cookie'

import * as actionCreators from './actions'

function Authenticated(Component) {

  class AuthenticatedComponent extends Component {

    checkAuthentication (props) {
      if(!props.isAuthenticated) {
        var token = cookie.load('token')
        if(typeof token !== typeof undefined) {
          return props.actions.loginComplete(token)
        }

        return browserHistory.push('/admin/login?redirect=' + props.location.pathname)
      }
    }

    componentWillMount () {
      this.checkAuthentication(this.props)
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuthentication(nextProps)
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
