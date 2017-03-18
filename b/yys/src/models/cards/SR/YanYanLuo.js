import Card from '../../Card'

export default class YanYanLuo extends Card {

  static _id = '2031'
  static cardName = '烟烟罗'

  constructor (star) {
    super({
      id: '2031',
      type: 'SR',
      name: '烟烟罗',
      star: star
    })
  }
}
