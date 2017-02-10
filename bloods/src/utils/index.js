const _ = require('lodash')

function nextInt (i) {
  return Math.floor(Math.random() * i)
}

function oneOf (array) {
  return array[nextInt(array.length)]
}

function range (n, callback) {
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
module.exports = {
  nextInt,
  range,
  oneOf
}
