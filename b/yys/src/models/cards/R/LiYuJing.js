import Card from '../../Card'

export default class LiYuJing extends Card {

  static _id = '3003'
  static cardName = '鲤鱼精'

  constructor (star) {
    super({
      id: '3003',
      type: 'R',
      name: '鲤鱼精',
      star: star
    })
  }
}
