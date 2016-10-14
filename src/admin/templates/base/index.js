import React, { Component } from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import Header from './Header'
import Sidebar from './Sidebar'

class Base extends Component {

  render() {
  	return (
      <div>
        <Header/>

        <Grid>
          <Row>
            <Col xs={12} md={4} lg={3}>
              <Sidebar/>
            </Col>

            <Col xs={12} md={8} lg={9}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default Base
