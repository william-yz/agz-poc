import Card from '../../Card'

export default class DengLongGui extends Card {

  static _id = '4005'
  static cardName = '灯笼鬼'

  constructor (star) {
    super({
      id: '4005',
      type: 'N',
      name: '灯笼鬼',
      star: star
    })
  }
}
