const fs = require('fs')

let ids = {
  SSR: 1000,
  SR: 2000,
  R: 3000,
  N: 4000,
}

const getId = (type) => {
  ids[type] += 1
  return `${ids[type]}`
}

module.exports = {
  getId
}
