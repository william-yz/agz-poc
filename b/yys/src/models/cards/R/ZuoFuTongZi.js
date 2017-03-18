import Card from '../../Card'

export default class ZuoFuTongZi extends Card {

  static _id = '3002'
  static cardName = '座敷童子'

  constructor (star) {
    super({
      id: '3002',
      type: 'R',
      name: '座敷童子',
      star: star
    })
  }
}
