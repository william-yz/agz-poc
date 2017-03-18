import Card from '../../Card'

export default class JiShengHun extends Card {

  static _id = '4009'
  static cardName = '寄生魂'

  constructor (star) {
    super({
      id: '4009',
      type: 'N',
      name: '寄生魂',
      star: star
    })
  }
}
