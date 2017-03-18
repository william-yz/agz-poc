import Card from '../../Card'

export default class YingHuaYao extends Card {

  static _id = '2025'
  static cardName = '樱花妖'

  constructor (star) {
    super({
      id: '2025',
      type: 'SR',
      name: '樱花妖',
      star: star
    })
  }
}
