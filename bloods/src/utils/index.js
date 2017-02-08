const _ = require('lodash')

export function nextInt (i) {
  return Math.floor(Math.random() * i)
}

export function range (n, callback) {
  if (!_.isFunction(callback)) {
    return
  }
  for (let i = 0; i < n; i++) {
    if (callback(i) === false) {
      break
    }
  }
}
