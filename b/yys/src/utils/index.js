import _ from 'lodash'
import { oneOf } from './random'

export function compose () {
    return _.reduce(arguments, (prev, curr) => {
        return function () {
            return curr(prev.apply(null, arguments))
        }
    })
}

export function uid () {
  return _.reduce([0, 0, 0, 0, 0, 0, 0, 0],
    (prev) => prev + oneOf('qwertyuiopasdfghjklzxcvbnm1234567890POIUYTREWQASDZCXVFGBHNJMKL'),
    '')
}

export function range (n, cb) {
  for (let i = 0; i < n; i++) {
    if (typeof cb === 'function') {
      if (cb(i) === false) {
        break
      }
    }
  }
}
