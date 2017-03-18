import Card from '../../Card'

export default class MengPo extends Card {

  static _id = '2005'
  static cardName = '孟婆'

  constructor (star) {
    super({
      id: '2005',
      type: 'SR',
      name: '孟婆',
      star: star
    })
  }
}
