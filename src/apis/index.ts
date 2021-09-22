import http from './axios'
//将axios请求的格式转为json
function jsonRequest(data: object) {
  return {
    transformRequest: [
      function () {
        return JSON.stringify(data)
      }
    ],
    headers: { 'Content-Type': 'application/json' }
  }
}

//例子
export const test = (params: any): Promise<Res<any>> => http.get('/***/***')
