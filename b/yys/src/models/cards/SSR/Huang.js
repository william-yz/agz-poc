import Card from '../../Card'

export default class Huang extends Card {

  static _id = '1013'
  static cardName = '荒'

  constructor (star) {
    super({
      id: '1013',
      type: 'SSR',
      name: '荒',
      star: star
    })
  }
}
