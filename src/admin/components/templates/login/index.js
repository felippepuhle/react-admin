import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';

class Login extends Component {

  render() {
  	return (
      <div>
        <Header/>

        <Grid>
          <Row>
            <Col xs={12} md={12} lg={6} lgOffset={3}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default Login;
