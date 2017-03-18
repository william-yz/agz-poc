import Card from '../../Card'

export default class QingXingDeng extends Card {

  static _id = '1010'
  static cardName = '青行灯'

  constructor (star) {
    super({
      id: '1010',
      type: 'SSR',
      name: '青行灯',
      star: star
    })
  }
}
