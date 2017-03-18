import Card from '../../Card'

export default class HuiBiShou extends Card {

  static _id = '2020'
  static cardName = '惠比寿'

  constructor (star) {
    super({
      id: '2020',
      type: 'SR',
      name: '惠比寿',
      star: star
    })
  }
}
