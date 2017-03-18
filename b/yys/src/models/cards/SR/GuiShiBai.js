import Card from '../../Card'

export default class GuiShiBai extends Card {

  static _id = '2003'
  static cardName = '鬼使白'

  constructor (star) {
    super({
      id: '2003',
      type: 'SR',
      name: '鬼使白',
      star: star
    })
  }
}
