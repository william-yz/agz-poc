import Card from '../../Card'

export default class SanWeiHu extends Card {

  static _id = '3001'
  static cardName = '三尾狐'

  constructor (star) {
    super({
      id: '3001',
      type: 'R',
      name: '三尾狐',
      star: star
    })
  }
}
