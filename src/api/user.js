// import request from '@/utils/request'
import requestsshapi from '@/utils/request-ssh-api'
// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

export function login(data) {
  return requestsshapi({
    url: '/user/login/',
    method: 'post',
    data
  })
}

export function logout() {
  return requestsshapi({
    url: '/user/logout/',
    method: 'post'
  })
}

export function getInfo(token) {
  return requestsshapi({
    url: '/user/info/',
    method: 'get',
    params: { token }
  })
}
