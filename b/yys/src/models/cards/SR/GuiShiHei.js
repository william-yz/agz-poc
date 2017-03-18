import Card from '../../Card'

export default class GuiShiHei extends Card {

  static _id = '2004'
  static cardName = '鬼使黑'

  constructor (star) {
    super({
      id: '2004',
      type: 'SR',
      name: '鬼使黑',
      star: star
    })
  }
}
