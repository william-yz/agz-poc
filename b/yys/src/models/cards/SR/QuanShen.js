import Card from '../../Card'

export default class QuanShen extends Card {

  static _id = '2006'
  static cardName = '犬神'

  constructor (star) {
    super({
      id: '2006',
      type: 'SR',
      name: '犬神',
      star: star
    })
  }
}
