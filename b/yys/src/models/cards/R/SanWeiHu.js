import Card from '../Card'

export default class SanWeiHu extends Card {

  static id = '201'
  static cardName = '三尾狐'

  constructor (star) {
    super({
      id: '201',
      type: 'R',
      name: '九尾狐',
      star: star
    })
  }


}
