import Card from '../../Card'

export default class YiMuLian extends Card {

  static _id = '1009'
  static cardName = '一目连'

  constructor (star) {
    super({
      id: '1009',
      type: 'SSR',
      name: '一目连',
      star: star
    })
  }
}
