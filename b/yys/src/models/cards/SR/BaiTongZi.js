import Card from '../../Card'

export default class BaiTongZi extends Card {

  static _id = '2030'
  static cardName = '白童子'

  constructor (star) {
    super({
      id: '2030',
      type: 'SR',
      name: '白童子',
      star: star
    })
  }
}
