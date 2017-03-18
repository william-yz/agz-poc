import Card from '../../Card'

export default class YingCao extends Card {

  static _id = '3025'
  static cardName = '萤草'

  constructor (star) {
    super({
      id: '3025',
      type: 'R',
      name: '萤草',
      star: star
    })
  }
}
