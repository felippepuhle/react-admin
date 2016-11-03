class Validation {

  constructor(mapValuesAndPropsToRules) {
    const join = function(rules) {
      return (value) => {
        return rules.map(rule => {
          return rule(value)
        })
        .filter(error => !!error)[0]
      }
    }

    const validate = function (rules, data) {
      const errors = {}

      Object.keys(rules).forEach((key) => {
        let rule = join([].concat(rules[key]))
        let error = rule(data[key])

        if (error) {
          errors[key] = error
        }
      })

      return errors
    }

    return (values, props) => {
      let rules
      if (typeof mapValuesAndPropsToRules === 'function') {
        rules = mapValuesAndPropsToRules(values, props)
      } else {
        rules = mapValuesAndPropsToRules
      }

      return validate(rules, values)
    }
  }

  static email(value, message) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!emailRegex.exec(value)) {
      return message || 'Please provide a valid email address.'
    }
  }

  static required(value, message) {
    const isEmpty = value === undefined || value === null || value === ''
    if (isEmpty) {
      return message || 'Required.'
    }
  }

}

export default Validation
