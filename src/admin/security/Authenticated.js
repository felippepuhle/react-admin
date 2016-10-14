import React from 'react';

function Authenticated(Component) {

  class AuthenticatedComponent extends Component {

    render () {
      return (
        <div>
          <Component {...this.props}/>
        </div>
      )

    }
  }

  return AuthenticatedComponent;

}

export default Authenticated
