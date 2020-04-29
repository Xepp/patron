import _ from 'lodash'
import axios from 'axios'
import routes from './routes'

const api = _.mapValues(routes, (value) => {
  return function (payload) {
    const req = {
      data: payload,
      ...value
    }
    return axios(req)
  }
})

export default {
  ...api
}
