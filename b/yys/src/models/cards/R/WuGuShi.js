import Card from '../../Card'

export default class WuGuShi extends Card {

  static _id = '3010'
  static cardName = '巫蛊师'

  constructor (star) {
    super({
      id: '3010',
      type: 'R',
      name: '巫蛊师',
      star: star
    })
  }
}
