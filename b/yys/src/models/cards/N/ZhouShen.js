import Card from '../../Card'

export default class ZhouShen extends Card {

  static _id = '4011'
  static cardName = '帚神'

  constructor (star) {
    super({
      id: '4011',
      type: 'N',
      name: '帚神',
      star: star
    })
  }
}
