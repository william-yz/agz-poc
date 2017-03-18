import Card from '../../Card'

export default class TianXieGuiHuang extends Card {

  static _id = '4002'
  static cardName = '天邪鬼黄'

  constructor (star) {
    super({
      id: '4002',
      type: 'N',
      name: '天邪鬼黄',
      star: star
    })
  }
}
