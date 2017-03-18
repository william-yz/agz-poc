import Card from '../../Card'

export default class TongNan extends Card {

  static _id = '3007'
  static cardName = '童男'

  constructor (star) {
    super({
      id: '3007',
      type: 'R',
      name: '童男',
      star: star
    })
  }
}
