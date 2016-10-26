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

    var generateOptions = function (custom) {
      var options = {
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }

      return Object.assign({}, options, custom)
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
    return this.fetch(uri, Object.assign({}, options, {
        method: 'GET'
      })
    )
  }

  static post(uri, data, options) {
    return this.fetch(uri, Object.assign({}, options, {
        method: 'POST',
        body: JSON.stringify(data)
      })
    )
  }
}

export default API
