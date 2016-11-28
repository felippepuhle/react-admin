import React, { Component } from 'react'

import { browserHistory } from 'react-router'

import { Grid, Button } from 'react-bootstrap'

class NotFound extends Component {

  render() {
    console.log(browserHistory)

    return (
      <Grid bsClass="container text-center">
        <h1>404</h1>
        <p>Page not found</p>
        <p><Button onClick={browserHistory.goBack}>Back</Button></p>
      </Grid>
    )
  }

}

export default NotFound
