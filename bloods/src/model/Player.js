import { range } from '../utils'
import {WAITING, GETTED} from 'src/model/constants'
import _ from 'lodash'

export default class Player {
  constructor (mahjong) {
    this.mahjong = mahjong
    this.status = WAITING
    this.cards = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
    this.putted = []
    this.lastGet = null
    this.peng = []
    this.init()
  }

  init () {
    range(13, () => {
      const next = this.mahjong.next()
      this.cards[next.color][next.value] ++
    })
  }

  size () {
    var all = 0
    range(3, i => {
      range(9, j => {
        all += this.cards[i][j]
      })
    })
    return all
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
    var hasReturn = !this.lastGet
    _.each(this.cards, (colors, color) => {
      _.each(colors, (v, value) => {
        if (!hasReturn && this.lastGet.color === color && this.lastGet.value === value) {
          hasReturn = true
          return
        }
        for (var i = 0; i < v; i++) {
          cards.push({
            color,
            value
          })
        }
      })
    })
    cards.push(this.lastGet)
    return cards
  }

  peng (card) {
    this.cards[card.color].splice(card.value, 1, this.cards[card.color][card.value] - 2)
    this.peng.push(card)
    this.setStatus(GETTED)
  }
}
