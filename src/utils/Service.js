import API from './API'

class Service {

  constructor(uri) {
    this._uri = uri;
  }

  show(id) {
    return API.get('admin/' + this._uri + '/' + id)
  }

  create(data) {
    return API.post('admin/' + this._uri + '/create', data)
  }

  update(data) {
    return API.put('admin/' + this._uri + '/' + data.id, data)
  }

  destroy(id) {
    return API.delete('admin/' + this._uri + '/' + id)
  }

}

export default Service
