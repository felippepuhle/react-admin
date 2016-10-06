import React, { Component } from "react";

import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Sidebar from './Sidebar';
import Title from './Title';
import Footer from './Footer';

class Template extends Component {

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
              <Title/>
              {this.props.children}
            </Col>
          </Row>
        </Grid>

        <Footer/>
      </div>
    )
  }

}

export default Template;
