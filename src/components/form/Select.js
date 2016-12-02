import React, { Component } from 'react'

import { FormControl } from 'react-bootstrap'

import Group from './Group'

class Select extends Component {

  render() {
    const { input } = this.props;

    return (
      <Group {...this.props}>
        <FormControl componentClass="select" {...input}>
          {
            this.props.options.map(function(result, index) {
              return (
                <option key={index} value={result.key}>
                  {result.value}
                </option>
              )
            })
          }
        </FormControl>
      </Group>
    )
  }

}

Select.propTypes = {
  options: React.PropTypes.array
}

Select.defaultProps = {
  options: []
}

export default Select
