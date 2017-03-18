import Card from '../../Card'

export default class GuiLeiShi extends Card {

  static _id = '2010'
  static cardName = '傀儡师'

  constructor (star) {
    super({
      id: '2010',
      type: 'SR',
      name: '傀儡师',
      star: star
    })
  }
}
