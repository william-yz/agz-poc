const Table = require('src/model/Table')
const {range, oneOf} = require('src/utils')

const {WAITING, GETTED} = require('src/model/constants')
// , GETTED, CONSIDERING, TINGING

describe('Player', function () {
  var player
  var table

  beforeEach(function () {
    table = new Table()
    player = table.current.next
  })

  it('init', function () {
    expect(player.status).to.eq(WAITING)
    var all = 0
    range(3, function (i) {
      range(9, function (j) {
        all += player.cards[i][j]
      })
    })
    expect(all).to.eq(13)
  })

  it('get', function () {
    player.get()
    expect(player.status).to.eq(GETTED)
    expect(player.size()).to.eq(14)
    expect(player.lastGet).to.not.null

    var cards = player.transform()
    expect(cards[cards.length - 1]).to.eq(player.lastGet)
  })

  it('put', function () {
    player.get()
    const card = oneOf(player.transform())
    const puttedSize = player.putted.length
    player.put(card)
    expect(player.size()).to.eq(13)
    expect(player.status).to.eq(WAITING)
    expect(player.putted.length).to.eq(puttedSize + 1)
    expect(player.putted[puttedSize]).to.eq(card)
  })
  it('check', function () {
    player.cards = [[2, 1, 3, 3, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0]]
    var cardPeng = {color: 0, value: 0}
    var cardGang = {color: 0, value: 2}
    expect(player.checkPeng(cardPeng)).to.true
    expect(player.checkGang(cardGang)).to.true
    expect(player.transform().length).to.eq(13)
    player.peng(cardPeng)
    expect(player.pengs.length).to.eq(1)
    expect(player.pengs[0]).to.eq(cardPeng)
    expect(player.transform().length).to.eq(11)
    expect(player.size()).to.eq(14)
    player.put({color: 1, value: 0})
    player.gang(cardGang)
    expect(player.gangs.length).to.eq(1)
    expect(player.gangs[0]).to.eq(cardGang)
    expect(player.transform().length).to.eq(8)
    expect(player.size()).to.eq(14)
  })

  it('check Hu', function () {
    player.cards = [[2, 2, 3, 3, 0, 0, 0, 0, 0], [3, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
    expect(player.checkHu({color: 0, value: 0})).to.true
    expect(player.tings).to.deep.eq([{color: 0, value: 0}, {color: 0, value: 1}, {color: 0, value: 2}, {color: 0, value: 4}])
  })
})
