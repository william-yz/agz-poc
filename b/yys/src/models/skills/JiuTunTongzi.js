import { range } from '../../utils'
import { satisfy } from '../../utils/random'

export default class Skill {
  constructor(card) {
    this.kuangqi = 0
    this.card = card
    this.skills = ['a', 'b', 'c']
  }

  skill1(target) {
    range(1 + this.kuangqi, () => {
      target.defence(this.card.attack())
    })
  }

  skill2(when) {
    if (when === 'AA') {
      if (satisfy('50%')) {
        this.kuangqi += 1
      }
    } else {
      if (satisfy('25%')) {
        this.kuangqi += 1
      }
    }
  }

  skill3() {

  }

  onAfterAction() {
    this.skill2('AA')
  }

  onAfterDefence() {
    this.skill2('AD')
  }
}
