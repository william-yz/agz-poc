import { getATK, getHP, getDEF, getSPEED, getCTRI } from './datas'
import { uid } from '../utils'

export default class Card {

  constructor ({id, type, name, star}) {
    this._id = id
    this.id = uid()
    this.type = type
    this.name = name
    this.level = 1
    this.star = 1
    this.rank = require(`./cards/${this.type}/datas/${this._id}`).default.baseRank

    this.nigis = []
    this.skills = []

    this.extra = {
      ATK: [0, 0],
      DEF: [0, 0],
      HP: [0, 0],
      SPEED: 0,
      CTRI: 0
    }
  }

  get baseATK () {
    return getATK(this.rank.ATK, this.level)
  }

  get baseHP () {
    return getHP(this.rank.HP, this.level)
  }

  get baseDEF () {
    return getDEF(this.rank.DEF, this.level)
  }

  get baseSPEED () {
    return getSPEED(this.rank.SEPPD)
  }

  get baseCTRI () {
    return getCTRI(this.rank.CTRI)
  }

  get extraATK () {
    return this.extra.ATK[0] + this.baseATK * this.extra.ATK[1]
  }

  get extraDEF () {
    return this.extra.DEF[0] + this.baseDEF * this.extra.DEF[1]
  }

  get extraHP () {
    return this.extra.HP[0] + this.baseHP * this.extra.HP[1]
  }

  get extraSPEED () {
    return this.extra.SPEED
  }

  get extraCTRI () {
    return this.extra.CTRI
  }

  get ATK () {
    return this.baseATK + this.extraATK
  }

  get DEF () {
    return this.baseDEF + this.extraDEF
  }

  get HP () {
    return this.baseHP + this.extraHP
  }

  get SPEED () {
    return this.baseSPEED + this.extraSPEED
  }

  get CTRI () {
    return this.baseCTRI + this.extraCTRI
  }

  beforeAttack () {

  }

  attack (targets) {

  }

  afterAttack () {

  }

  beforeDefense () {

  }

  defense () {

  }

  afterDefense () {

  }
}
