import Mahjong from './Mahjong'
import Player from './Player'
import {oneOf} from '../utils'

export default class Table {
  constructor () {
    this.init()
  }

  init () {
    this.mahjong = new Mahjong()
    this.north = new Player(this.mahjong)
    this.west = new Player(this.mahjong)
    this.south = new Player(this.mahjong)
    this.east = new Player(this.mahjong)
    this.north.setNext(this.west)
    this.west.setNext(this.south)
    this.south.setNext(this.east)
    this.east.setNext(this.north)

    this.players = [this.north, this.west, this.south, this.east]
    this.current = oneOf(this.players)
    this.current.setCurrent(true)
    this.current.get()
  }
}
