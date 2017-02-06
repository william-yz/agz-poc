const range = require('../utils').range
const mahjong = require('./mahjong')
const _ = require('lodash')
function init (mahjongs) {
  const hands = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
  var newMahjongs
  range(13, function () {
    {newMahjongs, next} = mahjong.next(mahjongs)
    hands[next.color][next.value]++
  })
  return {newMahjongs, hands}
}

function get (mahjongs, hands) {
  const next = mahjong.next(mahjongs),
    newHands = _.cloneDeep(hands)

  newHands[next.color][next.value] ++
  return {next, newHands}
}

function put (hands, mahjong) {
  hands[mahjong.color][mahjong.value] -- 
  return hands
}
module.exports = {
  init,
  get,
  put
}