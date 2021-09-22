import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'
import qs from 'qs'
import Cookie from 'js-cookie'
const baseURL = {
  develop: '/dev',
  test: <string>import.meta.env.VITE_APP_BASE_API,
  production: <string>import.meta.env.VITE_APP_BASE_API
}
type baeURLkey = 'develop' | 'test' | 'production'
const http: AxiosInstance = axios.create({
  baseURL: baseURL[<baeURLkey>import.meta.env.VITE_APP_ENV],
  timeout: 60000,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    common: {
      token: Cookie.get('token')
    }
  }
})
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.method == 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)
http.interceptors.response.use(
  (res: AxiosResponse) => {
    if (
      Cookie.get('token') == undefined ||
      Cookie.get('token') == '' ||
      [100, 101, 102, 103, 104, 105, 106].includes(res.data.code)
    ) {
      // router.push('/login')
    }
    return res.data
  },
  (error: any) => {
    return Promise.reject(error)
  }
)
export default http
