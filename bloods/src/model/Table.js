const Mahjong = require('./Mahjong')
const Player = require('./Player')
const {oneOf} = require('../utils')
const {CONSIDERING} = require('./constants')
const _ = require('lodash')
module.exports = class Table {
  constructor () {
    this.init()
  }

  init () {
    this.mahjong = new Mahjong()
    this.north = new Player(this.mahjong, this)
    this.west = new Player(this.mahjong, this)
    this.south = new Player(this.mahjong, this)
    this.east = new Player(this.mahjong, this)
    this.north.next = this.west
    this.west.next = this.south
    this.south.next = this.east
    this.east.next = this.north

    this.players = [this.north, this.west, this.south, this.east]
    this.current = oneOf(this.players)
    this.current.setCurrent(true)
    this.current.get()
  }

  next () {
    this.current.setCurrent(false)
    this.current = this.current.next
    this.current.setCurrent(true)
  }

  onPut (card) {
    this.next()
    this.checkOrigin = this.current
    this.check(card)
  }

  check (card) {
    if (this.current.checkPeng(card) ||
      this.current.checkGang(card) ||
      this.current.checkHu(card)) {
      this.current.setStatus(CONSIDERING)
    } else {
      var end = this.current.next === this.checkOrigin
      this.next()
      end || this.check(card)
    }
  }

  onPass (card) {
    this.next()
    this.check(card)
  }
}
