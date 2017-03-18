import Card from '../../Card'

export default class JiaoTu extends Card {

  static _id = '3022'
  static cardName = '椒图'

  constructor (star) {
    super({
      id: '3022',
      type: 'R',
      name: '椒图',
      star: star
    })
  }
}
