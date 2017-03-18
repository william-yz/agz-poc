import Card from '../../Card'

export default class WanNianZhu extends Card {

  static _id = '2032'
  static cardName = '万年竹'

  constructor (star) {
    super({
      id: '2032',
      type: 'SR',
      name: '万年竹',
      star: star
    })
  }
}
