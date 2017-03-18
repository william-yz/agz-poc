import Card from '../../Card'

export default class HaiFangZhu extends Card {

  static _id = '2011'
  static cardName = '海坊主'

  constructor (star) {
    super({
      id: '2011',
      type: 'SR',
      name: '海坊主',
      star: star
    })
  }
}
