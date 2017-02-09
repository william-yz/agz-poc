import { range } from '../utils'
import { WAITING, GETTED } from 'src/model/constants'
import _ from 'lodash'

export default class Player {
  constructor (mahjong) {
    this.mahjong = mahjong
    this.status = WAITING
    this.cards = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
    this.putted = []
    this.lastGet = null
    this.pengs = []
    this.gangs = []
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

  get () {
    const next = this.mahjong.next()
    this.cards[next.color].splice(next.value, 1, this.cards[next.color][next.value] + 1)
    this.lastGet = next
    this.setStatus(GETTED)
  }

  put (card) {
    this.setStatus(WAITING)
    this.cards[card.color].splice(card.value, 1, this.cards[card.color][card.value] - 1)
    this.putted.push(card)
    this.lastGet = null
  }

  getCards () {
    var cards = []
    _.each(this.cards, (colors, color) => {
      _.each(colors, (v, value) => {
        if (this.lastGet && this.lastGet.color === color && this.lastGet.value === value) {
          v--
        }
        console.log(v)
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
    return this.cards[card.color][card.value] > 1
  }

  checkGang (card) {
    return this.cards[card.color][card.value] > 1
  }

  peng (card) {
    this.cards[card.color].splice(card.value, 1, this.cards[card.color][card.value] - 2)
    this.pengs.push(card)
    this.setStatus(GETTED)
  }

  gang (card) {
    this.cards[card.color].splice(card.value, 1, this.cards[card.color][card.value] - 3)
    this.gangs.push(card)
    this.get()
    this.setStatus(GETTED)
  }
}
