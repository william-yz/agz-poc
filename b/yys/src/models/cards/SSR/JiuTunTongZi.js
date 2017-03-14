import Card from '../Card'

export default class JiuTunTongZi extends Card {

  static id = '001'
  static cardName = '酒吞童子'

  constructor (star) {
    super({
      id: '001',
      type: 'SSR',
      name: '酒吞童子',
      star: star
    })
  }


}
