import Card from '../../Card'

export default class YaoDaoJi extends Card {

  static _id = '1008'
  static cardName = '妖刀姬'

  constructor (star) {
    super({
      id: '1008',
      type: 'SSR',
      name: '妖刀姬',
      star: star
    })
  }
}
