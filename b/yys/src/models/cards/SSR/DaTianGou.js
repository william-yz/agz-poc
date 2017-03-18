import Card from '../../Card'

export default class DaTianGou extends Card {

  static _id = '1005'
  static cardName = '大天狗'

  constructor (star) {
    super({
      id: '1005',
      type: 'SSR',
      name: '大天狗',
      star: star
    })
  }
}
