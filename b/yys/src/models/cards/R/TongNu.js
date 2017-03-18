import Card from '../../Card'

export default class TongNu extends Card {

  static _id = '3008'
  static cardName = '童女'

  constructor (star) {
    super({
      id: '3008',
      type: 'R',
      name: '童女',
      star: star
    })
  }
}
