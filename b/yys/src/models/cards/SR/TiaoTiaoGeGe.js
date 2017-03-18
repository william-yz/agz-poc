import Card from '../../Card'

export default class TiaoTiaoGeGe extends Card {

  static _id = '2009'
  static cardName = '跳跳哥哥'

  constructor (star) {
    super({
      id: '2009',
      type: 'SR',
      name: '跳跳哥哥',
      star: star
    })
  }
}
