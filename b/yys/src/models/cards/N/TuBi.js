import Card from '../../Card'

export default class TuBi extends Card {

  static _id = '4012'
  static cardName = '涂壁'

  constructor (star) {
    super({
      id: '4012',
      type: 'N',
      name: '涂壁',
      star: star
    })
  }
}
