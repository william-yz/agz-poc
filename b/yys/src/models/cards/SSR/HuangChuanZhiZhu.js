import Card from '../../Card'

export default class HuangChuanZhiZhu extends Card {

  static _id = '1003'
  static cardName = '荒川之主'

  constructor (star) {
    super({
      id: '1003',
      type: 'SSR',
      name: '荒川之主',
      star: star
    })
  }
}
