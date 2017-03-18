import Card from '../../Card'

export default class TieShu extends Card {

  static _id = '3021'
  static cardName = '铁鼠'

  constructor (star) {
    super({
      id: '3021',
      type: 'R',
      name: '铁鼠',
      star: star
    })
  }
}
