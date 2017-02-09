import { range } from '../utils'
import { judge } from './judge'

export default class Player {
  constructor (mahjong) {
    this.mahjong = mahjong
    this.putted = []
    this.lastGet = null
    this.ting = []
    this.next = null
    this.isCurrent = false
    this.isConsidering = false
    this.peng = []
    this.origin = null
    this.init()
  }

  init () {
    this.cards = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
    range(13, this.get.bind(this))
  }

  setNext (next) {
    this.next = next
  }

  setCurrent (isCurrent) {
    this.isCurrent = isCurrent
  }

  setConsidering (isConsidering) {
    this.isConsidering = isConsidering
  }

  setTing (ting) {
    this.ting = ting
  }

  setOrigin (origin) {
    this.origin = origin
  }

  get () {
    const next = this.mahjong.next()
    this.cards[next.color][next.value] ++
    this.lastGet = next
  }

  put (card) {
    this.isCurrent = false
    this.cards[card.color].splice(card.value, 1, this.cards[card.color][card.value] - 1)
    this.putted.push(card)
    this.lastGet = null
    this.checkConsider(this, card)
  }

  checkConsider (origin, card) {
    if (origin !== this) {
      var player = this.next
      player.setTing(judge(player.cards))
      const check = player.check(card)
      if (check.canPeng || check.canGang || check.canHu) {
        player.setOrigin(origin)
        player.setConsidering(true)
      }
    } else {
      return

    }
  }

  peng (card) {
    this.cards[card.color].splice(card.value, 1, this.cards[card.color][card.value] - 2)
    this.peng.push(card)
    this.setConsidering(false)
    this.setCurrent(true)
  }

  pass (card) {
    this.setConsidering(false)
    this.next.checkConsider(this.origin, card)
  }
  check (card) {
    var canPeng = false
    var canGang = false
    var canHu = false
    range(3, color => {
      range(9, value => {
        if (card.color === color && card.value === value) {
          canPeng = this.cards[color][value] > 1
          canGang = this.cards[color][value] > 2
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
    this.checked = {canPeng, canGang, canHu}
    return {canPeng, canGang, canHu}
  }
}
