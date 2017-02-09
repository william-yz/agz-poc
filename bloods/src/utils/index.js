const _ = require('lodash')

export function nextInt (i) {
  return Math.floor(Math.random() * i)
}

export function oneOf (array) {
  return array[nextInt(array.length)]
}

export function range (n, callback) {
  if (!_.isFunction(callback)) {
    return
  }
  var array = []
  var isArray = false
  if (n instanceof Array) {
    isArray = true
    array = n
    n = array.length
  }
  for (let i = 0; i < n; i++) {
    if (isArray) {
      if (callback(array[i], i) === false) {
        break
      }
    } else {
      if (callback(i) === false) {
        break
      }
    }
  }
}
