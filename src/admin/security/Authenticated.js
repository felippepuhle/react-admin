import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

function Authenticated(Component) {

  class AuthenticatedComponent extends Component {

    componentWillMount () {
      if(!this.props.isAuthenticated) {
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

  return connect(mapStateToProps)(AuthenticatedComponent)

}

export default Authenticated
