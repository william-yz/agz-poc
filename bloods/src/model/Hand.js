import { range } from '../utils'

export default class Hand {
  constructor (mahjong, scope) {
    this.mahjong = mahjong
    this.scope = scope
    this.init()
  }

  init () {
    this.hands = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
    range(13, this.get.bind(this))
  }

  get () {
    const next = this.mahjong.next()
    this.hands[next.color][next.value] ++
  }

  put (mahjong) {
    this.hands[mahjong.color].splice(mahjong.value, 1, this.hands[mahjong.color][mahjong.value] - 1)
    this.get()
  }
}
