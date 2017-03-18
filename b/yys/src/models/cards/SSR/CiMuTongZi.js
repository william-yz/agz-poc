import Card from '../../Card'

export default class CiMuTongZi extends Card {

  static _id = '1002'
  static cardName = '茨木童子'

  constructor (star) {
    super({
      id: '1002',
      type: 'SSR',
      name: '茨木童子',
      star: star
    })
  }
}
