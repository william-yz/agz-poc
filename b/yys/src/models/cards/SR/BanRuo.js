import Card from '../../Card'

export default class BanRuo extends Card {

  static _id = '2026'
  static cardName = '般若'

  constructor (star) {
    super({
      id: '2026',
      type: 'SR',
      name: '般若',
      star: star
    })
  }
}
