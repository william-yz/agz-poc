import { log } from '../utils'
import _ from 'lodash'

class BattleSeq {
  constructor(cardMap) {
    this.cardMap = cardMap
    this.seq = []
  }

  init() {

  }
}
export default class Battle {
  constructor(team, target) {
    this.team = team
    this.target = target
    this.isEnd = false
    this.battleSeq = []
  }

  init() {
    this.allCards = _.concat(this.team.getCards(), this.target.getCards())
  }

  getSpeedSeq() {
    return this.allCards
      .map((card, index) => ({index, speed: card.speed}))
      .sort((a, b) => a.speed - b.speed)
      .map(c => c.index)
  }
  roundStart() {
    this.team.onRoundStart()
    this.target.onRoundStart()
    const speedSeq = this.getSpeedSeq()
    let next = speedSeq.pop()
    while (next) {
      let card = this.allCards(next)
      card.beforeAction()
      card.action()
      card.afterAction()
    }
  }
}
