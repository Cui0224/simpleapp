import { get } from './http'
export const order = (params) => {
  let url = '/api/order'
  return get(url, params)
}
export const city = (params) => {
  let url = '/api/city'
  return get(url, params)
}
export const list = (params) => {
  let url = '/api/list'
  return get(url, params)
}
export const list1 = (id, params) => {
  let url = '/list1/' + id
  return get(url, params)
}
export const getcity = (params) => {
  let url = '/api/cities'
  return get(url, params)
}
