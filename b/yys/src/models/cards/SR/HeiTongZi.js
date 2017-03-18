import Card from '../../Card'

export default class HeiTongZi extends Card {

  static _id = '2029'
  static cardName = '黑童子'

  constructor (star) {
    super({
      id: '2029',
      type: 'SR',
      name: '黑童子',
      star: star
    })
  }
}
