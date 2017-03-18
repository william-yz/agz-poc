import Card from '../../Card'

export default class ShanTu extends Card {

  static _id = '3024'
  static cardName = '山兔'

  constructor (star) {
    super({
      id: '3024',
      type: 'R',
      name: '山兔',
      star: star
    })
  }
}
