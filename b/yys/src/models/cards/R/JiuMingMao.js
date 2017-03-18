import Card from '../../Card'

export default class JiuMingMao extends Card {

  static _id = '3004'
  static cardName = '九命猫'

  constructor (star) {
    super({
      id: '3004',
      type: 'R',
      name: '九命猫',
      star: star
    })
  }
}
