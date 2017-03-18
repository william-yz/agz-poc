import Card from '../../Card'

export default class JiuTunTongZi extends Card {

  static _id = '1001'
  static cardName = '酒吞童子'

  constructor (star) {
    super({
      id: '1001',
      type: 'SSR',
      name: '酒吞童子',
      star: star
    })
  }
}
