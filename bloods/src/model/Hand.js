import { range } from '../utils'
import { judge } from './judge'

export default class Hand {
  constructor (mahjong, scope) {
    this.mahjong = mahjong
    this.scope = scope
    this.putted = []
    this.lastGet = null
    this.ting = []
    this.next = null
    this.init()
  }

  init () {
    this.hands = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
    range(13, this.get.bind(this))
  }

  get () {
    const next = this.mahjong.next()
    this.hands[next.color][next.value] ++
    this.lastGet = next
  }

  put (card) {
    this.hands[card.color].splice(card.value, 1, this.hands[card.color][card.value] - 1)
    this.putted.push(card)
    this.lastGet = null
    this.ting = judge(this.hands)
    var next = this.next
    var check
    range(3, () => {
      check = next.check(card)
      if (check.canPeng || check.canGang || check.canHu) {
        return false
      }
      next = next.next
    })
    return {next, ...check}
  }

  check (card) {
    var canPeng = false
    var canGang = false
    var canHu = false
    range(3, color => {
      range(9, value => {
        if (card.color === color && card.value === value) {
          canPeng = this.hands[color][value] > 1
          canGang = this.hands[color][value] > 2
          return false
        }
      })
      return !canPeng
    })
    for (var i = 0; i < this.ting.length; i++) {
      if (card.color === this.ting[i].color && card.value === this.ting[i].value) {
        canHu = true
        break
      }
    }
    return {canPeng, canGang, canHu}
  }
}
