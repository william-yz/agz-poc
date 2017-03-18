import Card from '../../Card'

export default class YaTianGou extends Card {

  static _id = '3011'
  static cardName = '鸦天狗'

  constructor (star) {
    super({
      id: '3011',
      type: 'R',
      name: '鸦天狗',
      star: star
    })
  }
}
