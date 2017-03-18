import Card from '../../Card'

export default class LianYou extends Card {

  static _id = '2024'
  static cardName = '镰鼬'

  constructor (star) {
    super({
      id: '2024',
      type: 'SR',
      name: '镰鼬',
      star: star
    })
  }
}
