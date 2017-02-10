const {range, nextInt} = require('../utils')

module.exports = class Mahjong {
  constructor () {
    this.mahjongs = this.init()
  }

  init () {
    const mahjongs = []
    range(4 * 9 * 3, Array.prototype.push.bind(mahjongs))
    range(4 * 9 * 3, i => {
      const next = nextInt(108)
      const temp = mahjongs[i]
      mahjongs[i] = mahjongs[next]
      mahjongs[next] = temp
    })
    return mahjongs
  }

  size () {
    return this.mahjongs.length
  }
  next () {
    const next = this.mahjongs.pop()
    const value = Math.floor(next % 36 / 4) % 9
    const color = Math.floor(next / 36)
    return {color, value}
  }
}
