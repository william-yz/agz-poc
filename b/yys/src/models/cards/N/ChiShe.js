import Card from '../../Card'

export default class ChiShe extends Card {

  static _id = '4007'
  static cardName = '赤舌'

  constructor (star) {
    super({
      id: '4007',
      type: 'N',
      name: '赤舌',
      star: star
    })
  }
}
