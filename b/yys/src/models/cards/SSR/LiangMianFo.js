import Card from '../../Card'

export default class LiangMianFo extends Card {

  static _id = '1006'
  static cardName = '两面佛'

  constructor (star) {
    super({
      id: '1006',
      type: 'SSR',
      name: '两面佛',
      star: star
    })
  }
}
