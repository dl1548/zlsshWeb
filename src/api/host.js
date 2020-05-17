
import requestsshapi from '@/utils/request-ssh-api'

export function getList(params) {
  return requestsshapi({
    url: '/host/list/',
    method: 'get',
    params
  })
}
