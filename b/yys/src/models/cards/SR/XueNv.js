import Card from '../Card'

export default class XueNv extends Card {

  static id = '101'
  static cardName = '雪女'

  constructor (star) {
    super({
      id: '101',
      type: 'SR',
      name: '雪女',
      star: star
    })
  }


}
