const { range } = require('../utils')
const { WAITING, GETTED, GETTED_CONSIDERING } = require('./constants')
const _ = require('lodash')
const { judge } = require('./judge')

module.exports = class Player {
  constructor (mahjong, table) {
    this.mahjong = mahjong
    this.status = WAITING
    this.cards = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
    this.putted = []
    this.lastGet = null
    this.pengs = []
    this.gangs = []
    this.tings = []
    this.next = null
    this.isCurrent = false
    this.table = table
    this.init()
  }

  init () {
    range(13, () => {
      const next = this.mahjong.next()
      this.cards[next.color][next.value]++
    })
  }

  size () {
    var all = 0
    range(3, i => {
      range(9, j => {
        all += this.cards[i][j]
      })
    })
    return all + this.pengs.length * 3 + this.gangs.length * 3
  }

  setStatus (status) {
    this.status = status
  }

  setCurrent (isCurrent) {
    this.isCurrent = isCurrent
  }
  getNext () {
    return this.mahjong.next()
  }

  change (card, i) {
    this.cards[card.color].splice(card.value, 1, this.getCardNumber(card) + i)
  }

  getCardNumber (card) {
    return this.cards[card.color][card.value]
  }

  get (next) {
    if (!next) {
      next = this.getNext()
    }
    const canGang = this.checkGang(next)
    const canHu = this.checkHu(next)
    if (canGang || canHu) {
      this.setStatus(GETTED_CONSIDERING)
    } else {
      this.setStatus(GETTED)
    }
    this.change(next, 1)
    this.lastGet = next
  }

  put (card) {
    this.setStatus(WAITING)
    this.change(card, -1)
    this.putted.push(card)
    this.lastGet = null
    // this.table.onPut(card)
  }

  putIndex (index) {
    this.put(this.transform()[Number(index)])
  }

  transform () {
    var cards = []
    _.each(this.cards, (colors, color) => {
      _.each(colors, (v, value) => {
        if (this.lastGet && _.isEqual(this.lastGet, {color, value})) {
          v--
        }
        for (var i = 0; i < v; i++) {
          cards.push({
            color,
            value
          })
        }
      })
    })
    this.lastGet && cards.push(this.lastGet)
    return cards
  }

  checkPeng (card) {
    this.canPeng = this.getCardNumber(card) > 1
    return this.canPeng
  }

  checkGang (card) {
    this.canGang = this.getCardNumber(card) > 2
    return this.canGang
  }

  checkHu (card) {
    this.tings = judge(this.cards)
    this.canHu = false
    range(this.tings, ting => {
      this.canHu = _.isEqual(ting, card)
      return !this.canHu
    })
    return this.canHu
  }

  peng (card) {
    var reduce = -2
    if (this.status === GETTED_CONSIDERING) {
      reduce = -3
    }
    this.change(card, reduce)
    this.pengs.push(card)
    this.setStatus(GETTED)
  }

  gang (card) {
    var reduce = -3
    if (this.status === GETTED_CONSIDERING) {
      reduce = -4
    }
    this.change(card, reduce)
    this.gangs.push(card)
    this.get()
    this.setStatus(GETTED)
  }

  pass (card) {
    this.table.onPass(card)
  }
}
