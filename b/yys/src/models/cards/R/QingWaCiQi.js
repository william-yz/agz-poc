import Card from '../../Card'

export default class QingWaCiQi extends Card {

  static _id = '3019'
  static cardName = '青蛙瓷器'

  constructor (star) {
    super({
      id: '3019',
      type: 'R',
      name: '青蛙瓷器',
      star: star
    })
  }
}
