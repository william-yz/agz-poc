const hand = require('../../src/model/hand')
const mahjong = require('../../src/model/mahjong')
const utils = require('../../src/utils')
const expect = require('chai').expect

describe('hand test', function () {
  var hands,
    mahjongs

  beforeEach(function () {
    mahjongs = mahjong.init()
    var init = hand.init(mahjongs)
    mahjongs = init.newMahjongs
    hands = init.hands
  })

  it('init', function () {
    var all = 0
    utils.range(3, function (i) {
      utils.range(9, function (j) {
        all += hands[i][j]
      })
    })
    expect(all).to.be.eq(13)
  })

  it('get', function () {
    var get = hand.get(mahjongs, hands)
  })
})