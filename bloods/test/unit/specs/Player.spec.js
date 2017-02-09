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
  it('check', function () {
    player.cards = [[2, 1, 3, 3, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0]]
    var cardPeng = {color: 0, value: 0}
    var cardGang = {color: 0, value: 2}
    expect(player.checkPeng(cardPeng)).to.be.true
    expect(player.checkGang(cardGang)).to.be.true
    expect(player.getCards().length).to.be.eq(13)
    player.peng(cardPeng)
    expect(player.pengs.length).to.be.eq(1)
    expect(player.pengs[0]).to.be.eq(cardPeng)
    expect(player.getCards().length).to.be.eq(11)
    expect(player.size()).to.be.eq(14)
    player.put({color: 1, value: 0})
    player.gang(cardGang)
    expect(player.gangs.length).to.be.eq(1)
    expect(player.gangs[0]).to.be.eq(cardGang)
    expect(player.getCards().length).to.be.eq(8)
    expect(player.size()).to.be.eq(14)
  })
})
