import Card from '../../Card'

export default class EGui extends Card {

  static _id = '3009'
  static cardName = '饿鬼'

  constructor (star) {
    super({
      id: '3009',
      type: 'R',
      name: '饿鬼',
      star: star
    })
  }
}
