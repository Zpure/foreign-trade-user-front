import axios from 'axios'
import {Message} from 'element-ui'
import {getToken} from '../js/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;"
  },
})

service.interceptors.request.use(
  config => {
    config.headers['G-Token'] = 'HZ';
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    console.log(response.data);
    const res = response.data;
    if (res.code !== 1000) {
      Message({
        message: res.desc,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
