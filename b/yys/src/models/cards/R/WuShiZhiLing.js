import Card from '../../Card'

export default class WuShiZhiLing extends Card {

  static _id = '3013'
  static cardName = '武士之灵'

  constructor (star) {
    super({
      id: '3013',
      type: 'R',
      name: '武士之灵',
      star: star
    })
  }
}
