import Card from '../../Card'

export default class QingJi extends Card {

  static _id = '2023'
  static cardName = '清姬'

  constructor (star) {
    super({
      id: '2023',
      type: 'SR',
      name: '清姬',
      star: star
    })
  }
}
