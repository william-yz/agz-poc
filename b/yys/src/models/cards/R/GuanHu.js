import Card from '../../Card'

export default class GuanHu extends Card {

  static _id = '3023'
  static cardName = '管狐'

  constructor (star) {
    super({
      id: '3023',
      type: 'R',
      name: '管狐',
      star: star
    })
  }
}
