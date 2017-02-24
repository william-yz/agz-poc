import { getATK, getHP, getDEF } from './datas'

export default class Card {

  constructor ({type, name, rank = {}}) {
    this.type = type
    this.name = name
    this.rank = rank
    this.level = 1
    this.star = 1

    this.nigis = []
    this.skills = []

    this.extra = {
      ATK: [0, 0],
      DEF: [0, 0],
      HP: [0, 0]
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

  get extraATK () {
    return this.extra.ATK[0] + this.baseATK * this.extra.ATK[1]
  }

  get extraDEF () {
    return this.extra.DEF[0] + this.baseDEF * this.extra.DEF[1]
  }

  get extraHP () {
    return this.extra.HP[0] + this.baseHP * this.extra.HP[1]
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