class API {

  urlFor(uri) {
    var url = 'http://localhost:8080';

    if(uri.substr(0, 1) !== '/') {
        url += '/';
    }

    url += uri;

    return url;
  }

  generateOptions(custom) {
    var options = {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    return Object.assign({}, options, custom)
  }

  fetch(uri, options) {
    var parseResponse = function(response) {
      return response.json()
    }

    var checkResponseStatus = function(response) {
      if (!response.ok) {
        var error = new Error(response.statusText)
        error.number = response.status
        throw error
      }

      return response
    }

    return fetch(this.urlFor(uri), this.generateOptions(options))
        .then(checkResponseStatus)
        .then(parseResponse)
  }

  get(uri, options) {
    return this.fetch(uri, Object.assign({}, options, {
        method: 'GET'
      })
    )
  }

  post(uri, data, options) {
    return this.fetch(uri, Object.assign({}, options, {
        method: 'POST',
        body: JSON.stringify(data)
      })
    )
  }
}

export default API
