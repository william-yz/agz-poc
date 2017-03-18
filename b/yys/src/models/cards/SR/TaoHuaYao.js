import Card from '../../Card'

export default class TaoHuaYao extends Card {

  static _id = '2001'
  static cardName = '桃花妖'

  constructor (star) {
    super({
      id: '2001',
      type: 'SR',
      name: '桃花妖',
      star: star
    })
  }
}
