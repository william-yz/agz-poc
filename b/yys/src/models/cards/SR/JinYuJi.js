import Card from '../../Card'

export default class JinYuJi extends Card {

  static _id = '2033'
  static cardName = '金鱼姬'

  constructor (star) {
    super({
      id: '2033',
      type: 'SR',
      name: '金鱼姬',
      star: star
    })
  }
}
