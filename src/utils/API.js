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
        return parseResponse(response).then(function(jsonResponse) {
          var errorMessage = response.statusText
          if(errorMessage.length === 0 &&
              typeof jsonResponse.message !== typeof undefined) {
            errorMessage = jsonResponse.message
          }

          var error = new Error(errorMessage)
          error.number = response.status
          throw error
        })
      }

      return response
    }

    return fetch(this.urlFor(uri), this.generateOptions(options))
        .then(checkResponseStatus)
        .then(parseResponse)
  }
}

export default API
