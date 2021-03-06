import Cookie from './Cookie'

class API {

  static fetch(uri, options) {
    var urlFor = function (uri) {
      var url = 'http://localhost:8080';

      if(uri.substr(0, 1) !== '/') {
          url += '/';
      }

      url += uri;

      return url;
    }

    var generateOptions = function (options) {
      options = options || {}

      options.credentials = 'include'

      options.headers = options.headers || {}
      options.headers['Accept'] = 'application/json'
      options.headers['Content-Type'] = 'application/json'
      if(Cookie.load('token')) {
        options.headers['Authorization'] = 'Bearer ' + Cookie.load('token')
      }

      return options
    }

    var checkResponseStatus = function(response) {
      if (!response.ok) {
        var error = new Error(response.statusText)
        error.number = response.status
        throw error
      }

      return response
    }

    var parseResponse = function(response) {
      return response.json()
    }

    return fetch(urlFor(uri), generateOptions(options))
        .then(checkResponseStatus)
        .then(parseResponse)
  }

  static get(uri, options) {
    return this.fetch(
      uri,
      Object.assign({}, options, {
        method: 'GET'
      })
    )
  }

  static post(uri, data, options) {
    return this.fetch(
      uri,
      Object.assign({}, options, {
        method: 'POST',
        body: JSON.stringify(data)
      })
    )
  }

  static put(uri, data, options) {
    return this.fetch(
      uri,
      Object.assign({}, options, {
        method: 'PUT',
        body: JSON.stringify(data)
      })
    )
  }

  static delete(uri, options) {
    return this.fetch(
      uri,
      Object.assign({}, options, {
        method: 'DELETE'
      })
    )
  }
}

export default API
