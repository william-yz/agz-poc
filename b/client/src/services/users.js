import request from '../utils/request'
import { PAGE_SIZE } from '../constants'
import config from './config'

export function fetch ({ page = 1 }) {
  return request(`${config.api}/users?skip=${(page - 1) * PAGE_SIZE}&limit=${PAGE_SIZE}`)
}

export function remove (id) {
  return request(`${config.api}/users/${id}`, {
    method: 'DELETE'
  })
}

export function patch (id, values) {
  return request(`${config.api}/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values)
  })
}

export function create (values) {
  return request(`${config.api}/users`, {
    method: 'POST',
    body: JSON.stringify(values)
  })
}
