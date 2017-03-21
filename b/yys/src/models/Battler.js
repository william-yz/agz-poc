function currOrig(orig) {
  return {
    curr: orig,
    orig: orig
  }
}
class Battler {
  constructor(card) {
    this.initBase(card)
    this.initSkill(card.skill)
  }

  initBase(card) {
    this.name = card.name
    this.id = card.id
    this.hp = currOrig(card.hp)
    this.atk = currOrig(card.atk)
    this.def = currOrig(card.def)
    this.speed = currOrig(card.speed)
    this.ctri = currOrig(card.ctri)
    this.ctriDmg = parseInt(card.ctriDmg, 10) / 100 * card.atk
  }

  initSkill(skill) {
    this.skills = skill.skills
    if (skill.onAfterAction) {
      this.onAfterAction = () => {
        skill.onAfterAction.bind(skill)
      }
    }
    if (skill.onAfterDefence) {
      this.onAfterDefence = () => {
        skill.onAfterDefence.bind(skill)
      }
    }
  }
  attack(target) {
    this.beforeAttact()
  }
}

export default Battler
