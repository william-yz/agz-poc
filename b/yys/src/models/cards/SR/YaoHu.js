import Card from '../../Card'

export default class YaoHu extends Card {

  static _id = '2015'
  static cardName = '妖狐'

  constructor (star) {
    super({
      id: '2015',
      type: 'SR',
      name: '妖狐',
      star: star
    })
  }
}
