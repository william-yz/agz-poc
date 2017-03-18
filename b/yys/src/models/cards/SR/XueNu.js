import Card from '../../Card'

export default class XueNu extends Card {

  static _id = '2002'
  static cardName = '雪女'

  constructor (star) {
    super({
      id: '2002',
      type: 'SR',
      name: '雪女',
      star: star
    })
  }
}
