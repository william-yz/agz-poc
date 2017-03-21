import Battler from './Battler'

class BaseTeam {
  constructor() {
    this.cards = []
  }

  getCards() {
    return this.cards
  }

  add(card) {
    this.cards.push(new Battler(card))
    return this
  }

  onStart() {

  }

  onRoundStart() {

  }
}

export default BaseTeam
