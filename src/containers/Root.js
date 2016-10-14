import React from 'react';
import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';
import routes from '../routes';

class Root extends React.Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  };

  render () {
    return (
      <div>
        <Provider store={this.props.store}>
          <Router routes={routes} history={browserHistory} />
        </Provider>
      </div>
    );
  }
}

export default Root
