const utils = require('../utils'),
  _ = require('lodash')
function init () {
  const mahjongs = []
  utils.range(4 * 9 * 3, Array.prototype.push.bind(mahjongs))
  utils.range(4 * 9 * 3, i => {
    const next = utils.nextInt(108)
    const temp = mahjongs[i]
    mahjongs[i] = mahjongs[next]
    mahjongs[next] = temp
  })
  return mahjongs
}

function next (mahjongs) {
  console.log(mahjongs.length)
  const newMahjongs = _.cloneDeep(mahjongs),
    next = newMahjongs.pop(),
    value = Math.floor(next % 36 / 4) % 9,
    color = Math.floor(next / 36)
  return {newMahjongs, next: {color, value}}
}

module.exports = {
  init,
  next
}