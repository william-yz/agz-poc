import Card from '../../Card'

export default class LiMao extends Card {

  static _id = '3005'
  static cardName = '狸猫'

  constructor (star) {
    super({
      id: '3005',
      type: 'R',
      name: '狸猫',
      star: star
    })
  }
}
