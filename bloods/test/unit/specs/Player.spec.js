import Mahjong from 'src/model/Mahjong'
import Player from 'src/model/Player'
import {range, oneOf} from 'src/utils'

import {WAITING, GETTED} from 'src/model/constants'
// , GETTED, CONSIDERING, TINGING

describe('Player', function () {
  var player

  beforeEach(function () {
    var mahjong = new Mahjong()
    player = new Player(mahjong)
  })

  it('init', function () {
    expect(player.status).to.be.eq(WAITING)
    var all = 0
    range(3, function (i) {
      range(9, function (j) {
        all += player.cards[i][j]
      })
    })
    expect(all).to.be.eq(13)
  })

  it('get', function () {
    player.get()
    expect(player.status).to.be.eq(GETTED)
    expect(player.size()).to.be.eq(14)
    expect(player.lastGet).to.be.not.null

    var cards = player.getCards()
    expect(cards[cards.length - 1]).to.be.eq(player.lastGet)
  })

  it('put', function () {
    player.get()
    const card = oneOf(player.getCards())
    const puttedSize = player.putted.length
    player.put(card)
    expect(player.size()).to.be.eq(13)
    expect(player.status).to.be.eq(WAITING)
    expect(player.putted.length).to.be.eq(puttedSize + 1)
    expect(player.putted[puttedSize]).to.be.eq(card)
  })
})
