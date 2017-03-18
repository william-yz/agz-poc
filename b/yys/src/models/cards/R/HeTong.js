import Card from '../../Card'

export default class HeTong extends Card {

  static _id = '3006'
  static cardName = '河童'

  constructor (star) {
    super({
      id: '3006',
      type: 'R',
      name: '河童',
      star: star
    })
  }
}
