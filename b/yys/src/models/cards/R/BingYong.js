import Card from '../../Card'

export default class BingYong extends Card {

  static _id = '3026'
  static cardName = '兵俑'

  constructor (star) {
    super({
      id: '3026',
      type: 'R',
      name: '兵俑',
      star: star
    })
  }
}
